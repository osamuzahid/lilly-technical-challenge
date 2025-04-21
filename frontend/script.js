fetch('http://127.0.0.1:8000/medicines') //Retrieving the list of medicines to display it
.then(response => response.json())
.then(data => {console.log(data);
    if (data.medicines)
        {
            //Looping through the medicines and creating a new div for each
            var medicinesList = document.getElementById('medicine-list');
            medicinesList.innerHTML = '';
            for (var i = 0; i < data.medicines.length; i++)
            {
                var medicine = data.medicines[i];
                var medicineDiv = document.createElement('div');
                medicineDiv.className = 'medicine-items';
    
                var name;
                if (medicine.name && medicine.name != ""){
                    name = medicine.name;
                }
                else{
                    name = "Name: Unavailable";
                }
    
                var price;
                //Ensuring medicines have a valid price
                if(medicine.price !== null && medicine.price != undefined){
                    //Ensuring medicine prices are shown up to 2 decimal points for visual consistency
                    price = '$' + Number(medicine.price).toFixed(2);
                }
                else{
                    price = "Unavailable";
                }
                medicineDiv.innerHTML = '<h2>' + name + '</h2><p>Price: ' + price + '</p>';
                medicinesList.appendChild(medicineDiv);
            }
            
            fetch('http://127.0.0.1:8000/average-price') //Retrieving the average price using the new API endpoint in the backend
            .then(response => response.json())
            .then(data => {console.log(data);
                //Creating a new div to show the average price
                avgPrice = Number(data).toFixed(2);//Ensuring the average price is shown up to 2 decimal points, similar to the rest of the medicine
                var medicinesList = document.getElementById('medicine-list');
                var averagePriceDiv = document.createElement('div');
                averagePriceDiv.id = 'average-price';
                averagePriceDiv.innerHTML = '<h2>Average Medicine Price: $' + avgPrice + '</h2>';
                medicinesList.appendChild(averagePriceDiv);
}
)
.catch(error => console.log(error));
        }
        else
        {
            console.log('No medicines found');
            medicinesList.innerHTML = '<p>No medicines available at the moment</p>';
        }
}
)
.catch(error => console.log(error));



var form = document.getElementById('medicine-entry-form');
form.reset();
form.addEventListener('submit', function(event) {
    event.preventDefault();
    var newMedicine = document.getElementById('medicine-name').value;
    var newPrice = parseFloat(document.getElementById('medicine-price').value);

    if (newPrice == 0 || newPrice <= 0) {
        console.log('Invalid price value');
        alert("Invalid price");
        return;  // Prevent sending the request if price is invalid
    }
    else
    {
        //Using the /create endpoint in the backend to add new medicines through the HTML form
        fetch('http://127.0.0.1:8000/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'name': newMedicine, 'price': newPrice
            })
        })
        .then (response => response.json())
        .then(data => {console.log(data);     
            if (data === null) {
                console.log('Error adding medicine');
            } else {
                console.log('New medicine added ', data.message);
                location.reload();
                form.reset();
            }
        })
        
        .catch(error => console.log(error))
    }
})

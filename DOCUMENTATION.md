# Technical Challenge Documentation

## Approach
I mostly stuck with a step-by-step approach throughout the challenge, tackling the objectives in order. However, I left the styling part to the very end because I felt that getting the functionality right was more critical. External resources include the various YouTube videos that I went through in order to help resolve an issue that I faced trying to POST information to the backend. I also went back and forth between my code, YouTube, and resources like w3schools to re-familiarize with JavaScript syntax, particularly the fetch API, as I haven't utilized it much throughout the past year.

## Objectives - Innovative Solutions

I came up with various innovative solutions to implement all the required functionality and ensure everything worked consistently, such as the following:

* Implemented thorough data checks and validation while fetching the medicine list to avoid issues if there's missing/invalid data.
* Placed guards and data checks while adding new medicines, ensuring medicines with invalid price data aren't entered into the system.
* Used a responsive grid layout to display the medicine list in a visually appealing manner. Added hover effects to make everything feel responsive and intuitive.
* Created a backend function to caclculate the average medicine price, which can then be fetched any time onto the frontend.
* Standardized all price displays to show exactly 2 decimal places (e.g., $24.00 instead of $24), ensuring visual consistency.


## Problems Faced

Initially, I was having issues running the script, as it failed to find the requirements file in the backend folder. Simply moving the requirements file to the main folder resolved this. Next, I faced some trouble POST-ing information to the backend when adding new medicines, but I found after some research that it was because I wasn't using ‘x-www-form-urlencoded’ as my content type in the POST request header, which is required for HTML forms. Changing the header and encoding the data in the request body using ‘new URLSearchParams’ resolved the issue. Lastly, the average price card occasionally failed to load because the calculation was sometimes triggered before the medicine data finished loading, creating a race condition. By restructuring the code to ensure the medicine list fully loads before calculating the average price, I resolved this inconsistency.


## Evaluation
I felt good about the challenge, as it helped me brush up on key web development concepts again. While I feel most of the tasks went fairly well, I believe I handled the optional Python backend task more effectively and quite quickly, as this is a language that I am actively using across multiple university modules and have a much firmer handle on at the moment.  I did go a over the recommended amount of time due to some of the troubleshooting I had to do and because I applied a fair bit of styling to every aspect of the interface.

If I were to do this again given more time, I’d likely implement the delete and update functions that are already available in the backend, adding the functionality to remove out-of-stock medicines and updating prices. Beyond this, I'd like refine the look and feel of the frontend a bit more, perhaps splitting the list of medicines and add, update, delete functions into separate pages to make interface less cluttered.
# Fund Advisor

Fund Advisor is an investment platform that suggests mutual funds to invest in based on certain inputs selected in a questionaire. 

| Technologies Used|
|------------------|
| Python           |
| SciKit           |
| React.js         |
| JavaScript       |
| Selenium         |
| Flask            |
| Beautiful Soup   |

Fund Advisor is built with react and uses material ui for the css components. 

Data was scraped from cnn money using selenium web-driver and beautiful soup libraries.
The database created has over 20,000 Mutual Funds that are available in the United States.

Machine learning algorithm K-Means clustering was used to cluster mutual funds together based on investment style and risk rating to provide recommendations to potential investors. 

YTD returns along with the funds beta were compared in order to cluster similarties. 

After the user answers a series of questions about thier preferences four charts are displayed showing valuable information about the investment. 

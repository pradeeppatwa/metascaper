# Metascaper
__Project Title__: Scrape Website Metadata using Azure Functions

__Problem Statement/Opportunity:__   
meta information is used by various social media and open graph platforms to produce display cards When a URL is used. Another reason to use meta-data is to improve your search engine visibility. Many platforms, such as Ghost, WordPress, and others, will do this for you automatically. When working with custom-built websites, though, you'll need to manually provide the information for the search engine to crawl and detect the content. In this project, I'll employ an Azure function to display meta-information within the webpage in order to present results for any website based on the user's query. This project is built on the same concept of taking live data from any website's meta-information and determining whether or not it will display the correct information on social media platforms.

__Project Description:__
It's never been easier to decouple the functionality of your web application and use serverless resources to handle some of the application's workloads. Any production application that uses serverless code to dynamically update data in real-time may do the same. When working with serverless code and integrating it with your existing codebase, Azure Functions has delivered a seamless and simple experience. As a result, it was quite simple for newcomers to get started with serverless expertise. It's never been easier to decouple the functionality of your web application and use serverless resources to handle some of the application's workloads. Any production application that uses serverless code to dynamically update data in real-time may do the same. When working with serverless code and integrating it with your existing codebase, Azure Functions has delivered a seamless and simple experience. As a result, it was quite simple for newcomers to get started with serverless expertise. I'll teach you how to use Azure Function to pull meta-data from many websites in this project. I'll be utilising open-graph-scraper, a Node JS programme that scrapes meta-information from webpages.

__Primary Azure Technology:__
Azure Functions, Visual Studio Code, Cloud Shell, Aure powershell 

to generate metadata of any website, write the domain name of that website in following link:
https://fetchmetatag.azurewebsites.net/api/metascraper?url={websiteaddress.com}

for example to generate meta data of __*youtube*__ visit following link : 

https://fetchmetatag.azurewebsites.net/api/metascraper?url=youtube.com

you will get output as follows:

![image](https://user-images.githubusercontent.com/65440507/145861760-5c0b2632-e132-47bd-997c-6aefd1044ab6.png)

	



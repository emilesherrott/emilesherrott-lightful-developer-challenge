# Front-End Developer Challenge<a name="top_of_page"></a>


This project was created for Lighful with the free GraphQL API at [charitybase.uk](https://charitybase.uk/) as part of a technical test.
My API has been included within the source code - however in this instance there's no risk attatched. In a real world example I'd hide my API key server side for security. 

## Task Objectives
- [x] Order results by income (least income furst).
- [x] Display contact information for each charity.
- [x] Display income and spending for each charity.
- [x] Display grants received for each charity.
- [x] Display the total amount each charity has received in grants and what % of their income this represents.

### Bonus Tasks
- [ ] Use of TypeScript.
- [ ] Tests
- [x] Search Field
- [x] Charity View Page



## Loading the application locally

Clone the repo by running the following code from your machines Command Line:

### `git clone <url>`

```
git clone https://github.com/emilesherrott/emilesherrott-lightful-developer-challenge.git
```

In the project directory, you can run:

### `yarn` or `yarn install`

Will be run to to install all dependencies for a project locally.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<details>
  <summary>How this application works</summary>
  <p></p>
  <ul>
    <li>On load you should be presented with requested data, mapped through a series of tiles displaying sorted charity data.</li>
    <li>By clicking on any of the tiles you'll be re-routed to a 'show' page giving additional information on each charity.</li>
    <li>Buttons shown in green and red will render components conditionally displaying extra information about income, spending, grants and contacts.</li>
    <li>At the top of the page you have a search bar to find available charities from any location within the application.</li>
  </ul>
</details>

<details>
  <summary>Favourite aspects of code</summary>
  <p></p>
  <ul>
    <li>Learning the syntax for accessing the GraphQL API.</li>
    <li>Use of ternanry operators throughout code to conditionally render application features, i.e. grants button.</li>
    <li>Use of useParams to make GET request for specific charity data.</li>
</details>



[Go to top](#top_of_page)

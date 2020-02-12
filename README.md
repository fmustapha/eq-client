# EQ Works

EQ Works is a react application based on a RESTful API for users to view Intersting places (POIs) in North America and their visit statistics.

## Application on Heroku

[View](https://eq-client.herokuapp.com/home/maps)

## Development

This application was developed using the following frameworks.

- [NodeJs](https://nodejs.org)
- [Create React App](https://github.com/facebook/create-react-app)
- [express](https://expressjs.com/)
- [Postgres](https://www.postgresql.org/docs/9.6/static/libpq-envars.html)

## Application Features

#### Displays stats of POIs

Users can view POI on maps and the events/stats per day and hour on graphs.

#### Usage

- Click on Maps tab link to view POIs on the google Map
- Click on Charts tab link to view POIs stats on charts
- Click on Tables tab link to view POIs and their stats.<br />
  On the Tables tab, you can search by entering the POI name e.g. EQ Works
  in the search bar. Results are highlighted in grey.
  Users can use the table navigation below the table to scroll through search result pages.

## Setup and Installation

- Ensure that you have NodeJs and React installed on your machine. This app uses Node (v13.8.0)
- Clone the repository `$ https://github.com/fmustapha/eq-client.git`
- Change into the directory `$ cd eq-client`
- Install all required dependencies with `$ npm install` or `$ yarn install`
- Create a `.env` file in your root directory as described in `.env.sample` file
- You will need to get a google API key for the `.env` file. <br />
Follow instructions [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Available Scripts and Usage

- Run `npm start` to start the application.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project implements the client side for ws-product-nodejs found [here](https://eq-back.herokuapp.com/).
View on github [here](https://eq-back.herokuapp.com/)

# DHIS2 Dashboards

A React application that fetches and renders the list of dashboards available to a DHIS2 user

## App Demo link [link](https://dhis2-dashboards-app.vercel.app/)

## Specifications

1. Show the dashboards in a list of collapsible cards
   a. The first dashboard card is expanded on load by default
   b. When the user clicks on another dashboard, expand that dashboard card
   to show its details and collapse the other dashboards

2. When a dashboard is expanded, then show all the dashboard items in that
   dashboard
   a. Show an icon based on the item type (visualization, map, text, etc.)
   b. Show the dashboard item name
   i.
   For text types, show the text of the dashboard item in place of its
   name

3. Ability to “star” a dashboard and persist the starred states on reload.

4. Ability to filter dashboard items of a certain type, so if the user selects
   “visualization”, only the visualization dashboard items are displayed.
   a. Keep the filter selected when the user expands and collapses dashboard
   cards
   b. Some dashboard items (like visualization and map) are expensive to
   render, so make sure there are no unnecessary re-renders

## Tools

> React

> Typescript

> DHIS2 UI Library

> Restful APIs

## Available Scripts

### `yarn start`

Runs the app

### `yarn test`

Launches the test runner

### `yarn build`

Builds the app for production to the `build` folder

## Design choices / assumptions

## Contributions guide

Fork this repository and then make a pull request to this repo.

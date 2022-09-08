# Soccer Single Page Application

Single page application using react and [Sportsmonk API](https://www.sportmonks.com//)

<br/>

# How to run the project

These instructions will get you a copy of the project up and running on your local machine.

**Required Software**

-   [Git](https://git-scm.com/)
-   [NodeJS (> 16.15.0)](https://nodejs.org/en/download/current/)
-   [Visual Studio Code](https://code.visualstudio.com/) or other code editor.
-   [Yarn](https://https://yarnpkg.com//) (optional).

<br/>

## Installing and Running the project

<br/>

### Clone the repository to your local machine either with:

```
git clone git@github.com:afgcsborges/soccer-spa.git
```

or

```
git clone https://github.com/afgcsborges/soccer-spa.git
```

<br/>

### Run the install command from the project root:

If using yarn:

```
yarn install
```
If using npm:

```
npm install
```

It will instal all needed Project dependencies.

<br/>

### Run the start command from the project root:

If using yarn:

```
yarn start
```
If using npm:

```
npm start
```

Navigate to http://localhost:3000 and start using the app.

<br/>

## Running the tests

To run unit tests, run the command:

If using yarn:

```
yarn test
```
If using npm:

```
npm test
```

Unit tests screenshots can be updated by adding the flag -u to any of the above comands.

Example:
```
yarn test -u
```

Coverage threshold:
```
{
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100
}
```


<br>

# Using the application

**App Features**

-   Allow users to select from available legues
-   Allow users to select from available seasons from currently selected league
-   Allow users to select from available stages from currently selected season
-   Display standings information from selected: League -> Season -> Stage
-   Display top scorers information from selected: League -> Season -> Stage
-   Toggle between standings and top scorers
-   Every table column across the application is sortable
-   Clicking on a team name at the standings table will display the team players and team information
-   Clicking on a player name either at the top scorers table or at the team players table will display the player profile

Note: API key can be changed in the .env file on the project root.

Althought the application has not been tested with another key besides the provided one, it should work properly if the data received is consistent.

<br>

**App Usage**

After running the instructions of "How to run the project" described above:
-   Select a league from the available leagues
    - Selected league can be changed anytime we are viewing the standings/top scorers
    - You can type any text on the league select to filter the select options
-   Most recent season will be selected by default after a league is selected or changed
    - Change season if you want to see other season standings/top scorers 
-   First stage received will be selected by default after a season is selected or changed
    - Change stage if you want to see other stage standings/top scorers
-   Use the toggle to change between standings and top scorers view
-   While viewing the league standings, click on any team name to display the team information and team squad
    - Click the "Back to standings" button to navigate back to the standings/top scorers view
-   While viewing the league top scorers, click on any player name to display the player profile
    - Click on the "Close" button to close the player profile.
-   While viewing the team information, click on any player name to display the player profile
    - Click on the "Close" button to close the player profile.
-   Click on any column acroos the aplication to sort
    - First click sorts ascending
    - Second clikc sorts descending
    - Third click cancels sorting
-   League and Season selects can be cleared byt hovering on the and clicking the cross icon that appears


**Demo**

https://user-images.githubusercontent.com/68897001/189165076-bc5de5f1-33c7-4e4e-8b88-32a35d3229d0.mov



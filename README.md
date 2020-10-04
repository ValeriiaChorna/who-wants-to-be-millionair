# who-wants-to-be-millionaire

Who Wants to Be a Millionaire - a simple client side web application game
(React, React-router). Try the game by
https://valeriiachorna.github.io/who-wants-to-be-millionaire/

<br />
This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).
Also in this project was added tools for writing neat code (ESLint-packages - prettier, husky, lint-staged). Don't forget to run `npm i` in the project directory to install all depentances from package.json.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

### Questions for the game

The program only reads questions.json (/src/content). You can add more questions
to array (example of format is below). Questions in the game will be randomly
selected.

    {
        "question": "How many Suns do we have?",
        "answers": ["1", "4", "3", "2"],  //the array for the possible answer texts
        "correctAnswIndex": 0,            //index of correct answer from array "answer"
        "level": "easy"                   //this fild is not used now
    }

# UBF Quiz & Subscription Service

This single page web app was built in React and is an essential training app for the professional pilot, helping them prepare quicker and better for their sim check with interactive, immersive training, anywhere and at any time. The Gold subscription (with payment to be implemented), pilots have access to study material to prepare for their UBF aviation quiz.

## Usage

Use the package manager yarn to run the UBF Quiz & Subscription Service in development mode.

`yarn start`

Then, build the app for production to the `build` folder.

`yarn build`


## Additional Thoughts

This project does not yet have tests implemented. I have used Rspec many times to create tests in Ruby, but I have yet to build a test in React, which is a language I have been learning as of recent. Given extra time, I would be happy to learn how to incorporate tests using Jest.


TDD - Please make sure you use a test driven approach. You may use a test library of your choice. Please make sure all tests are passing before submission.



## Instructions

Quiz:
- user can select true or false for each of the questions
- user can move to the next question or back to a previous question at any time
- user can only submit when they have answered all questions
- user receives feedback instanly after submission on how many questions they answered correctly
Subscription service has 2 subscription plans:

Subscription service:
- With a Free subscription plan (default) the user can answer and submit the quiz
- With a Gold subscription plan, the user can answer and submit the quiz and access documentation to prepare for the quiz
- The Gold subscription costs £12 a year or £1.10 a month
- User has the ability to switch between subscription plans at any time; upgrade/downgrade or switch from Gold plan yearly to monthly and the other way around, so the application needs to be aware how much to charge and when to charge next.
- If user switches from Gold plan to Free plan (so cancels the paid subscription) the application will not reimburse the money and the Free plan will start once the paid plan ends.


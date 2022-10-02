# Assurity Coding Exercise

Coding exercise for Assurity Consulting 

## Requirements:

### Technical Assignment

 Using the API given below, create test automation for the listed acceptance criteria:

API = https://api.tmsandbox.co.nz/v1/Categories/6328/Details.json?catalogue=false

#### Acceptance Criteria

Name = "Badges"
CanRelist = true
The Promotions element with Name = "Feature" has a Description that contains the text "Better position in category"


### Instructions:

Your solution needs to be written using a programming language of your choice (not a tool like SoapUI or Postman). Ensure you include a clear README
Submit your solution to us in a format that lets us execute and review the code (it must be submitted in a public repository like Bitbucket or Github)
Your solution must validate all the three acceptance criteria
Points will be awarded for meeting the criteria, style and the use of good practices and appropriate use of source control
We want to see your best work - no lazy coding or comments.

### Hints:

- We build and run our tests from CI/CD pipelines (not IDEs)
- We are efficient, so we avoid reinventing the wheel
- We consider our Test Engineering practices to be underpinned by Software Engineering practices, standards and consider our test code to be of a production standard
- We *really* like Clean Code and aspire to be Pragmatic Programmers

## Running Tests

1) Clone repo: 

  ```bash
  git clone https://github.com/gisaacsotelo/assurity-coding-exercise.git
  ```

2) Install dependencies
  ```bash
  npm install
  ```
3) Run tests
  ```bash
  npm test
  ```

## CI/CD

check Actions: https://github.com/gisaacsotelo/assurity-coding-exercise/actions
# Sophia

Sophia is a philosophy-hub application of western philosophy.

## Installation

Navigate to https://github.com/TraeCoker/sohpiabackend to clone the database to your local machine

Next run
```bash
bundle install
```
followed by
```
rails db:create
rails db:migrate
rails db:seed
```

## Usage
After cloning the Sophia front end to your local machine, open the index.html file in your browser.

From the home page, users have three options: browse schools, browse pantheons, and create new pantheon.

Browse school renders a directory of philosophical schools and a list of their associated philosophers.

Selecting a school will give you more information about the school and the option to choose a philosopher to learn more about.

Selecting a philosopher will give you a bio and a list of their written works which link to copies of the works available in the public domain.

Selecting create pantheon will allow you to create your own personal pantheon of philosophers to learn from.

Once created, users can seek council with the philosophers of a given pantheon by clicking on their images, or press the inquiry button to be given a philosophical exercise, the completion of which will continue to generate new exercises.

Selecting the "browse panteons" option from the home page allows you to visit other user created pantheons the same way you would browse through schools.

## License
[MIT](https://choosealicense.com/licenses/mit/)
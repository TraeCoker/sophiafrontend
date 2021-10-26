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

<img width="567" alt="1" src="https://user-images.githubusercontent.com/79291960/138927460-de7a23a5-c293-4b45-a3da-5255df8385a0.PNG">

Browse school renders a directory of philosophical schools and a list of their associated philosophers.

<img width="896" alt="2" src="https://user-images.githubusercontent.com/79291960/138927572-fbb9269e-4154-4a89-b8b2-dd99823008d8.PNG">


Selecting a school will give you more information about the school and the option to choose a philosopher to learn more about.

<img width="872" alt="3" src="https://user-images.githubusercontent.com/79291960/138927929-953b9ba6-8692-4b2a-a0c2-8d5152de8183.PNG">

Selecting a philosopher will give you a bio and a list of their written works which link to copies of the works available in the public domain.

<img width="787" alt="4" src="https://user-images.githubusercontent.com/79291960/138928072-b54635f0-aadb-45ac-98e8-b20682bf7bd4.PNG">



Selecting create pantheon will allow you to create your own personal pantheon of philosophers to learn from.

<img width="767" alt="5" src="https://user-images.githubusercontent.com/79291960/138928138-650e7f60-89e8-43d3-bd83-d579bda6baf7.PNG">


Once created, users can seek council with the philosophers of a given pantheon by clicking on their images, or press the inquiry button to be given a philosophical exercise, the completion of which will continue to generate new exercises.

<img width="686" alt="6" src="https://user-images.githubusercontent.com/79291960/138928221-0559f45b-9d00-4b74-98b5-7ff494a46372.PNG">

Selecting the "browse panteons" option from the home page allows you to visit other user created pantheons the same way you would browse through schools.

## License
[MIT](https://choosealicense.com/licenses/mit/)
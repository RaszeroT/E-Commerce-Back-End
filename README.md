# Title:

E-Commerce Back End App

## Table of Contents:

[Description](#description)

[Installation](#installation)

[User Information](#user-information)

[Questions](#questions)

[What I Learned](#what-i-learned)

[Code in index.js](#code-in-javascript)

[Dependencies](#dependencies)

[Link to live site](#link-to-live-site)

[Link to gitHub repo](#link-to-github-repository)

[Images of website functionality](#images-of-webpage-functionality)

[License](#license)


## Description:

This application is a functional back end program that allows the user to request all database information via get routes. Search for a specific item within the application via unique id, create new items, update existing items, and delete existing items. Using 3rd party [library's](#dependencies) this application is a powerful database tool.

## Installation

To install this application please fork this repo. Then, run in terminal: 
//~ npm i

For this application to run successfully without errors you will need to create a .env folder with the following code:

* DB_NAME='ecommerce_db'
* DB_PASSWORD='your SQL password'
* DB_USER='your SQL user'

To use the existing data in the seed folder please run in terminal //~ npm run seed

Then to run the application please run in terminal //~ npm start

## User Information

<a href='https://github.com/RaszeroT'> Travis Shanhun's github username: RaszeroT</a>

Email: shanhun.codes@gmail.com

## Questions

Please reach out to me if you have any further questions via:

Email: shanhun.codes@gmail.com

<a href='https://github.com/RaszeroT/E-Commerce-Back-End'>E-Commerce Back End App</a>

## What I learned:

Creating this application I learned to successfully create database dataTypes using sequelize along with re-solidifying my knowledge of creating functional request routes to produce a clean database structure.

## Dependencies 

nodemon@3.0.1 (this is for live updates while creating functions. This dependency is not necessary for running the application)

dotenv@16.3.1

mysql2@3.6.5

express@4.17.1

sequelize@5.12.7

## Link to live site:

<a href="N/A">No live site to link</a>

## Video Tutorial:

<a href='https://drive.google.com/file/d/183UaZ_c_OOeEIfHtN_Gm2FA3nkRUSVfs/view'>Video Tutorial</a>

## License

MIT License

Copyright (c) 2023 RaszeroT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
# Project-2: Building My First Full-stack Application

## Overview

For this project, I attempted to develop web application that could be used by elementary school students to track their daily homework assignments and weekly extracurricular activities.  The goal was to develop an 'App' that would be easy to use, even for a 3rd grader.  

**Live site:** <https://safe-mesa-73187.herokuapp.com>

## Technologies Used

* Languages - HTML5, CSS3, Javascript, MongoDB, Mongoose, Express, HandleBars & Node JS 
* Designed utilizing methodologies learned during initial weeks of GA's SEI 21 program 
* Project Planning & User Stories via [Trello](https://trello.com/invite/b/I2WZ2Cgw/5371d2a9465194d0db3620690150dde3/ga-sei-21-project-2)
* Text Editor - Visual Studio Code v.1.33.0

## Wireframe
![Image](project-2-wireframe.png)

## WhiteBoard
![Image](project2-whiteboard.png)

 
## Main Application Process & Related Details

The impetus for the development of Student Activities Tracker (SATR) App was the developer's real-life experiences with his 9 year-old daughter.  Over the course of the school year, any given week may find her involved in multiple activities.  Given the variety of activities and diverse range of interests, conflicting schedules were inevitable.  So the developer wanted to provide a tool she could utilize to track the completion status of daily homework assignments and take ownership of scheduling weekly afterschool activities.

This web application has been structured utilizing the Model-View-Controller (MVC) pattern. Best practices in terms of defining _RESTful_ routes were applied consistent with REST (Representational State Transfer)guidelines. Full CRUD (Create, Read, Update & Delete) capability is provided for each of the three models indicated below. 

In establishing this project's minimum viable product (MVP), the baseline assumes homework assignment's typical of The ANC School's 3rd grade (an Atlanta, GA based charter school). This App's model architecture employs 3 schemas, programmed in the code as User, Homework, and Activities. The overall process requires SATR users to input relevant details of their homework assignment(s) along with any afterschool activities. 

Pilot testing the basic functional MVP was performed with the aid of an actual 3rd grader (see below).  Information gleaned from that experience will be utilized for future updates to this web application. 

![Image](project2-app-pilot-test.png)

## Features

* Utilizes Node.js along with ExpressJS to set up and configure a server that listens for HTTP requests from your browser.
* Server-side rendering of data (values) via Handlebars
* Mongoose, the object document mapping (ODM) library, is used to facilitate getting data in and out the nosql database MongoDB.

## Future Development

* Extend app use to cover multiple homework types assignments;
* Add date attributes to both homework and activities models;
* Add username and login features;
* Include module parents to review and provide comments;
* Set conditions on model inputs to prevent empty values from being accepted (e.g., clicking the create button when no data values have been entered); and,
* Refactor the CSS code.


# The Wardrobe Management App

## DESCRIPTION
A full PERN application that enables a user/owner to see all the clothes that they own.  It allows each owner to add various types of clothes as well as several different locations (main closet, guest closet, attic, etc.).

## PROJECT LINKS

### Back End
-  [github repo](https://github.com/andybuske/wardrobe_management_app)
-  [deployed on Heroku](https://andy-wardrobe-app-backend.herokuapp.com)

### Front End
-  [github repo](https://github.com/andybuske/wardrobe_management_frontend)
-  [deployed on Heroku](https://andy-wardrobe-frontend.herokuapp.com)

## USER STORIES
[User stories](https://github.com/andybuske/wardrobe_management_frontend/blob/master/planning/User%20Stories.docx)

## MODELS AND TABLES
My initial [model design](https://github.com/andybuske/wardrobe_management_frontend/blob/master/planning/Models%20%26%20Tables.xlsx) was quite complex, having a separate Model and Table for each Type of clothing.  My colleagues helped me to see that since almost all of the fields were the same in all these Models, I could greatly simplify my model/table design by combining these into one, having the Type as a new attribute.

## WIREFRAMES
My [wireframes](https://github.com/andybuske/wardrobe_management_frontend/blob/master/planning/Wireframes.xlsx) were initially quite complex and would require as many as seven Components.  While this probably would have been ideal for really good user experience, it was too much and too complex for this project.  In the end, I was able to get it down to two Components. 

## TECHNOLOGIES USED

- Platform: Node.js with these NPM Packages:
  - React {Component}
  - React Router DOM {Route, Link, Browser Router}
  - Axios
  - Express
  - Postgres/PGAdmin
  - Sequelize
- Writing Code: Visual Studio Code
- Debug Code: npm start, nodemon & FireFox Developer Tools
- Version Control: GitHub
- Deployment: Heroku

## APIs
The front end communicates with the back end via an API.  The endpoint of the API is https://andy-wardrobe-app-backend.herokuapp.com/api/owners.

## NEXT STEPS / FUTURE FEATURES
I ended up having to cut quite a bit of functionality that I initially wanted.  The models and tables are already set up to enable most of this funtionality.

* The most useful new feature would be the ability to add images.  Fields already exist to be able to accept an image URL.
* Filters based on Type, color, or length would also be helpful.
* In order to help with data consistency, drop-down lists for Type and Length would be useful.

## REMAINING ISSUES / BUGS
- None

## LESSONS-LEARNED
- When building a full-stack application, make sure to fully design the front-end wireframes before you start coding your back-end.  This caused me to have to re-do quite a bit of back-end code.
- Images are ALWAYS difficult, especially when using a 3rd-party app.
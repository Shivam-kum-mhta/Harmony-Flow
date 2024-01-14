# Harmony Flow

Harmony Flow is a full-stack application in its very early stages. It aims to solve the problem of digitization of approval flows throughout collegiate level tasks. It is usually a very tedious task to have to manually submit requests in the hard-copy format through the different roles required for the processing of the approval flow. For that very reason, Harmony Flow aims to implement the whole process digitally.

**_It must be noted that in it's current stage, Harmony Flow is very back-end focused application. A basic Front-End has been implemented for accessing the application's endpoints. This however will be updated in future updates as it is not the prime area of focus of this project._**

## Table of Contents

1. [Demos]()
2. [Tech Stack]()
3. [Contributing]()
4. [Installation Guide]()
5. [Implemented Features]()
6. [Security Feature Considerations]()
7. [Documentation]()
8. [External Packages Used]()
9. [References]()

## Demos

### Cross-User Demo

### Student Demo

### Admin Demo

### Employee (Apart from Admin) Demo

It is important to note that Harmony Flow is able to handle any sort of new employee in the database and back-end without having to explicitly adding any specialised code for each. The concept of abstraction has been heavily used in order for the employee role. In order to add an employee, one can simply edit the roles `roles.js` file located in the in the front-end of the application under `front-end/src/context/` directory.

## Tech Stack:

Harmony Flow is built using the popularly used **_MERN Stack_**. It consists of:

1. Mongoose ODM
2. Express
3. React.JS
4. Node.JS

Apart from this, I have also made use of standard HTML5 and the SASS pre-processor rather than raw CSS3

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s" height="50px" width="50px"></img>
<img src="https://vistaran-tech.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/05/13104926/nodejs-logo.png" height="50px" style="background: white"></img>
<img src="data:image/png;base64,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" height="50px" width="50px"></img>
<img src="data:image/png;base64,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" height="50px" width="50px"></img>
<img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" height="50px" width="50px" style="background: white"></img>
<img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" width="50px" height="50px" style="background: white"></img>
<img src="data:image/png;base64,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" width="50px" height="50px"></img>

## Contributing

As Harmony Flow is in its very initial stages, any and all contributions would be highly appreciated and mentioned in this README.md file. Currently, the front-end hasn't had any good UI that can be implemented. That could be the main area of contributions for anyone who is confused where to start.

All contributions into Harmony Flow will be subject to the Code of Conduct.

## Installation Guide

This application is relatively straight-forward to run and use on your own system. It consists of two major steps:

- ### Creating the MongoDB Database Connection:

In order to create and link up the MongoDB database, visit https://www.mongodb.com. Login through the online portal (once you have created your account).

1. If you are a new User, create an organization before any of the following steps. After logging into your account, proceed with the creation of a deployment. Deploy it on a suitable service provider such as an AWS with the fastest or closest service based on location. Following this, create a username and password as shown on the MongoDB website. _Do remember this username and password as it will be needed for the next few steps_. Proceed with the next steps such as adding your local IP address to the whitelist. **_It must be noted that NITK may not allow requests to MongoDB even after the whitelisting due to internally placed firewalls. In this case, use a different mode of connecting to the internet._** You may use 0.0.0.0/0 in order to allow all IP Addresses to access the database as well.
2. Click on the Database tab through the navigation menu. Click on connect. Navigate into the Drivers section. Select Node.JS and versions above 5.5 through the drop-down menus. Copy the connection string as it will come handy in the next step.

- ### Creating the .env Configuration File

1. Navigate into the `back-end` folder and create a `.env` file. In this file, add the line: `MONGO_URL="<MongoDB String copied from previous step>"`. Please ensure that you omit the angular brackets but keep the double quotation marks.
2. Open up a terminal and run the following commands:
   1. `node`
   2. `require('crypto').randomBytes(64).toString('hex')`
3. Copy the generated string (omitting the single quotation marks) and add the following line into a seperate line on the .env file - `JWT_ACCESS_SECRET="<copied string here>"`. Ensure to omit the angular brackets but keep the double quotation marks.
4. Repeat Step 3 for creating another `JWT_REFRESH_SECRET` property in the `.env` file.
5. Set a port number of your choice on a different line by adding `PORT=<Port Number>`. Do not include the angular brackets.

- ### Installing All Required Packages

1. Open a terminal in the cloned repository's folder.
2. Navigate into the `back-end` through the command `cd back-end`
3. Install all the back-end dependencies through the command `yarn install`
4. Navigate out of the `back-end` folder and into the `front-end` folder through the command `cd ../front-end`
5. Install all the front-end dependencies through the command `yarn install`

- ### Running The Development Server:

1. Open two seperate instances of a terminal in the cloned repository's folder.
   - #### Terminal 1:
     Run the following Commands in Order.
     - `cd front-end`
     - `yarn run dev`
   - #### Terminal 2:
     - `cd back-end`
     - `yarn run serve`

The application can be used and accessed through http://localhost:5173/ and all of its respective endpoints can now be accessed. By default, it loads the login page. Don't forget to register the users through the `/auth/register` endpoint. Refer to the below documentation on the end-point for further clarification.

## Implemented Features

This section will be broken down based on the criticality of each feature. Each feature will have an implementation description as well as progress of implementation. This is due to the fact, that the back-end has been built much more than the front-end and some end-points are yet to be connected for even better use.

### Short Summarization

- Admin Role:
  - Can Create Templates by giving them a Name and a **_variable list_** of Roles in the specific order of approval.
  - Can Edit Existing Templates.
  - Can Delete Existing Templates
  - Can Also Register New users through the `/auth/register` end-point.
- Student Role

  - Can Create Approval Request Flows
  - Can View the current Status of the Approval Flow as well as the current role that is yet to approve.
  - Can also view the ID and comments of each approval step and the person responsible for approval/rejecting the request.
  - Can view time of creation of request and time that it was last updated or processed.

- Employee Role (All Users of any specific role other than Student and Admin)
  - Can View only the request flows that are currently requiring their approval.
  - Can add comments while approving/rejecting the Approval Request Flow.
  - Can view details about the request such as the ID of the preceding approvers as well as the UserID of the Student who raised the flow.
- Authentication and Authorisation:
  - Every user is required to be logged in before being able to use the application.
  - There is user-specific dashboards for the three broad categories listed above.
  - End-Point manipulation cannot be done as React-Router-DOM has been implemented which prevents this. Middleware has also been implemented in the back-end in order to enforce authorisation steps.

### In-Depth Explanation of Features Implemented

1. **Authentication/Authorization:**
   - Authentication and Authorization has been implemented through the use of JWT Access Tokens and Refresh Tokens.
   - Back End Progress:
     - Issuing of both Access Tokens and Refresh Tokens has been implemented. The logic for these can be accessed in the `back-end/controllers/auth.js` and `back-end/routes/auth.js`. The latter solely contains the end-points. A few have to be corrected as per the latest HTTP protocol standards listed under MDN Documentation. Currently, on login, an Access Token is sent back through the JSON response body while the Refresh Token is also being sent out using HTTPOnly cookies which cannot be accessed by javascript on either side. Each request is also sending out the refresh Token. The only pending logic in the front-end is the use of axios interceptors which can easily be added into it. The user also needs to re-login after 10 minutes due to the expiry of the JWT Access Token.
   - Front End Progress:
     - Login has been successfully implemented using React-Router-DOM-v6. Currently, it is solely working through the use of Access Tokens as malicious intent has not been assumed. Further editions of **Harmony Flow** will contain the use of Refresh Token implementations with a reduced duration of access Tokens.
     - Pending: Implementation of refresh token logic through the `/auth/refresh` end-point on the back-end. This can be easily implemented through the use of _**axios interceptors**_ but isn't required too much in this application (primarily as it is used as a submission as well as because login details are not stored in the localStorage but are rather stored in contexts and states using React.)
2. Admin Management of Templates:

   - Creation of Templates has been implemented in both the front-end as well as the back-end completely. In the back-end, the API endpoint `/admin/create` can be used in order to create admin templates. The front-end uses an axios instance in order to send a `POST` request to this end-point. Admins can also edit and delete any template through its ID using the `/admin/edit` and `/admin/delete` endpoints. This provides the full implementation of management of any Admin Template.
   - On the front-end, creation and deletion of templates has been implemented successfully. The editing of template hasn't been implemented yet due to a shortage of time. A plausible and easy solution is to use Modals in order to preview and edit fields directly to update templates. These can be built using the `useState` and conditional renders in React.JS.

3. Student Creation of Templates:

   - Student Creation of Templates has also been implemented end-to-end. In the back-end, the API endpoint `/student/create` takes care of all requests. On the front-end, an axios Instance is responsible for sending generated requests to this end-point. It keeps state of the status pages using state as well, which causes a live re-render every time you open the `/student/status` route in the browser application.

4. Role-Based Approvals:

   - Role based approval has been implemented without hardcoding certain actions associated with each role. Rather, it has been abstracted out into 3 general roles consisting of _Student, Admin, and Employees_. The Employees can have any other role assigned by the admin during intialization. This feature has also been implemented end-to-end. It is also important to note that during the role-based approval, only the role which is currently responsible for approving or rejecting a flow is able to see the flow on their status dashboards. While approving or rejecting the request, the employee can also add a comment (**bonus task**) on the request which will be passed on. It must also be noted that many people may have the same role. As such, many people may be able to see the same flow. Therefore, in order to increase transparency, I have also implemented the addition of the ID of the user after each step for further reference if needed. The remaining roles will not be able to see it unless it has been passed along (bonus task implemented). Also upon rejection at any step, the request will be archived and status will be shown as "Rejected" instantly. As such, it does not proceed to the other roles.
   - As for the front-end, each employee, upon login, receives his/her Access Tokens. Because of this, they are only able to access the flows corresponding to their roles which will be sent along with the request required for loading the flows on the status dashboard. As such, it prevents unnecessary complications of seperate logic code for each employee and enables _**easy extensibility**_ and addition of roles through the simple modification of `roles.js` in `front-end/src/context/roles.js`. This would automatically add the role available for login on the login page as well as to access any employee related function. _**It should be noted that the new user should be registered from the college admin side.**_

5. Registration:
   - Registration has also been implemented solely on the back-end through the `/auth/register` endpoint. This is done for the reason that the login credentials are usually providedt to the end-user (employee or student) by the administration on registration with the college. Due to this, it shouldn't be available to the end-user to be able to freely register on the platform. Using the given end-point, an admin will be able to register any user as needed.

**_To summarise, apart from sending back flows to the student in order to create edits on to the flows, every other feature spec (mandatory + bonus) has been implemented keeping in mind that no malicious use of the application such as tampering requests will be made during the scope of usage. This will soon be resolved in future versions of the application_**

## Security Feature Considerations

It goes without saying that in a collegiate-level application concerned with providing digitization of procedures, secure transmission of data is of paramount importance. For that very reason, a few steps have been taken in order to obscure the information that is sent about the server that runs the back-end. These are:

- The `helmet` package is used in order to add HTTP security headers to the outgoing responses from the server
- Live reload of the page has been disabled as it is assumed that for every login, the pages cannot be refreshed in any way as the requests that are being sent out can be seen using developer tools.

## Documentation

This section consists of the documentation of all the implemented back-ends as well as a quick summarization of their use-cases. The aim of this documentation is for a user to implement this API in his own projects as well (supposedly, for a better front end XD). Having said that, it will not be formally typed and will be a more casual representation.

### API End-Points:

The API endpoints can be broadly classified into 4 major categories. All of these end-points are secured via Authentication Headers which require a JWT Bearer Token. If incase one isn't there or has expired, it may be refreshed through `/auth/refresh` end-point upon passing a valid HTTPOnly Cookie consisting of the refresh Token.

1. Admin Endpoints:

   1. `/admin/create` can be used for creating new templates for future requests that will be raised by the end-user (in this case, the Student). It is a `POST` request that must contain a JSON body containing two properties `Name` and `Approval_Flow`. The `Approval Flow` is an array of strings containing the participants (excluding the Student) in the order of approval required. Due to this form of implementation, it accounts for a variable size of participants in any flow template which greatly increases extensability of any sort of flow request - that is, it can accomodate direct requests (bonus task) as well as multiple participant-based requests.
   2. `/admin/templates` can be used for requesting the information about all the templates that have been created by the admin beforehand.
   3. `/admin/templatesById` can be used for retrieving a template by a specific ID selector. It is done through the `POST` HTTP request consisting of a JSON Body that must contain an `ID` property with a valid ObjectID of MongoDB. It returns the template in the response body.
   4. `/admin/edit` can be used in order to edit an existing template without having to explicitly delete it and create a new one. It automatically reflects on all the flows using the template as well. It is done using the `PUT` HTTP request and hence needs a JSON request body consisting of `ID, Name, Approval_Flow` request properties. It returns a status code upon successful editing else returns an error status code.
   5. `/admin/delete` is used to delete any template solely using its template ID. According to the MDN documentation for the HTTP status codes, the `DELETE` HTTP method cannot consists of a request body. As a result, even this end-point is implemented using the `POST` request. It requires a JSON body containing the `ID` property consisting of a valid ObjectID.

2. Student Endpoints:

   1. `/student/create` is used for the Student to create a new flow. It is a `POST` request implemented under the MDN HTTP specification. It must contain a `TemplateID, Request` properties in the JSON Request body. _Upcoming versions will have a description implemented as well_. Upon creation, it directly makes the entry in the MongoDB database, and the approval flow is initiated instantaneously.
   2. `/student/flows` is used in order to request information regarding all the flows that the student has open. As this route is protected through the JWT access token, each user may only access his or her posts. Due to this, multiple users may simultaneously the service as expected.
   3. `/student/flowById` returns a specific flow as per the requested ObjectID. The request JSON body must contain a `ID` property which contains a valid ObjectID. This request is implemented using the `POST` request.
   4. `/student/templates` is just an endpoint that functions the same as `/admin/templates`. It returns the same thing but prevents unauthorization errors due to access token mismatch. As such, an endpoint was put in to permit easy access for the student's client browser to request the resource with the same access Token rather than adding unnecessary logic code.

3. Employee Endpoints:

   1. `/employee/flows` is used in order to retrieve all the flows present in the MongoDB database which corresponds to role encoded in the Base64 JSON body of the JWT access Token that is sent along with the request in the `Authorization` headers.
   2. `/employee/flowById` is used in order to retrieve a single flow present in the MonoDB database which corresponds to the role encoded in the JWT Access Token as well as the ID that has been sent in the JSON Request body. This endpoint is also implemented using the `POST` HTTP method as per the official MDN HTTP documentation.
   3. `/employee/approve` is used in order to approve a flow request. It requires a JSON request body consisting of the `ID, Comment` respectively. The ID property is used in order to pin-point the flow that needs to be patched and the Comment is used in order to let each person understand what each person said about the flow. (Bonus Task Implemented). This request makes use of the `PATCH` HTTP method listen under the MDN documentation as it only sends certain properties that must be modified in a server resource.
   4. `/employee/reject` is used in order to reject a flow request. Works functionally similar to `/employee/approve`

4. Authorization Endpoints:
   1. `/auth/register` is used in order to register a new user. It contains a larger JSON request body consisting of the `Name, Email, ID, Department, Program, Password, Role`. The `Program` attribute is only useful while registering a student. It must also be noted that registration has been considered a university-side task and the student/employees cannot register themselves on their platforms, and will simply receive their credentials through some other medium. During the registration process, no access Token, or registration token will be returned back to the issue. For saving the password, the `bcrypt` package will be used to employ a one-way random hash (based on a random salt) to be saved in the DB rather than the direct password.
   2. `/auth/login` is used in order for a user to login (user may be of type `Student, Employee, Admin`). This endpoint makes use of the HTTP `POST` method as the client-side is expected to send a JSON request body having the `ID, Password, Role` properties.
      1. **Working:** On receiving the request, the back-end destructures the req.body in order to gain access to the `ID, Password, Role` properties. It proceeds to hash the password sent through the request body and compares it to the hashed password stored in the MongoDB database. If they match, it generates a JWT Access Token and JWT Refresh Token. It returns the JWT access Token through the response body while sending the JWT Refresh Token through an HTTP-Only Cookie in order to prevent tampering through javascript code run by malicious users. Apart from this, it also stores the refresh Token in the MongoDB database document associated with that user for further use in the `/auth/refresh` end-point.
      2. **Front End Implementations:** For the selection procedure, it has been assumed that no malicious intent would be done while using the application. In further versions, axios intereceptor method of refreshing tokens will be used along with reduction in the lifetime of the JWT Access Token.
   3. `/auth/refresh` is used to refresh invalid access tokens. This can be used in the case that the token has outlived its lifetime or has been tampered with.
      1. **Working:** On accessing this end-point, the back-end will read the HTTP-Only Cookies value in order to retrieve the refresh Token. It will then compare the refresh token received through the cookie with the refresh Token associated with the user stored in the database. If and only if both of these match and are verified (implying that they haven't been tampered with in any case). In this case, it issues and returns a new Access Token to the client.
      2. **Front-End Implementation:** As stated multiple times before, malicious intent has not been assumed for this project as of now. This is merely a safeguard that can easily be integrated into a front end application through the use of interceptors.
   4. `/auth/logout` is used to perform a simple logout of the user from the application. As JWT based authentication has been used, the logout function is relatively very simple as we can simply just set the refresh Token in the database to a null value while simultaneously clearing the context state in the ReactJS front-end that stores the access Token. In this way, the end-user cannot generate any other refresh tokens without going through the login page, hence achieving the logout functionality :)

## External Packages Used

In order to bring about some standard functionalities in the back-end and front-end of the application, certain pre-built packages have been used to bring about speedy development. These include:

- Morgan: Morgan is a logging software that monitors requests and responses received and sent by the back-end server. It also contains useful information such as the status codes that were sent out as well as the byte-size of the response.
- Helmet: Helmet is used to secure HTTP responses sent out by the back-end.
- Cors: The cors package is used in order to enable Cross-Origin Resource Requests in order to allow the front-end and the back-end to interact.

## References

MongoDB and Mongoose: https://mongoosejs.com

Express: https://expressjs.com

React.JS: https://react.dev

Node.JS: https://nodejs.org/en/guides

Json Web Token: https://jwt.io

Helmet: https://www.npmjs.com/package/helmet

Morgan: https://www.npmjs.com/package/morgan

Cors: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

HTTP: https://developer.mozilla.org/en-US/docs/Web/HTTP

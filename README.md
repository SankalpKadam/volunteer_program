# Volunteer Portal

### Built using React, JavaScript, HTML and CSS

#### Steps to run
1. Open a terminal
2. Navigate to the folder with the package.json file
3. Run the following command - **npm install**
4. Wait for the command to finish and meanwhile have a browser ready
5. After the previous command is done run this command - **npm run start**
6. The project will start at localhost:3000.
7. In your browser go to **localhost:3000**


#### Some basic overview about the app

The app supports two accounts, one is for ***student*** and the other is for ***professor***.
These are the credentials -
## Student Account -

```Email Address - sdt1234@mavs.uta.edu```<br/>
```Password - student123```

## Professor Account - 

```Email Address - prof4321@uta.edu```<br/>
```Password - professor123```

Depending upon login, the portal navigates to student or professor portal.
### ***The login session is lost as soon as you refresh the page***
This is because we have no backend to maintain a session and hence every time you refresh the page the user is logged out.
Also this portal supports **Route protection** which means you can only access the student or professor dashboad without logging in you will be redirected to the homepage.

### For more information about each and every page and its implemented features, have a look at the project detail pdf.
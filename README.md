# Binge-Watchers
### About
It is a quizzing app in which user have to maximize their score by choosing correct options in a fixed amount of time. 

### Key inclusions:
- Authentication using Google OAuth is must to start the quiz.
- We can add as many question in Questions.js file and it will automatically get included in the upcoming quizzes.
- User can save their scores and top 10 scores will be shown on Leaderboard.
- Name associated with Google account is used to save score.

### Major Tech Stack:
React, Nodejs, MongoDB, Express, Context

### Preview:

**Homepage**
![Screenshot from 2021-03-19 11-17-02](https://user-images.githubusercontent.com/60233336/111738286-18af7500-88a7-11eb-9306-b048e356b9fe.png)
<br>
**Quiz page**
![Screenshot from 2021-03-19 11-15-58](https://user-images.githubusercontent.com/60233336/111738295-1baa6580-88a7-11eb-8d5c-47eaa51c869d.png)
<br>
**Result page**
![Screenshot from 2021-03-19 11-16-40](https://user-images.githubusercontent.com/60233336/111738289-1a793880-88a7-11eb-8777-26821b7e8797.png)
<br>
**Leaderboard page**
![Screenshot from 2021-03-19 11-36-22](https://user-images.githubusercontent.com/60233336/111738419-5a402000-88a7-11eb-8550-3b0993899bac.png)
<br>

### Installation

```
Open terminal
https://github.com/saurabhhere/Binge-watchers.git
cd Binge-watchers
```
For client side:
```
cd client
npm install
npm start
```
For server side:
```
cd server
npm install 
nodemon server
```
Add .env file in server folder containing:
```
JWT_SECRET = your_secret_string
PORT = 5000
CONNECTION_URL = your_mongodb_url
```
Add keys.js on client side inside src folder:
```
module.exports = {
    clientId: "your_google_client_key"
}
```
Add keys.js on server side inside config folder:
```
module.exports = {
    google: {
        clientID: "your_google_client_id",
        clientSecret: "your_google_client_secret"
    }
}
```



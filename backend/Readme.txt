This is the documentation of how i made this login/registration logic in express js.

Features:
User registration & login

Role-based access control

JWT-based stateless auth

Access token (short-lived)

Refresh token (long-lived)



first of all initialize node project and install required dependencies by these commands

npm init -y

npm install express jsonwebtoken bcrypt dotenv express-validator cookie-parser mongoose

Then create necessary folders: 

app.js - main file

.env - to store environment variables

routes/ - folder to store different routes

routes/auth.js 

controllers/ - folder to handle actions 

controllers/authController.js 

middleware/ - folder to store different middlewares to be executed

middleware/authMiddleware.js

models/ - folder to store data models

models/User.js

utils/

utilis/tokenUtils.js
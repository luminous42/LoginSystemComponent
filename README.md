# Express.js Login and Registration System

A secure and robust authentication system built with Express.js, featuring user registration, login, and session management.

## Features

- User Registration with validation
- Secure Login system
- Password hashing using bcrypt
- JWT-based authentication
- Cookie-based session management
- Input validation using express-validator
- MongoDB database integration
- Environment variable configuration

## Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Input Validation**: express-validator
- **Environment Management**: dotenv
- **Cookie Management**: cookie-parser

## Project Structure

```
├── controllers/     # Route controllers
├── middleware/      # Custom middleware
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── .env            # Environment variables
├── app.js          # Main application file
└── package.json    # Project dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd login_register
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

4. Start the development server:

```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### User Management

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Input validation and sanitization
- Secure cookie management
- Environment variable protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

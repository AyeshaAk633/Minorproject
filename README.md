# Blog REST API

## Project Overview

This project is a RESTful Blog API developed using Node.js, Express.js, and MongoDB. It allows users to perform CRUD (Create, Read, Update, and Delete) operations on blog posts. The API follows REST principles and returns JSON responses.

---

## Features

- Create a blog post
- View all blog posts
- View a single blog post by ID
- Update a blog post
- Delete a blog post
- MongoDB Integration
- Input Validation
- Error Handling

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- dotenv

---

## Project Structure

```
blog-api/
├── models/
│   └── Post.js
├── routes/
│   └── posts.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Installation Steps

1. Clone the repository.

2. Install dependencies.

```bash
npm install
```

3. Start the server.

```bash
node app.js
```

4. Open the API.

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /posts | Create a new blog post |
| GET | /posts | Get all blog posts |
| GET | /posts/:id | Get a blog post by ID |
| PUT | /posts/:id | Update a blog post |
| DELETE | /posts/:id | Delete a blog post |

---

## Testing Instructions

After starting the server, test the following endpoints:

- POST /posts
- GET /posts
- GET /posts/:id
- PUT /posts/:id
- DELETE /posts/:id

Verify that each endpoint returns the expected JSON response.

---

## Error Handling

- Returns an error if required fields are missing.
- Returns an error if a blog post is not found.
- Handles invalid requests gracefully.

---

## Author

**Ayesha Khanum**

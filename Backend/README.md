# Backend API Documentation

## Authentication

### 1️⃣ User Register
**Endpoint:** `POST /api/user/register`

**Description:** Registers a new user.

**Request Body:**
```json
{
  "username": "shihab",
  "fullname": {
    "firstname": "Shihab",
    "lastname": "Example"
  },
  "email": "shihab@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "Sign Up Successful",
  "user": {
    "_id": "user123",
    "username": "shihab",
    "fullname": {
      "firstname": "Shihab",
      "lastname": "Example"
    },
    "email": "shihab@example.com",
    "totalComics": 0
  },
  "token": "jwt_token_here"
}
```

### 2️⃣ User Login
**Endpoint:** `POST /api/user/login`

**Description:** Logs in an existing user.

**Request Body:**
```json
{
  "email": "shihab@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "Login Successful",
  "user": {
    "_id": "user123",
    "username": "shihab",
    "email": "shihab@example.com"
  },
  "token": "jwt_token_here"
}
```

### 3️⃣ User Logout
**Endpoint:** `GET /api/user/logout`

**Description:** Logs out the authenticated user.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "message": "Logout Successful"
}
```

### 4️⃣ Get User Profile
**Endpoint:** `GET /api/user/profile`

**Description:** Retrieves the authenticated user's profile.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Response:**
```json
{
  "_id": "user123",
  "username": "shihab",
  "fullname": {
    "firstname": "Shihab",
    "lastname": "Example"
  },
  "email": "shihab@example.com",
  "bio": "I love comics!",
  "profilePicture": "https://cdn.comikola.com/profiles/user123.jpg",
  "totalLikes": 120,
  "totalComics": 5,
  "averageRating": 4.7
}
```

## Comic Management

### 5️⃣ Upload Comic
**Endpoint:** `POST /api/comic/upload`

**Description:** Uploads a new comic.

**Headers:**
```
Authorization: Bearer jwt_token_here
```

**Request Body:**
```json
{
  "title": "The Time Traveler",
  "coverImage": "https://cdn.comikola.com/comics/time-travel-cover.jpg",
  "genre": "Sci-Fi",
  "description": "A thrilling time travel adventure!",
  "comicImages": [
    "https://cdn.comikola.com/comics/page1.jpg",
    "https://cdn.comikola.com/comics/page2.jpg"
  ]
}
```

**Response:**
```json
{
  "message": "Comic uploaded successfully",
  "comic": {
    "_id": "comic123",
    "title": "The Time Traveler",
    "coverImage": "https://cdn.comikola.com/comics/time-travel-cover.jpg",
    "genre": "Sci-Fi",
    "description": "A thrilling time travel adventure!",
    "comicImages": [
      "https://cdn.comikola.com/comics/page1.jpg",
      "https://cdn.comikola.com/comics/page2.jpg"
    ],
    "likes": 0,
    "dislikes": 0,
    "comments": [],
    "averageRating": 0,
    "author": {
      "_id": "user123",
      "username": "shihab"
    }
  }
}
```

### 6️⃣ Get All Comics
**Endpoint:** `GET /api/comic/all`

**Description:** Retrieves all comics.

**Response:**
```json
[
  {
    "_id": "comic123",
    "title": "The Time Traveler",
    "coverImage": "https://cdn.comikola.com/comics/time-travel-cover.jpg",
    "genre": "Sci-Fi",
    "description": "A thrilling time travel adventure!",
    "comicImages": [
      "https://cdn.comikola.com/comics/page1.jpg",
      "https://cdn.comikola.com/comics/page2.jpg"
    ],
    "likes": 0,
    "dislikes": 0,
    "comments": [],
    "averageRating": 0,
    "author": {
      "_id": "user123",
      "username": "shihab"
    }
  },
  ...
]
```
````


### 7️⃣ Get Comic by ID
**Endpoint:** `GET /api/comic/:comicId`

**Description:** Retrieves a comic by its ID.

**Response:**
```json
{
  "_id": "comic123",
  "title": "The Time Traveler",
  "coverImage": "https://cdn.comikola.com/comics/time-travel-cover.jpg",
  "genre": "Sci-Fi",
  "description": "A thrilling time travel adventure!",
  "comicImages": [
    "https://cdn.comikola.com/comics/page1.jpg",
    "https://cdn.comikola.com/comics/page2.jpg"
    ],
  "likes": 0,
    "dislikes": 0,
    "comments": [],
    "averageRating": 0,
    "author": {
      "_id": "user123",
      "username": "shihab"
    }
}
```

### 8️⃣ Like Comic
**Endpoint:** `POST /api/comic/like/:comicId`

**Description:** Likes a comic.

**Headers:**
```
Authorization
```

**Response:**
```json
{
  "message": "Comic liked successfully"
}
```

### 9️⃣ Dislike Comic
**Endpoint:** `POST /api/comic/dislike/:comicId`

**Description:** Dislikes a comic.

**Headers:**
```
Authorization
```

**Response:**
```json
{
  "message": "Comic disliked successfully"
}
```

### 🔟 Add Comment
**Endpoint:** `POST /api/comic/comment/:comicId`

**Description:** Adds a comment to a comic.

**Headers:**
```
Authorization
```

**Request Body:**
```json
{
  "text": "This comic is amazing!"
}
```

**Response:**
```json
{
  "message": "Comment added successfully"
}
```

### 1️⃣1️⃣ Rate Comic
**Endpoint:** `POST /api/comic/rate/:comicId`

**Description:** Rates a comic.

**Headers:**
```
Authorization
```

**Request Body:**
```json
{
  "rating": 5
}
```

**Response:**
```json
{
  "message": "Comic rated successfully"
}
```

### 1️⃣2️⃣ Delete Comic
**Endpoint:** `DELETE /api/comic/delete/:comicId`

**Description:** Deletes a comic.

**Headers:**
```
Authorization
```

**Response:**
```json
{
  "message": "Comic deleted successfully"
}
```


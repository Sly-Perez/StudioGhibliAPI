# STUDIO GHIBLI'S API FUNCTIONALITY
Hi, there. I'm Sly. I'm really glad you're interested in the project.
In this repository I have a basic Api of Studio Ghibli's movies, in which you can get data of the Studio Ghibli's movies.

## Tools Used:
This api was developed in **Nodejs**, and it uses the following libraries:

- Express
- Express-async-handler
- Mongoose
- Dotenv
- Ejs
- Helmet
- Cors

Furthermore, the api's database was done in **MongoDB**.

## Documentation
All the endpoints available in this project are public, this suggests that one does not need a JSON WEB TOKEN's or any other way of Authorization to access the endpoints.

### 1. Get All Movies
It allows you to get the information of all movies at once. The requirements don't vary depending on the situation.<br>

**GET Request to endpoint:**<br>
/SGapi/movies

- **Requirements**:
    - *[There are no specific requirements for this endpoint]* <br>

**Expected response:**<br>
If everything went well, the API should send back an array of JSON objects similar to the following and a **200** status code.
```
[Content-Type: "application/json"]
[
  {
    "id": 1,
    "title": "movie 1",
    "description": "movie 1 description",
    "directors": [
      "director 1"
    ],
    "releaseDate": "2001-07-20T00:00:00.000Z",
    "poster": "movie1.jpg",
    "characters": [
      "character 1",
      "character 2",
      "character 3"
    ],
    "writers": [
      "writer 1"
    ],
    "topCast": [
      "actor 1",
      "actor 2",
      "actor 3"
    ],
    "genres": [
      "genre 1",
      "genre 2",
      "genre 3"
    ],
    "rate": 8.6,
    "certificate": "PG",
    "durationInMinutes": 125,
    "budget": 20000000,
    "grossWorldwide": 289257744
  },
  {
    "id": 2,
    "title": "movie 2",
    "description": "movie 2 description",
    "directors": [
      "director 1"
    ],
    "releaseDate": "1988-07-16T00:00:00.000Z",
    "poster": "movie2.jpg",
    "characters": [
      "character 1",
      "character 2",
      "character 3"
    ],
    "writers": [
      "writer 1"
    ],
    "topCast": [
      "actor 1",
      "actor 2",
      "actor 3"
    ],
    "genres": [
      "genre 1",
      "genre 2",
      "genre 3"
    ],
    "rate": 5.2,
    "certificate": "PG",
    "durationInMinutes": 80,
    "budget": 5000000,
    "grossWorldwide": 30000000
  }
]
```

**Expected exception response:**<br>
*[There are no expected exception responses for this endpoint]*

### 2. Get Movie By Id
It allows you to get the information of a specific movie based on its id. The requirements don't vary depending on the situation.<br>

**GET Request to endpoint:**<br>
/SGapi/movies/:id<br>
*[In this case, ":id" is a placeholder for the actual movie id]*

- **Requirements**:
    - *[There are no specific requirements for this endpoint]* <br>

**Expected response:**<br>
If everything went well, the API should send back a JSON object with the information of the movie and a **200** status code.
```
[Content-Type: "application/json"]
[example of path: "/SGapi/movies/2"]
[
  {
    "id": 2,
    "title": "movie 2",
    "description": "movie 2 description",
    "directors": [
      "director 1"
    ],
    "releaseDate": "1988-07-16T00:00:00.000Z",
    "poster": "movie2.jpg",
    "characters": [
      "character 1",
      "character 2",
      "character 3"
    ],
    "writers": [
      "writer 1"
    ],
    "topCast": [
      "actor 1",
      "actor 2",
      "actor 3"
    ],
    "genres": [
      "genre 1",
      "genre 2",
      "genre 3"
    ],
    "rate": 5.2,
    "certificate": "PG",
    "durationInMinutes": 80,
    "budget": 5000000,
    "grossWorldwide": 30000000
  }
]
```

**Expected exception response:**<br>
If a movie with the given id does not exist, the API should send back a JSON object with the corresponding error message and a **404** status code.
```
[Content-Type: "application/json"]
[example of path: "/SGapi/movies/ksfekf"]
{
    "error": "Not Found"
}
```


### 3. Get Poster by Movie Id
It allows you to get the poster of a specific movie based on its id. The requirements don't vary depending on the situation.<br>

**GET Request to endpoint:**<br>
/SGapi/movies/:id/posters<br>
*[In this case, ":id" is a placeholder for the actual movie id]*

- **Requirements**:
    - *[There are no specific requirements for this endpoint]* <br>

**Expected response:**<br>
If everything went well, the API should send back a JSON object with the information of the movie and a **200** status code.
```
[Content-Type: "image/jpeg"]
[example of path: "/SGapi/movies/1/posters"]
\/ poster of the corresponding movie \/
```

**Expected exception response:**<br>
If a movie with the given id does not exist, the API should send back a JSON object with the corresponding error message and a **404** status code.
```
[Content-Type: "application/json"]
[example of path: "/SGapi/movies/ksfekf"]
{
    "error": "Not Found"
}
```

**Notes:**<br>
*[The Content-Type header might not always be "image/jpeg". However, it will always be a compatible image format]*
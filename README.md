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

**GET**
1. \
    **@desc**	GET ALL MOVIES \
    **@route**	GET **/SGapi/movies** \
    **@access**	public 

2. \
    **@desc** GET MOVIE BY ID \
    **@route**	GET	    **/SGapi/movies/:id** \
    **@access**	public

3. \
    **@desc**	GET POSTER OF MOVIE BY FILENAME \
    **@route**	GET	    **/SGapi/movies/:id/posters** \
    **@access** public

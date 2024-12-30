<h1>STUDIO GHIBLI'S API FUNCTIONALITY</h1>
Hi, there. I'm Sly. I'm really glad you're interested in the project. <br>In this repository I have a basic Api of Studio Ghibli's movies, in which you can get data of the Studio Ghibli's movies.

<h2>Tools Used:</h2>
This api was developed in <b>Nodejs</b>, and it uses the following libraries:<br>
<ul>
  <li>Express</li>
  <li>Express-async-handler</li>
  <li>Mongoose</li>
  <li>Dotenv</li>
  <li>Ejs</li>
  <li>Helmet</li>
  <li>Cors</li>
</ul>
Furthermore, the api's database was done in <b>MongoDB</b>.<br>

<h2>Documentation</h2>

<span><b>GET</b></span><br>
1)<br>
<b>@desc</b>	GET ALL MOVIES<br>
<b>@route</b>	GET <b>/SGapi/movies</b><br>
<b>@access</b>	public<br>

2)<br>
<b>@desc</b>	GET MOVIE BY ID<br>
<b>@route</b>	GET	    <b>/SGapi/movies/:id</b><br>
<b>@access</b>	public<br>

3)<br>
<b>@desc</b>	GET POSTER OF MOVIE BY FILENAME<br>
<b>@route</b>	GET	    <b>/SGapi/movies/posters/:postername</b><br>
<b>@access</b> public<br>

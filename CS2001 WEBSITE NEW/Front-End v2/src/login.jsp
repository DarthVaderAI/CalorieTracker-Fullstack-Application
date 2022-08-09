<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home page / Login</title>
<link rel="stylesheet" href="LoginFrontEnd.css">
</head>
<body>

	<div class="body"></div>
	<div class="grad"></div>
	<div class="header">
		<div>
			Calorie<span>
			<br> Pal</span>
		</div>
	</div>
	<div class="login">
		<form action="Login" method="post">

			<input type="text" placeholder="name" name="uname"><br>
			<input type="password" placeholder="password" name="pwd"><br>
			<p style="color: red"><%=request.getAttribute("error") == null ? "" : request.getAttribute("error")%></p>
			<input id="Diogo" type="submit" value="Login"><br><br>
			//<button id="Diogo" type="submit" formaction="login copy.jsp">Don't have
				an account? Create one!</button>
		</form>
	</div>



</body>
</html>

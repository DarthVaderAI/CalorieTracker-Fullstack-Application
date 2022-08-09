<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Register</title>
<link rel="stylesheet" href="RegisterFrontEnd.css">
</head>

<body>
	<link
		href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600'
		rel='stylesheet' type='text/css'>
	<link
		href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
		rel="stylesheet">

	<div class="testbox">
		<h1>Registration</h1>

		<form action="Register" method="post">
			<hr>
			<hr>
			<label id="icon" for="name"><i class="icon-user"></i></label> <input
				type="text" name="ID" id="name" placeholder="ID" required /> <label
				id="icon" for="name"><i class="icon-user"></i></label> <input
				type="text" name="NAME" id="name" placeholder="Name" required /> <label
				id="icon" for="name"><i class="icon-shield"></i></label> <input
				type="password" name="PASSWORD" id="name" placeholder="Password"
				required />
			<div class="gender">
				<input type="radio" value="None" id="male" name="gender" checked />
				<label for="male" class="radio" chec>Male</label> <input
					type="radio" value="None" id="female" name="gender" /> <label
					for="female" class="radio">Female</label>
			</div>
			<p>
				By clicking Register, you agree on our <a href="#">terms and
					conditions</a>.
			</p>

			<input type="submit" value="Register" class="button" style="background-color:#2e458b;color:white">

		</form>
	</div>
</body>
</html>
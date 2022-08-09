<%@page import="javax.swing.text.Document"%>
<%@ page language="java" contentType="text/html; charset=US-ASCII"
	pageEncoding="US-ASCII"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
response.setHeader("Pragma", "no-cache"); // HTTP 1.0.
response.setDateHeader("Expires", 0); // Proxies.a

Object user_attr = session.getAttribute("CURRENT_USER");
String session_cookie = session.getId();
String user_name = null;
if (user_attr == null) {
	System.out.println("NO_USER");
	request.getRequestDispatcher("/register.jsp").forward(request, response);
} else {
	System.out.println("ACTIVE_USER");
	user_name = user_attr + "";
}
%>
<html>
<head>
<link rel="stylesheet" href="convv.css">
<meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
<title>Login Success Page</title>
</head>
<body>
	<center>

		<form style="text-align: right" action="history" method="post">
			<input type="submit" value="History page">
		</form>
		<h4 style="text-align: center">
			<%=user_name%></h4>


		<form style="text-align: center "action="Logout" method="post">
			<input style="background-color:green;color:white" type="submit" value="Logout">
		</form>

		<!-- 
			INSERT CONVERTOR CODE (i.e this is only accessible when the user is logged in)
			
			POSSSIBLE IDEAS:
			
			1) Form with action and POST Method
			2) Pure Javascript conversion code (no server communication. Data is only sent to server when successful.
			3) ...
		-->

		<!-- 1st Method -->

		</script>
		<h3>My Converter Code</h3>
		<h4>Please type in a binary number</h4>
		<form action="Converter" method="post">
			<input type="text" name="bin-number"> <input style="background-color:green;color:white" type="submit"
				value="Submit bin number"> <select id="convtype" name="base">
				<option value="dec">decimal</option>
				<option value="hex">hexadecimal</option>

			</select>
			<%
			String result = session.getAttribute("CONVERTER_RESULT") + "";
			%>
		</form>


		<h4>
			Result
			<%=result%>
		</h4>
	</center>
</body>
</html>
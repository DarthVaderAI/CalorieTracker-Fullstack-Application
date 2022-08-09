<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>

<body style="background-image: url('https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png')">
<button style="background-color:green;color:white" onclick="goBack()">Go back</button>
<p><%= request.getAttribute("history") %></p>
    </div>
    <script>
function goBack() {
  window.history.back();
}

</script>
</body>
</html>
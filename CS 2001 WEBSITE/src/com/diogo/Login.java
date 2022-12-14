package com.diogo;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Zear
 * A simple HTTP web application to accept username and password using the POST method.
 * This class serves as a template for L1 students.
 */

@WebServlet("/Login")
public class Login extends HttpServlet {

	
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		// Get request parameters for username and password
		String uname = request.getParameter("uname");
		String pwd = request.getParameter("pwd");

		// TODO: verify request parameters from csv/txt/data storage in WEB-INF folder.
		DBUtility db = new DBUtility();
		
		try {
			db.connecttoDB();
			if (db.getData(uname, pwd)) {
				// Add variable to session cookie
				request.getSession().setAttribute("CURRENT_USER",uname);
				
				// Session cookie becomes invalid after 10s
				// TODO: This does not prevent users from re-visiting the login page with back/forward buttons. 
				// TODO: See https://stackoverflow.com/questions/4194207/prevent-user-from-seeing-previously-visited-secured-page-after-logout
				request.getSession().setMaxInactiveInterval(60); 
				
				// Forward to welcome page
				//QUESTION: Why do you think this is under WEB-INF?
				request.getRequestDispatcher("/user-welcome.jsp").forward(request, response);
			} else {
				request.setAttribute("error", "Incorrect username/password");
				request.getRequestDispatcher("/index.jsp").forward(request, response);
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}
} 

package com.diogo;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Convert
 */
@WebServlet("/Convert")
public class Convert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Convert() {
        super();
        // TODO Auto-generated constructor stub
    }

    protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		// Get request parameters for username and password
		String number = request.getParameter("bin-number");
		
		// TODO: verify request parameters from csv/txt/data storage in WEB-INF folder.
		Convertor Cov = new Convertor();
		String output = Cov.conv(number);
		
			request.setAttribute("CONVERTER_RESULT",output);
			request.getRequestDispatcher("/user-welcome.jsp").forward(request, response);
		
	}

}

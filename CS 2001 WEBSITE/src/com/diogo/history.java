package com.diogo;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class history
 */
@WebServlet("/history")
public class history extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public history() {
        super();
        // TODO Auto-generated constructor stub
    }


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		  String user = request.getSession().getAttribute("CURRENT_USER").toString();

		    try{
		        DBUtility db = new DBUtility();
		        db.connecttoDB();
		        ResultSet history = db.getHistoryData(user);
		        String strhistory = "<center>";
		        int i=0;
		        while(history.next()) {
		            String username,hex,dec,bin;
		            username = history.getString("idhistory");
		            hex = history.getString("hexadec");
		            dec = history.getString("deci");
		            bin = history.getString("bina");

		            if(dec==null) {
						strhistory += "<h4>"+username+" converted "+bin+"<sub>2</sub> to "+hex+ "<sub>16</sub> </h4>";
		            } 
		            else if (hex==null) {
		                strhistory += "<h4>"+username+" converted this "+bin+"<sub>16</sub> to "+dec+"<sub>10</sub></h4>";
		            }
		        }
		        strhistory+="</center>";
		        request.setAttribute("history", strhistory);
			    System.out.println(strhistory);
		    }
		    catch(ClassNotFoundException| SQLException e){
		        System.out.println(e.getMessage());
		        System.out.println(e.getCause());

		    }
		    request.getRequestDispatcher("/WEB-INF/NewFile.jsp").forward(request, response);



	}

}

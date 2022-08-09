package com.diogo;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Scanner;

import javax.print.PrintService;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Converter")
public class Convertor extends Login{

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		System.out.println("Some binary data has been submitted");

		String user = request.getSession().getAttribute("CURRENT_USER").toString();

		System.out.println("Session data: " + user);

		String input = request.getParameter("bin-number");

		System.out.println("User data: " + input);

		String base = request.getParameter("base");
		System.out.println("base: "+base);

		if (input.length()>8) {
			request.getRequestDispatcher("/user-welcome.jsp").forward(request, response);
		}
		if (loopzz(input)) {
			
		String result = conv(input);
		String result2 = convertt((Integer.parseInt(result)));

		String xx= "The decimal result is " +result + "The hexadecimal result is "+result2;
		request.getSession().setAttribute("CONVERTER_RESULT", xx);

		DBUtility db = new DBUtility();
		try {
			db.connecttoDB();
			if(base.equals("dec")) {
				request.getSession().setAttribute("CONVERTER_RESULT", result);
				db.history(user,input, result, base);
			}
			else if(base.equals("hex")) {
				request.getSession().setAttribute("CONVERTER_RESULT", result2);
				db.history(user,input, result2, base);
			}

			request.getRequestDispatcher("/user-welcome.jsp").forward(request, response);
		}
		catch (ClassNotFoundException | SQLException e){
			e.printStackTrace();
		}
	}
		else {
			request.getSession().setAttribute("CONVERTER_RESULT", ":Insert a valid number");
			request.getRequestDispatcher("/user-welcome.jsp").forward(request, response);
			
		}
}

	public String conv(String bin) {
		int convert,aux,dec;
		String hex="";
		System.out.println(bin.length());
		aux=0;
		for(int i=0; i<bin.length(); i++) {
			System.out.println(i);
			convert=(Integer.parseInt(String.valueOf(bin.charAt(i))));
			aux+= convert*Math.pow(2,bin.length()-i-1);
		}
		return String.valueOf(aux);
	}

	public boolean loopzz (String bin) {
		for(int i=0; i<bin.length(); i++) {
			if (!(bin.charAt(i)=='0' || bin.charAt(i)=='1')) {
				return false;
			}

		}
		return true;
	}

	public String convertt(int aux) {
		String hex="";
		while(aux!=0) {
			switch(aux%16) {
			case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:
				hex = String.valueOf(aux%16)+hex;
				break;
			case 10:
				hex = "A"+ hex;
				break;
			case 11:
				hex = "B"+hex;
				break;
			case 12:
				hex = "C"+hex;
				break;
			case 13:
				hex = "D"+hex;
				break;
			case 14:
				hex = "E"+hex;
				break;
			case 15:
				hex = "F"+ hex;
				break;
			}
			aux = aux/16; 
		}

		return hex;
	}
}

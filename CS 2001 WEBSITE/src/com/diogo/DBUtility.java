package com.diogo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DBUtility {

	private String SearchUname =null;
	private String SearchPassword =null;
	private static Connection con = null;
	private static ResultSet rs = null;

	DBUtility (String Uname, String Password){
		SearchUname = Uname;
		SearchPassword = Password;
	}

	DBUtility (){
	}
	private static Connection getConnection() throws ClassNotFoundException, SQLException {

		Class.forName("com.mysql.cj.jdbc.Driver");
		String dbname = "group_d_dbs"; //<--Schema name
		String url = "jdbc:mysql://129.151.75.225/" + dbname;
		String username = "202102_group_d";
		String password = "Groupd-z49qff";
		return DriverManager.getConnection(url, username, password);
	}



	public boolean getData(String SearchUname, String SearchPassword) throws SQLException {
		Statement stmt = con.createStatement();
		rs = stmt.executeQuery("SELECT * FROM Diogo");
		//boolean found = false;
		//int CheckCount =0;
		while (rs.next()) {
			String username = rs.getString("Name");
			String PASSWORD = rs.getString("PASSWORD");
			String ID = rs.getString("ID");
			System.err.println("------\n" + username + "," + PASSWORD + "," + ID + "\n------\n");

			if(username.equals(SearchUname) && PASSWORD.equals(SearchPassword)){
				return true;
			}

		}
		stmt.close();
		rs.close();
		return false;
	}

	public void connecttoDB() throws ClassNotFoundException, SQLException{

		con = getConnection();
		System.out.println(con);
	}

	public boolean insert(String ID, String NAME, String PASSWORD) throws SQLException
	{
		boolean x=false;
		String sql = "INSERT INTO `group_d_dbs`.`Diogo` (`ID`, `NAME`, `PASSWORD`) VALUES (?, ?, ?)";


		PreparedStatement ps;

		ps = con.prepareStatement(sql);
		ps.setString(1, ID);
		ps.setString(2, NAME);
		ps.setString(3, PASSWORD);
		ps.execute();
		x=true;
		{
			return x;
		}
	}

	public ResultSet getHistoryData(String idhistory ) throws SQLException {
		// TODO Auto-generated method stub
		Statement zz = con.createStatement();
		rs = zz.executeQuery("SELECT * From history where idhistory = '"+idhistory+"'");
		return rs;
	}
	public void history (String idhistory, String bin, String result, String base ) throws SQLException {
		String insertzz = "INSERT INTO history(idhistory,hexadec,deci, bina) VALUES (?, ?, ?, ?)";
		
		if(base.equals("dec")) {
			insertzz = "INSERT INTO history(idhistory,deci, bina) VALUES (?, ?, ?)";
        }
        else if(base.equals("hex")) {
        	insertzz = "INSERT INTO history(idhistory,hexadec, bina) VALUES (?, ?, ?)";
        }
		PreparedStatement donezz = con.prepareStatement(insertzz);

		donezz.setString(1, idhistory);
		donezz.setString (2, result);
		donezz.setString (3, bin);
		donezz.execute();

		System.out.println("user:"+idhistory+"  converted this "+bin+"  to "+result+" to base "+bin);


	}
}

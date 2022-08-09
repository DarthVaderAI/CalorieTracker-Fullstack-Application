import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a className="caloriepalbold">
          <Link to="/">CaloriePal</Link>
          </a>{" "}
          <ul
            className="nav navbar-nav navbar-right"
            style={{ display: "flex !important", flexDirection: "row" }}
          >
            <li>
              <a href="http://localhost:3000/#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/#services" className="page-scroll">
                Services
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/#Diet" className="page-scroll">
                Diet
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3000/#testimonials"
                className="page-scroll"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="http://localhost:3000/#contact" className="page-scroll">
                Contact
              </a>

            </li>
             
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
           
           <li>
            <Link to="/Motivate">Motivate</Link>
            </li>

            <li>
              <a href='/calories' className='page-scroll'>
                Calorie Calculator
              </a>
            </li>
            <li>
              <a href='/msg' className='page-scroll'>
                Message Board
              </a>
            </li>
            <li>
              <a href='/friends' className='page-scroll'>
                Friends
              </a>
            </li>
            <li>
              <Link to="/GetMealCalories">Meal Planner</Link>
            </li>
            <li>
              <Link to="/bodymeasurement">Body measurement</Link>
            </li>
             <li>
              <Link to="/TrainingPlans">Training Plans</Link>
            </li>
            <li>
              <Link to="/bmi-calculator">BMI Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import AuthService from "./services/auth.service";
import Login from "./components/Login";
import Register from "./components/Register";
import BoardUser from "./components/BoardUser";
import Profile from "./components/Profile";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Diet } from "./components/diet";
import { Testimonials } from "./components/testimonials";
import { Contact } from "./components/contact";

import { Bodymeasurement } from "./components/Bodymeasurement";
import GetMealCalories from "./components/GetMealCalories";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import EventBus from "./common/EventBus";
import { Routes, Route } from "react-router-dom";
import { Motivate } from "./components/Motivate";
import { TrainingPlans } from "./components/TrainingPlans"
import {BMICalculator} from "./components/BMICalculator";


//import Test from "./components/expand/test"
import MessagePage from "./components/expand/message-page"
import CaloriesFood from './components/expand/calories-food'
import foodData from "./data/food"
import FriendList  from "./components/expand/friendList";
import {list} from "./api/food";

import {Account} from "./components/account";
import { Email } from "./components/email";
import Settings from "./components/settings";
import { ProfilePage } from "./components/profilePage";
import { Terms } from "./components/terms";
import Sidebar from "./components/sidebar";


export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});





const App = () => {

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
    };

    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);


    const Home = () => {
        return (
            <div>
                <Header data={landingPageData.Header} />
                <About data={landingPageData.About} />
                <Services data={landingPageData.Services} />
                <Diet data={landingPageData.Diet} />
                <Testimonials data={landingPageData.Testimonials} />
                <Contact data={landingPageData.Contact} />
            </div>
        );
    };

//fix routing for caloriepal button to go to the top page (hashing) @hasib
    return (
        <div>
                <Navigation />
                
                
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<Login data={landingPageData.Login} />}
                    />
                    <Route
                        path="/register"
                        element={<Register data={landingPageData.Register} />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile data={landingPageData.Profile} />}
                    />
                    <Route
                        path="/user"
                        element={<BoardUser data={landingPageData.BoardUser} />}
                    />
                    <Route
                        path="/motivate"
                        element={<><Motivate/></>}
                    />
                    <Route
                        path="/msg"
                        element={<MessagePage />}
                    />
                    <Route
                        path="/calories"
                        element={<CaloriesFood/>}
                    />
                    <Route
                        path="/friends"
                        element={<FriendList />}
                    />  
                    
                    <Route
                        path="/settings"
                        element={<><Settings/><ProfilePage/></>}
                    />

                    <Route
                        path="/profilePage"
                        element={<><Settings/><ProfilePage/></>}                   
                    />
                  
                    <Route
                        path="/account"
                        element={<><Settings/><Account/></>}                   
                    />  

                    <Route
                        path="/email"
                        element={<><Settings/><Email/></>}                   
                    />                     

                    <Route
                        path="/terms"
                        element={<><Settings/><Terms/></>}                   
                    /> 
                    <Route
                        path="/bodymeasurement"
                        element={<Bodymeasurement data={landingPageData.Bodymeasurement} />}                
                    />

                    <Route
                        path="/GetMealCalories"
                         element={<GetMealCalories data={landingPageData.GetMealCalories} />}
                    />
                    <Route
                        path="/TrainingPlans"
                        element={<TrainingPlans data={landingPageData.TrainingPlans} />}                
                    />
                    <Route
                        path="/bmi-calculator"
                        element={<BMICalculator data={landingPageData.BMICalculator} />}                
                    />



                </Routes>
              
        </div>
    );
};

export default App;
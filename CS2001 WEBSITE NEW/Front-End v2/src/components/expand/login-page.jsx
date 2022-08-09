import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {login, register} from "../../api/user"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        };
    }

    doLogin = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        console.log(username, password)

        let data = {
            "username":username,
            "password":password,
        };

        login(data).then(res=>{
            console.log('res = ', res)
            const data = res.data;
            if(data.success === true){
                alert("success")
                localStorage.setItem("isLogin", "1")
                localStorage.setItem("username", username)
                //登录成功   跳转到首页
                this.setState({
                    loginFlag: true
                })
            }else {
                alert("failure")
            }
        })
    }

    render() {
        if (this.state.loginFlag) {
            // return <Redirect to={{ pathname: "/" }} />;
            return <Redirect to='/calories'/>;
        }
        return (
            <div className="food-body">
                <br/> <br/> <br/>
                <form onSubmit={this.doLogin}>
                    账号：<input type="text" ref="username"/> <br/> <br/>
                    密码：<input type="password" ref="password"/> <br/> <br/>
                    <input type="submit" value="执行登录"/>
                </form>
            </div>
        );
    }
}

export default Login;

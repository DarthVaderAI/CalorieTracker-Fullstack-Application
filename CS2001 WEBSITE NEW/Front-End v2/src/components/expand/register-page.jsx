import React, { Component } from 'react';
import {register} from "../../api/user"


class Register extends Component {
    constructor(props) {
        super(props);
    }

    doRegister=(e)=>{
        e.preventDefault();
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        let email=this.refs.email.value;

        const isEmail=/^\w+([-\.]\w+)*@\w+([\.-]\w+)*\.\w{2,4}$/;
        if(!isEmail.test(email)){
            alert("email format error");
            return;
        }

        console.log(username,password);
        let data = {
            "username":username,
            "password":password,
            "email":email,
        };

        register(data).then(res=>{
            console.log('res = ', res)
            const data = res.data;
            if(data.success === true){
                alert("success")
            }else {
                alert("failure")
            }
        })

    //     //但是为了方便全局统一调用封装的axios，我一般采用（推荐）
    //     axios.get('/user', {  //params参数必写 , 如果没有参数传{}也可以
    //         params: {
    //             id: 12345，
    //    name: user
    // }
    // })
    // .then(function (res) {
    //         console.log(res);
    //     })
    //         .catch(function (err) {
    //             console.log(err);
    //         });


    }

    render() {
        return (
            <div className="food-body">
                <br /> <br />
                <h1>注册</h1>
                <form onSubmit={this.doRegister}>
                    账号：<input type="text"  ref="username" />  <br /> <br />
                    密码：<input type="password"  ref="password" /> <br /> <br />
                    邮箱：<input type="text"  ref="email" /> <br /> <br />
                    <input type="submit"  value="注册"/>
                </form>
            </div>
        );
    }
}
export default Register;

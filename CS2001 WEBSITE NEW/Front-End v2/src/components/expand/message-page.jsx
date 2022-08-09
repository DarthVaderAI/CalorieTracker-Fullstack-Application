import React, {Component} from "react";
import {save} from "../../api/message";


class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            email:'',
            content:''
        }
    }

    submit(email,content){
        save({
            email:email,
            content:content
        }).then(res=>{
            if(res.data.code === 200){
                alert('The information has been submitted, thank you for your message')
            }
        })

    }


    inputChange(type,val){
        console.log(val)
        console.log(val.target.value)
        if(type === 0){
            this.setState({
                email:val.target.value
            })
        }else {
            this.setState({
                content:val.target.value
            })
        }
    }


    render() {

        let backAndTextColor = {
            textAlign:'center',
            margin:'0 170px'
        }
        return (
            <div style={backAndTextColor}>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail2" className="food-email-center-vertically">email：</label>
                        <input type="email" className="form-control" id="exampleInputEmail2"
                               placeholder="jane.doe@example.com" id="email" name="email" value={this.state.email} onChange={this.inputChange.bind(this,0)}/>
                    </div>


                    <button type="button" className="btn btn-default " onClick = {(params) => this.submit(this.state.email,this.state.content) }>SEND</button>

                </form>

                <textarea className="form-control" rows="3" id='content' name='content' value={this.state.content} onChange={this.inputChange.bind(this,1)}    >

                </textarea>

            </div>
        );
    }


};

export default MessagePage
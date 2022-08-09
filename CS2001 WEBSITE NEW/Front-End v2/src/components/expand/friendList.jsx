import React, {Component} from 'react';
import {search} from "../../api/user"
import {save,del,selectAll,isExitFriend} from "../../api/friends"


class friendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 点击好友添加查询的列表
            userAddList: [],

            // 好友列表
            friendList: [],
        };

        this.selectAllFriendList()

    }



    selectAllFriendList = ()=>{
        let username = localStorage.getItem("username");



        selectAll(username).then(res =>{
            const data = res.data;
            if(data.success === true){

                const friendList = data.data;
                let friendListDiv = [];
                for (let i = 0; i < friendList.length; i++) {
                    const d = friendList[i];
                    friendListDiv.push(<tr>
                        <td>{d.friendId}</td>
                        <td>{d.friendName}</td>
                        <td>{d.friendEmail}</td>
                        <td>
                            <button onClick={this.del.bind(this, {id: d.friendId, name: d.friendName,email:d.friendEmail})}>delete</button>
                        </td>
                    </tr>)
                }
                this.setState({
                    friendList: friendListDiv
                })
            }
        })
    };


    seachUser = (e) => {
        e.preventDefault();
        let name = this.refs.name.value;
        search(name).then(res=>{
            console.log('res = ',res)
            const data = res.data;
            if(data.success === true){
                const userList = data.data;
                let userListDiv = [];
                for (let i = 0; i < userList.length; i++) {
                    const d = userList[i];
                    userListDiv.push(<tr>
                        <td>{d.id}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>
                            <button onClick={this.addFriend.bind(this, {id: d.id, name: d.username,email:d.email})}>add</button>
                        </td>
                    </tr>)
                }
                this.setState({
                    userAddList: userListDiv
                })
            }
        })
    };


    addFriend = (friends, e) => {
        let username = localStorage.getItem("username");
        console.log('e = ', e);
        console.log('friends = ', friends);
        console.log("current = ", username)

        isExitFriend({
            friendId:friends.id,
            username:username
        }).then(res =>{
            const data = res.data;
            if(data.data === true){
                alert("好友已存在")
                return
            }else {
                save({
                    username:username,
                    friendName:friends.name,
                    friendId: friends.id,
                    friendEmail:friends.email
                }).then(res =>{
                    const data = res.data;
                    if(data.success === true){
                        alert("success")
                    }else {
                        alert("failure")
                    }
                })
            }
        })





    };


    del = (friends, e) => {
        console.log('e = ', e);
        console.log('friends = ', friends);
        let username = localStorage.getItem("username");



        del({
            friendId:friends.id,
            username:username
        }).then(res =>{
            const data = res.data;
            if(data.success === true){
                alert("delete success")
                this.selectAllFriendList()
            }
        })

    };

    render() {
        let btn = {
            display: "inline-block",
            padding: "6px 12px",
            marginBottom: "0",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            backgroundImage: "none",
            border: "1px solid transparent",
            borderRadius: "4px"
        }


        return (
            <div className="food-body">
                <div>

                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab"
                                                                      data-toggle="tab">add friends</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab"
                                                   data-toggle="tab">friends list</a></li>
                    </ul>

                    <div className="tab-content">

                        <div role="tabpanel" className="tab-pane active" id="home">

                            <div className="panel panel-default">
                                <div className="panel-heading"></div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div>
                                            <div className="input-group">
                                                <form onSubmit={this.seachUser}>

                                                    <div className="input-group">
                                                        <input ref="name" type="text" className="form-control" placeholder="Search for..."/>
                                                        <span className="input-group-btn">
                                                  <input  className=" btn-default" style={btn} type="submit" value="search"/>
                                                  </span>
                                                    </div>


                                                    {/*<input type="text" className="form-control" placeholder="Search by name"*/}
                                                    {/*       ref="name"/>*/}


                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <table className="table">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>operate</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.userAddList}
                                        </tbody>
                                    </table>
                                </table>
                            </div>


                        </div>


                        <div role="tabpanel" className="tab-pane" id="profile">
                            <div className="panel panel-default">
                                <div className="panel-heading"></div>
                                <div className="panel-body">
                                    <button onClick={this.selectAllFriendList}>refresh</button>
                                </div>

                                <table className="table">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>friendId</th>
                                            <th>friendName</th>
                                            <th>friendEmail</th>
                                            <th>operate</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.friendList}
                                        </tbody>
                                    </table>
                                </table>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
    );
    }
    }

    export default friendList;

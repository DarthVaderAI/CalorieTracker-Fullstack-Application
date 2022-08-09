import React, {Component} from "react";
import friendList from "./friendList";

class user extends Component {
    constructor(props) {
        super(props);
    }
    add = (user,e) =>{
        console.log('e = ',e)
        console.log('user = ',user)

    }

    render() {
        return (
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button onClick = {this.add.bind(this,{id:1,name:"zs"})}>add</button></td>
            </tr>

        );
    }
}

export default user;





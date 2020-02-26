import React, { Component } from 'react';
import AddUser from './AddUser';

class Users extends Component {
    state = {
        users: [{ id: 1, name: 'Senthuran1', age: 25, address: 'Colombo', isEdit:false }, { id: 2, name: 'Senthuran2', age: 25, address: 'Colombo', isEdit:false }, { id: 3, name: 'Senthuran3', age: 25, address: 'Colombo', isEdit:false },{ id: 4, name: 'Senthuran4', age: 14, address: 'kandy', isEdit:false }]
    }

    AddUser=(newuser)=>{
        let users=[...this.state.users,newuser];
        this.setState({
            users
        });
    }

    updateUser=(i,name,age,address)=>{
        let users=this.state.users;
        users[i].name=name;
        users[i].age=age;
        users[i].address=address;

        this.setState({
            users
        });
    }

    pressEdit=(i)=>{
        let users=this.state.users;
        users[i].isEdit=true;
        this.setState({
            users
        });
    }

    pressDelete=(i)=>{
        if (window.confirm('Are you sure you wish to delete this User')){
        let users=this.state.users.filter((u,index)=>{
            return index!==i
        });
        this.setState({
            users
        });
    }
    }

    render() {
        const userlist = this.state.users.map((user,index) =>
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
                <td><button class="btn btn-warning" onClick={()=>this.pressEdit (index)}>Edit</button>||<button class="btn btn-danger" onClick={()=>this.pressDelete(index)}>Delete</button></td>
            </tr>
        );

        return (
            <div>
                <h1 align="center">Crud Application</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th> Name   </th>
                            <th> Age    </th>
                            <th> Address </th>
                            <th> Action  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userlist}
                    </tbody>
                </table>
                <AddUser AddUser={this.AddUser} edituser={this.state.users} updateUser={this.updateUser}/>
            </div>
        );
    }
}

export default Users;
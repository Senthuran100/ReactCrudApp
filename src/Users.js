import React, { Component } from 'react';
import AddUser from './AddUser';

class Users extends Component {
    state = {
        users: [{ id: 1, name: 'Senthuran', age: 25, address: 'Colombo' }, { id: 2, name: 'Senthuran', age: 25, address: 'Colombo' }, { id: 3, name: 'Senthuran', age: 25, address: 'Colombo' },{ id: 3, name: 'Senthuran4', age: 14, address: 'kandy' }]
    }

    AddUser=(newuser)=>{
        let users=[...this.state.users,newuser];
        this.setState({
            users
        });
    }

    pressEdit=(index)=>{

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
                            <th> Name  </th>
                            <th> Age   </th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userlist}
                    </tbody>
                </table>
                <AddUser AddUser={this.AddUser}/>
            </div>
        );
    }
}

export default Users;
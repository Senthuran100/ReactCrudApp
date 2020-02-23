import React, { Component } from 'react';
import Users from './Users';

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state={
            name:'',
            age:0,
            address:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.AddUser(this.state);
        document.getElementById("theForm").reset()        
    }

    handleChange =(event) =>{
        let nam=    event.target.name;
        let value=event.target.value;
        this.setState({[nam]:value});
    }
    
    render() {
        return (
            <div>
                <form id="theForm" >
                    <div class="form-group">
                        <label >Name</label>
                        <input type="text" class="form-control" name='name' aria-describedby="nameHelp" onChange={this.handleChange} placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label >Age</label>
                        <input type="text" class="form-control" name="age" aria-describedby="ageHelp" onChange={this.handleChange} placeholder="Enter Age" />
                    </div>
                    <div class="form-group">
                        <label >Address</label>
                        <input type="text" class="form-control" name="address" aria-describedby="addressHelp" onChange={this.handleChange} placeholder="Enter Address" />
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default AddUser
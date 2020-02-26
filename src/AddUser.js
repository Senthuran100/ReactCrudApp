import React, { Component } from 'react';
import Users from './Users';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            address: '',
            isEdit: false
        }
    }

    handleUpdate=()=>{
        this.props.updateUser(this.id,this.state.name,this.state.age,this.state.address);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddUser(this.state);
        document.getElementById("theForm").reset()
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let value = event.target.value;
        this.setState({ [nam]: value });
    }

    findArrayElementByEdit(array) {
        return array.filter((element) => {
            return element.isEdit === true;
        })
    }

    render() {
        console.log(this.props.edituser);
        const data = this.findArrayElementByEdit(this.props.edituser);
        console.log(data);
        
        return (
            <div>
                {data.length > 0 ? (
                    <form id="theForm" >
                        <div class="form-group">
                            <label >Name111</label>
                            <input type="text"  name='name' onChange={this.handleChange} defaultValue={data[0].name}  placeholder="Enter Name" />
                        </div>
                        <div class="form-group">
                            <label >Age1333</label>
                            <input type="number"  name="age" onChange={this.handleChange} defaultValue={data[0].age}  placeholder="Enter Age" />
                        </div>
                        <div class="form-group">
                            <label >Address34</label>
                            <input type="text"  name="address" onChange={this.handleChange} defaultValue={data[0].address}  placeholder="Enter Address" />
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleUpdate} ref={() => { this.id = data[0].id }}> Submit</button>
                        </div>
                    </form>

                ) : (
                        <form id="theForm" >
                            <div class="form-group">
                                <label >Name </label>
                                <input type="text" class="form-control" name='name' aria-describedby="nameHelp"  onChange={this.handleChange} placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <label >Age </label>
                                <input type="text" class="form-control" name="age" aria-describedby="ageHelp"  onChange={this.handleChange} placeholder="Enter Age" />
                            </div>
                            <div class="form-group">
                                <label >Address </label>
                                <input type="text" class="form-control" name="address" aria-describedby="addressHelp"  onChange={this.handleChange} placeholder="Enter Address" />
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </form>
                    )}
            </div>
        );

    }

}

export default AddUser
import React, { Component } from 'react';
import Users from './Users';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
            address: '',
            data:null
       }
    }

    handleUpdate=()=>{
        this.setState({data:null});
        // document.getElementById("theForm1").reset()
        this.props.updateUser(this.id,this.name.value,this.age.value,this.address.value);
        console.log(this.state.data);
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
         this.state.data = this.findArrayElementByEdit(this.props.edituser);
        return (
            <div>
                {this.state.data.length > 0 ? (
                    <form id="theForm1" >
                        <div class="form-group">
                            <label >Name111</label>
                            <input type="text" class="form-control" name='name' ref={input => this.name = input} defaultValue={this.state.data[0].name}  placeholder="Enter Name" />
                        </div>
                        <div class="form-group">
                            <label >Age1333</label>
                            <input type="number"  class="form-control" name="age" ref={input => this.age = input} defaultValue={this.state.data[0].age}  placeholder="Enter Age" />
                        </div>
                        <div class="form-group">
                            <label >Address34</label>
                            <input type="text"  class="form-control" name="address" ref={input => this.address = input} defaultValue={this.state.data[0].address}  placeholder="Enter Address" />
                        </div>
                        <div class="form-group">
                            <button type="button" class="btn btn-primary" onClick={this.handleUpdate} ref={() => { if(this.state.data[0]!=null){this.id = this.state.data[0].id }}}> Submit</button>
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
import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
var uniqid = require('uniqid');
const Animaton = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {

    state = {
        visible: true,
        Name: "",
        Departmanent: "",
        Salary: ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    addUser = (e) => {
        this.setState({

        })
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }
    addUser = (dispatch, e) => {
        e.preventDefault();
        const { Name, Departmanent, Salary } = this.state;
        const newUser = {
            id: uniqid(),
            Name,
            Salary,
            Departmanent
        }
        dispatch({ type: "ADD_USER", payload: newUser });
    }

    render() {
        const { visible, Departmanent, Salary, Name } = this.state;

        return <UserConsumer>

            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="col-md-8 mb-4">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>

                            <Animaton pose={visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Add User Form</h4>
                                    </div>
                                    <div className="card-body">

                                         <form onSubmit={this.addUser.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="Name">Name</label>
                                                <input type="text" name="Name" id="id" placeholder="Enter Name" className="form-control" value={Name} onChange={this.changeInput}></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="Departmanent">Department</label>
                                                <input type="text" name="Departmanent" id="Departmanent" placeholder="Enter Department" className="form-control" value={Departmanent} onChange={this.changeInput}></input>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="Salary">Salary</label>
                                                <input type="text" name="Salary" id="Salary" placeholder="Enter Salary" className="form-control" value={Salary} onChange={this.changeInput}></input>
                                            </div>

                                            <button type="submit" className="btn btn-danger btn-block">Add User</button>

                                        </form>
                                    </div>
                                </div>
                            </Animaton>
                        </div>
                    )
                }
            }

        </UserConsumer>









    }
}

export default AddUser;
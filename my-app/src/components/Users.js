import React, { Component } from 'react'
import User from "./User";
import UserConsumer from "../context";
class Users extends Component {
    render() {

        return (
            <UserConsumer>

                {
                    value => {
                        const { users } = value;
                        return (
                            <div>
                                {
                                    users.map(user => {

                                        return (
                                            <User
                                                key={user.id}
                                                id={user.id}
                                                Name={user.Name}
                                                Salary={user.Salary}
                                                Departmanent={user.Departmanent}

                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }

            </UserConsumer>
        )


    }
}
export default Users;
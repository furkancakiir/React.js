import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context';
class User extends Component {
    state = {
        isVisible: false 
    }

    static defaultProps = {
        Name: "bilgi yok",
        Departmanent: "bilgi yok",
        Salary: "bilgi yok"

    }

    onClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    onDeleteUser = (dispatch,e) => {
        const { id } = this.props;

        dispatch({type:"DELETE_USER",payload:id});
    }
    
    componentWillUnmount(){
        console.log("Component Will Un Mount");
    }



    // constructor(props){
    //     super(props)
    //     this.onClickEvent=this.onClickEvent.bind(this);
    // }
    // onClickEvent=(number,e)=>{

    //       console.log(number);
    // }
    // constructor(props){
    //     super(props);

    //     this.state={
    //         isVisible:false 
    //     }

    // }


    render() {




        const { Name, Departmanent, Salary } = this.props;
        const { isVisible } = this.state;
        
        return (<UserConsumer> 
            
             {
                 value => {
                     const {dispatch} = value;
                     return(
                     <div className="col-md-8 mb-4">
                     <div className="card" style={isVisible?{backgroundColor:"#62848d",color:"white"}:null}>
                         <div className="card-header d-flex justify-content-between">

                             <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 31,)}>{Name}</h4>
                             <i className="far fa-trash-alt" style={{ cursor: "pointer" }}onClick={this.onDeleteUser.bind(this,dispatch)}></i>
                             <i onClick={this.onDeleteUser.bind(this, dispatch)}></i>




                         </div>
                         {
                             isVisible ?
                                 <div className="card-body">

                                     <p className="card-text">Maas:{Salary}</p>
                                     <p className="card-text">Departmant{Departmanent}</p>
                                 </div> : null
                         }


                     </div>
                 </div>
                     )}
             }
                     
            
            </UserConsumer>)


    }
}
// User.defaultProps= {
//     Name:"bilgi yok",
//     Departmanent:"bilgi yok",
//     Salary:"bilgi yok"
// }
User.prototypes = {
    Name: PropTypes.string.isRequired,
    Departmanent: PropTypes.string.isRequired,
    Salary: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default User;

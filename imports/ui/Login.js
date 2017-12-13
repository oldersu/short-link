import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Link } from 'react-router';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      error:''
    };
  }
  onSubmit(e){
    e.preventDefault();
    let email=this.refs.email.value.trim();
    let password=this.refs.password.value.trim();

    Meteor.loginWithPassword({email},password,(err)=>{
      if(err){
        this.setState({error:err.reason});
      }
      else{
        this.setState({error:''});
      }
    });
   
  }
    render(){
      return (
        <div className="boxed-view">
          <div className="boxed-view__box">
           <h1>Login to Link</h1>
            {this.state.error? <p>{this.state.error}</p>:undefined}
            <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
              <input type="email" ref="email" name="email" placeholder="Email"/>
              <input type="password" ref="password" name="password" placeholder="Password"/>
              <button className="button">Login</button> 
             </form>
             <Link to="/signup">Have an account?</Link>
            </div>
        </div>
      );
  }
}
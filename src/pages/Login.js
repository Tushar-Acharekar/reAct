import React from 'react';
import Dataflow from './Dataflow.js';
import { withRouter } from "react-router";


class Login extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state...",
      }      
   }

  myCallback = (dataFomchild) => {
    alert('dataFlow_childToParent = ' + dataFomchild)
  } 

  render() {
    return (
      <div className="Login" name="login">
           <div>This is Login Page </div>
           <Dataflow myCallbackFromParent={this.myCallback}></Dataflow>
      </div>
      );
    }
}
export default withRouter(Login);
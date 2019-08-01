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

  render() {
    return (
      <div className="Login" name="login">
           <div>This is Login Page </div>
           <Dataflow></Dataflow>
      </div>
      );
    }
}
export default withRouter(Login);
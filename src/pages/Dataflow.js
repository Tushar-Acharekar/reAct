import React from 'react';
import { withRouter } from "react-router";

class Dataflow extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }      
   }

   somefn = () => {
    console.log('test...!')
   }   

  render() {
  return (
    <div className="Dataflow" name="dataflow">
         <div>This is DataFlow Page</div>
         <div><a onClick={() => this.somefn()}>Link 1</a></div>
         <div><a onClick={() => this.somefn()}>Link 2</a></div>
         <div><a onClick={() => this.somefn()}>Link 3</a></div>
    </div>
    );
  }
}
export default withRouter(Dataflow);


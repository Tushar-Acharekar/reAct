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

   somefn = (childData) => {
    try{
      this.props.myCallbackFromParent(childData);
    }
    catch(e){
      alert("dataFlow_withinChild = " + childData)
    }
    
   }   

  render() {
  return (
    <div className="Dataflow" name="dataflow">
         <div>This is DataFlow Page</div>
         <div><a onClick={() => this.somefn('link1')}>Link 1</a></div>
         <div><a onClick={() => this.somefn('link2')}>Link 2</a></div>
         <div><a onClick={() => this.somefn('link3')}>Link 3</a></div>
    </div>
    );
  }
}
export default withRouter(Dataflow);


import React from 'react';
import { withRouter } from "react-router";

class View1 extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         header: "Header from state...",
         content: "Content from state..."
      }
   }

  render() {
    return (
      <div className="View1" name="view1">
           <div>This is View1 Page </div>
      </div>
      );
    }
}
export default withRouter(View1);


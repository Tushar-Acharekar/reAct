import React from 'react';
import { withRouter } from "react-router";


class View404 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         header: "Header from state...",
         content: "Content from state...",
      }      
   }   

    consoleingClick() {
      console.log(this.props.match)
      console.log(this.props.location)
      console.log(this.props.history)
    }

  render() {
    const {match, location, history} = this.props;
  return (
    <div className="View404" name="view404">
         <div onClick={this.consoleingClick.bind(this)}>This is 404 Page</div>
    </div>
    );
  }
}
export default withRouter(View404);


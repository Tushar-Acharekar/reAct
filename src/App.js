import React from 'react';
import './App.css';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import { Link, Redirect} from "react-router-dom";
import { withRouter } from "react-router";
import Login from './pages/Login.js';
import View1 from './pages/View1.js';
import Dataflow from './pages/Dataflow.js';
import View404 from './pages/View404.js';

class App extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         header: "Note1",
         content: "Content from state...",
         routePath: "view404"
      }
   }
 
  componentDidMount(){
    if (this.props.location.pathname === "/"){this.setState({routePath: 'login'})}
    if (this.props.location.pathname === "/Login"){this.setState({routePath: 'login'})}
    if (this.props.location.pathname === "/View1"){this.setState({routePath: 'view1'})}
    if (this.props.location.pathname === "/DataFlow"){this.setState({routePath: 'dataflow'})}  
  }

  linkClick1() {this.setState({routePath: "login"})}
  linkClick2() {this.setState({routePath: "view1"})} 
  linkClick3(){this.setState({routePath: "dataflow"})}

  render() {

    if (this.props.location.pathname == "/"){ return <Redirect to="/Login" /> ;}

    return (
      <div className="App">
        <app-header-layout>
          <app-header slot="header" fixed>
              <app-toolbar>
                <div id ="mainTitle" >Dockify = {this.state.routePath}</div>
              </app-toolbar>
          </app-header>

          <app-drawer-layout id="drawerLayout" fullbleed>
              <app-drawer id="drawer" slot="drawer" swipe-open="[narrow]" on-opened-changed="_forDraweropenedChange" transition-duration="500">
                  <app-toolbar>Menu</app-toolbar>
                          <iron-selector id="ironSelector" selected={this.state.routePath} attr-for-selected="name" role="navigation">
                            <Link name="login" to="/Login" onClick={() => this.linkClick1()}>login</Link>
                            <Link name="view1" to="/View1" onClick={() => this.linkClick2()}>View1</Link>
                            <Link name="dataflow" to="/DataFlow" onClick={() => this.linkClick3()}>DataFlow</Link>
                          </iron-selector>              
              </app-drawer>
              <iron-pages 
                  selected={this.state.routePath}
                  attr-for-selected="name"
                  fallback-selection="view404"
                  role="main">
                    <Login name="login"></Login>
                    <View1 name="view1"></View1>
                    <Dataflow name="dataflow"></Dataflow>
                    <View404 name="view404"></View404>
              </iron-pages>            
          </app-drawer-layout>    
        </app-header-layout>      

      </div>
    );
  }
}
export default withRouter(App);



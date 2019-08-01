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
import Login from './pages/Login.js';
import View1 from './pages/View1.js';
import Dataflow from './pages/Dataflow.js';
import View404 from './pages/View404.js';

class App extends React.Component {
   constructor(props) {
      super(props);
    
      this.state = {
         header: "Note1",
         content: "Content from state..."
      }
   }

  render() {
    return (
      <div className="App">
        <app-header-layout>
          <app-header slot="header" fixed>
              <app-toolbar>
                <div id ="mainTitle" >Dockify</div>
              </app-toolbar>
          </app-header>

          <app-drawer-layout id="drawerLayout" fullbleed>
              <app-drawer id="drawer" slot="drawer" swipe-open="[narrow]" on-opened-changed="_forDraweropenedChange" transition-duration="500">
                  <app-toolbar>Menu</app-toolbar>
                          <iron-selector id="ironSelector" selected='login' attr-for-selected="name" role="navigation">
                            <a name="login" to="/Login">login</a>
                            <a name="view1" to="/View1">View1</a>
                            <a name="dataflow" to="/DataFlow">DataFlow</a>
                          </iron-selector>              
              </app-drawer>
              <iron-pages 
                  selected='login'
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
export default App;



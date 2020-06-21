import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "react-sidebar";
import { connect } from "react-redux";

import Default from "../Content/Dashboard/Default";
import RightBar from "../components/RightBar";
import Menu2 from "../components/manu2";
import Notifications from "../components/notifications";

import "../static/css/style.css";
import "../static/css/bootstrap.min.css";
import "../static/font/MaterialDesign/css/materialdesignicons.min.css";

class App extends Component {
  state = {
    userRole: "expert",
  };
  closeDrawer = () => {
    this.props.closeDrawer();
  };

  render() {
    return (
      // <Router>
      <section className="maincontent">
        <div className="container-fluid">
          <Sidebar
            sidebar={<Notifications />}
            open={this.props.drawerStatus}
            onSetOpen={this.closeDrawer}
            styles={{ sidebar: { background: "white" } }}
            pullRight={true}
          >
            <div></div>
          </Sidebar>
          <div className="Holder">
            <div className="row">
              <Menu2 />
              <div className="col-md-4 col-lg-3">
                <RightBar />
              </div>
              <div className="col-md-8 col-lg-9">
                <Switch>
                  <Route exact path="/panel">
                    <Redirect to="/panel/dashboard" />
                  </Route>
                  <Route path="/panel/dashboard">
                    <Default />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </section>
      // </Router>
    );
  }
}

export default App;

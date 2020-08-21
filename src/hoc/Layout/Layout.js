import React, { Component, Fragment } from "react";

import { Navbar, Nav } from "react-bootstrap";
import "./Layout.css";

// import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
// import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="white" expand="lg">
          <Navbar.Brand>
            <i className="logo">
              baa<u>bae</u>
            </i>
          </Navbar.Brand>
        </Navbar>
        {/* <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />  */}
        <main>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;

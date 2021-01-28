import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu";
import Sidebar from "../layout/Sidebar";

class Home extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <Sidebar />
      </div>
    );
  }
}

export default Home;
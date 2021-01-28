import React, { Component } from 'react';

class TopMenu extends Component {
  render() {
    return (
      <div className="page-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand logo" href="/home"><span>Hesap</span>Takip</a>
        </nav>
      </div>
    );
  }
}

export default TopMenu;
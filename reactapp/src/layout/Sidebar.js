import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a className="sidebar-list-link" href="/home"><i className="fas fa-home"></i><span className="sidebar-text">Home</span></a>
          </li>
          <li className="sidebar-list-item">
            <a className="sidebar-list-link" href="/personel"><i className="fas fa-users-cog"></i><span className="sidebar-text">Personel</span></a>
          </li>
          <li className="sidebar-list-item">
            <a className="sidebar-list-link" href="/client"><i className="fas fa-users"></i><span className="sidebar-text">Müşteri</span></a>
          </li>
          <li className="sidebar-list-item">
            <a className="sidebar-list-link" href="/inventory"><i className="fas fa-boxes"></i><span className="sidebar-text">Envanter</span></a>
          </li>
          <li className="sidebar-list-item">
            <a className="sidebar-list-link" href="/charts"><i className="fas fa-boxes"></i><span className="sidebar-text">Charts</span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import { Link } from "react-router-dom";

class Inventory extends Component {
  state = {
    inventories: []
  };
  addInventory = () => {
    this.props.history.push("/add-inventory")
  };
  deleteInventory = async (id, e) => {
    await axios.delete(`http://localhost:3004/inventory/${id}`);
    window.location.reload();
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/inventory");
    this.setState({
      inventories: response.data
    });
  };

  render() {
    return (
      <div>
        <TopMenu />
        <Sidebar />
        <div className="row justify-content-md-center main">
          <div className="col mt-4">
            <div className="col-md-12 mb-4">
              <h3>Envanter Listesi</h3>
            </div>
            <div className="col-md-12">
              <form onSubmit={this.addInventory}>
                <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-plus"></i>Yeni Envanter Ekle</button>
              </form>
            </div>
            <div className="col-md-12 mt-4">
              <table className="table table-striped table-dark table-hover panel-body">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Kodu</th>
                    <th scope="col">Adı</th>
                    <th scope="col">Lisansı</th>
                    <th scope="col">Düzenle</th>
                    <th scope="col">Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.inventories.map((inventory, key) => {
                      return (
                        <tr key={key}>
                          <td>{inventory.id}</td>
                          <td>{inventory.code}</td>
                          <td>{inventory.name}</td>
                          <td>{inventory.licence}</td>
                          <td><Link to={`edit-inventory/${inventory.id}`} type="button" className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link></td>
                          <td><button onClick={this.deleteInventory.bind(this, inventory.id)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
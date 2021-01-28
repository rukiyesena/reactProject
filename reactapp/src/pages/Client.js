import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import { Link } from "react-router-dom";

class Client extends Component {
  state = {
    clients: []
  };
  addClient = () => {
    this.props.history.push("/add-client");
  };
  deleteClient = async (id, e) => {
    await axios.delete(`http://localhost:3004/client/${id}`);
    window.location.reload();
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/client");
    this.setState({
      clients: response.data
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
              <h3>Müşteri Listesi</h3>
            </div>
            <div className="col-md-12">
              <form onSubmit={this.addClient}>
                <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-plus"></i>Yeni Müşteri Ekle</button>
              </form>
            </div>
            <div className="col-md-12 mt-4">
              <table className="table table-striped table-dark table-hover panel-body">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Adı</th>
                    <th scope="col">Soyadı</th>
                    <th scope="col">Email</th>
                    <th scope="col">Düzenle</th>
                    <th scope="col">Sil</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.clients.map((client, key) => {
                      return (
                        <tr key={key}>
                          <td>{client.id}</td>
                          <td>{client.name}</td>
                          <td>{client.surname}</td>
                          <td>{client.email}</td>
                          <td><Link to={`edit-client/${client.id}`} type="button" className="btn btn-success"><i className="fas fa-pencil-alt"></i></Link></td>
                          <td><button onClick={this.deleteClient.bind(this, client.id)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
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

export default Client;
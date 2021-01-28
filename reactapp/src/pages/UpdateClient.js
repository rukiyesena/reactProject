import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import { Link } from "react-router-dom";

class UpdateClient extends Component {
  state = {
    inventories: [],
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    taxnr: "",
    inventory: "",
    licence: "",
    licencedate: ""
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/inventory");
    this.setState({
      inventories: response.data
    });
    const { id } = this.props.match.params;
    const resp = await axios.get(`http://localhost:3004/client/${id}`);
    const { name, surname, email, phone, address, taxnr, inventory, licence, licencedate } = resp.data;
    this.setState({
      name,
      surname,
      email,
      phone,
      address,
      taxnr,
      inventory,
      licence,
      licencedate
    })
  };

  updateClient = async (e) => {
    e.preventDefault();
    const { name, surname, email, phone, address, taxnr, inventory, licence, licencedate } = this.state;
    const updatedClient = {
      name,
      surname,
      email,
      phone,
      address,
      taxnr,
      inventory,
      licence,
      licencedate
    };
    const { id } = this.props.match.params;
    await axios.put(`http://localhost:3004/client/${id}`, updatedClient);
    this.props.history.push("/client");
  };
  render() {
    const { name, surname, email, phone, address, taxnr, inventory, licence, licencedate } = this.state;
    return (
      <div>
        <TopMenu />
        <Sidebar />
        <div className="row justify-content-md-center main">
          <div className="col mt-4">
            <div className="row mb-4">
              <div className="col-md-11">
                <h3>Müşteri Ekleme</h3>
              </div>
              <div className="col-md-1 back-icon">
                <Link to={`../client`} type="button" className="btn btn-success"><i className="fas fa-chevron-left"></i></Link>
              </div>
            </div>
            <div className="col-md-12 mt-4 panel-body">
              <form onSubmit={this.updateClient}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Müşteri Adı</label>
                    <input
                      type="text"
                      name="name"
                      id="id"
                      className="form-control"
                      placeholder="Müşterinin Adını Giriniz"
                      value={name}
                      onChange={this.changeInput}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="surname">Müşteri Soyadı</label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      className="form-control"
                      placeholder="Müşterinin Soyadını Giriniz"
                      value={surname}
                      onChange={this.changeInput}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Müşteri Email</label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.changeInput}
                        value={email}
                        className="form-control"
                        placeholder="Müşterinin Emailini Giriniz"
                        aria-label="Müşterinin Emailini Giriniz"
                        aria-describedby="basic-addon2">
                      </input>
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Müşteri Telefon</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={this.changeInput}
                      value={phone}
                      className="form-control"
                      placeholder="Müşterinin Telefon Numarasını Giriniz"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="address">Müşteri Adres</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      onChange={this.changeInput}
                      value={address}
                      className="form-control"
                      placeholder="Müşterinin Adresini Giriniz"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="taxnr">Müşteri Vergi No</label>
                    <input
                      type="text"
                      name="taxnr"
                      id="taxnr"
                      onChange={this.changeInput}
                      value={taxnr}
                      className="form-control"
                      placeholder="Müşterinin Vergi Numarasını Giriniz"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inventory">Kullandığı Envanter</label>
                    <select className="form-control"
                      name="inventory"
                      value={inventory}
                      onChange={this.changeInput}
                      id="inventory">
                      <option value>Seçiniz</option>
                      {
                        this.state.inventories.map(function (inventory, key) {
                          return (
                            <option key={key}>
                              {inventory.name}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="licence">Envanter Lisansı</label>
                    <input
                      name="licence"
                      id="licence"
                      value={licence}
                      onChange={this.changeInput}
                      className="form-control"
                      type="text"
                      readOnly
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="licencedate">Lisans Bitiş Tarihi</label>
                    <input
                      type="date"
                      name="licencedate"
                      id="licencedate"
                      onChange={this.changeInput}
                      value={licencedate}
                      className="form-control"
                      readOnly
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-save"></i>Güncelle</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateClient;
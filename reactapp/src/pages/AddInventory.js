import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import { Link } from "react-router-dom";

class AddInventory extends Component {
  state = {
    marka: "",
    model: "",
    code: "",
    name: "",
    licence: "",
    licencedate: ""
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  addInventory = async (e) => {
    const { marka, model, code, name, licence, licencedate } = this.state;
    const newInventory = {
      marka,
      model,
      code,
      name,
      licence,
      licencedate
    };
    await axios.post("http://localhost:3004/inventory", newInventory);
  };

  render() {
    const { marka, model, code, name, licence, licencedate } = this.state;
    return (
      <div>
        <TopMenu />
        <Sidebar />
        <div className="row justify-content-md-center main">
          <div className="col mt-4">
            <div className="row mb-4">
              <div className="col-md-11">
                <h3>Envanter Ekleme</h3>
              </div>
              <div className="col-md-1 back-icon">
                <Link to={`inventory`} type="button" className="btn btn-success"><i className="fas fa-chevron-left"></i></Link>
              </div>
            </div>
            <div className="col-md-12 mt-4 panel-body">
              <form onSubmit={this.addInventory}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="marka">Envanter Markası</label>
                    <input
                      type="text"
                      name="marka"
                      id="marka"
                      value={marka}
                      onChange={this.changeInput}
                      className="form-control"
                      placeholder="Envanter Markasını Giriniz"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="model">Envanter Modeli</label>
                    <input
                      type="text"
                      name="model"
                      id="model"
                      value={model}
                      onChange={this.changeInput}
                      className="form-control"
                      placeholder="Envanter Modelini Giriniz"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="code">Envanter Kodu</label>
                    <input
                      type="text"
                      name="code"
                      id="code"
                      value={code}
                      onChange={this.changeInput}
                      className="form-control"
                      placeholder="Envanter Kodunu Giriniz"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Envanter Adı</label>
                    <input
                      type="text"
                      name="name"
                      id="id"
                      value={name}
                      onChange={this.changeInput}
                      className="form-control"
                      placeholder="Envanter Adını Giriniz"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="licence">Envanter Lisansı</label>
                    <input
                      type="text"
                      name="licence"
                      id="licence"
                      value={licence}
                      onChange={this.changeInput}
                      className="form-control"
                      placeholder="Envanter Lisansını Giriniz"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="licencedate">Lisans Bitiş Tarihi</label>
                    <input
                      type="date"
                      name="licencedate"
                      id="licencedate"
                      value={licencedate}
                      onChange={this.changeInput}
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-save"></i>Ekle</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddInventory;
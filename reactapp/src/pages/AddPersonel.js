import React, { Component } from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import { Link } from "react-router-dom";

class AddPersonel extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    identitynr: "",
    place: "",
    client: ""
  };
  /*componentDidMount() {
          this.interval = setInterval(() => {
              alert('Merhaba');
              //autoPlay some for specific period of times or
              // Do some stuff you want
          }, 3000);

  }*/
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addPersonnel = async (e) => {
    const { name, surname, email, phone, password, identitynr, place, client } = this.state;
    const newPersonnel = {
      name,
      surname,
      email,
      phone,
      password,
      identitynr,
      place,
      client
    };
    await axios.post("http://localhost:3004/personnel", newPersonnel);
  };

  render() {
    const { name, surname, email, phone, password, identitynr, place, client } = this.state;
    return (
      <div>
        <TopMenu />
        <Sidebar />
        <div className="row justify-content-md-center main">
          <div className="col mt-4">
            <div className="row mb-4">
              <div className="col-md-11">
                <h3>Personel Ekleme</h3>
              </div>
              <div className="col-md-1 back-icon">
                <Link to={`personel`} type="button" className="btn btn-success"><i className="fas fa-chevron-left"></i></Link>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <form onSubmit={this.addPersonnel}>
                <div className=" panel-body">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Personel Adı</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.changeInput}
                        className="form-control"
                        placeholder="Personelin Adını Giriniz"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="surname">Personel Soyadı</label>
                      <input
                        type="text"
                        name="surname"
                        id="surname"
                        value={surname}
                        onChange={this.changeInput}
                        className="form-control"
                        placeholder="Personelin Soyadını Giriniz"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Personel Email</label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={email}
                          onChange={this.changeInput}
                          className="form-control"
                          placeholder="Personelin Emailini Giriniz"
                          aria-label="Personelin Emailini Giriniz"
                          aria-describedby="basic-addon2">
                        </input>
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">@example.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="password">Personel Şifre</label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.changeInput}
                        className="form-control"
                        placeholder="Personelin Şifresini Giriniz"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="phone">Personel Telefon</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={phone}
                        onChange={this.changeInput}
                        className="form-control"
                        placeholder="Personelin Telefon Numarasını Giriniz"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="identitynr">Personel TC No</label>
                      <input
                        type="text"
                        name="identitynr"
                        id="identitynr"
                        value={identitynr}
                        onChange={this.changeInput}
                        className="form-control"
                        placeholder="Personelin TC Numarasını Giriniz"
                      />
                    </div>
                  </div>
                </div>
                <div className=" panel-body">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="place">Çalıştığı Lokasyon</label>
                      <select className="form-control"
                        name="place"
                        id="place"
                        selectedvalue={place}
                        value={place}
                        onChange={this.changeInput}>
                        <option>
                          Bizde
                                                </option>
                        <option>
                          Müşteride
                                                </option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="client">Çalıştığı Müşteri</label>
                      <select className="form-control"
                        name="client"
                        id="client"
                        selectedvalue={client}
                        value={client}
                        onChange={this.changeInput}
                        disabled={place !== 'Müşteride'}>
                        <option>

                        </option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-save"></i>Ekle</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPersonel;
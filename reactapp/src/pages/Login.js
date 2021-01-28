import React, { Component } from 'react';
/*

*/
class Login extends Component {
  login = () => {
    this.props.history.push("/home")
  };

  render() {
    return (
      <div className="container" style={{ height: "100%" }}>
        <div className="row justify-content-center">
          <div className="col-4 card" style={{ backgroundColor: "#00000029", color: "#ffffff", marginTop: "25%" }}>
            <div className="card-header">
              <h3>KULLANICI GİRİŞİ</h3>
            </div>
            <div className="card-body" style={{ textAlign: "left" }}>
              <form className="form-signin" onSubmit={this.login}>
                <div className="form-group">
                  <label htmlFor="username">Kullanıcı Adı</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kullanıcı Adını Giriniz"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Şifre</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Şifreyi Giriniz"
                  />
                </div>
                <button type="submit" className="btn btn-warning btn-block">Giriş</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
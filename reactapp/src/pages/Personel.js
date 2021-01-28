import React, {Component} from 'react';
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import axios from "axios";
import {Link} from "react-router-dom";

class Personel extends Component {
    state = {
        personels: []
    };
    addPersonel = () => {
        this.props.history.push("/add-personel")
    };
    deletePersonel =async (id,e) => {
        await axios.delete(`http://localhost:3004/personnel/${id}`);
        window.location.reload();
    };

    componentDidMount = async () => {
        const response = await axios.get("http://localhost:3004/personnel");
        this.setState({
            personels: response.data
        });
    };

    render() {
        return (
            <div >
                <TopMenu/>
                <Sidebar/>
                <div className="row justify-content-md-center main" >
                    <div className="col mt-4">
                        <div className="col-md-12 mb-4">
                            <h3>Personel Listesi</h3>
                        </div>
                        <div className="col-md-12">
                            <form onSubmit={this.addPersonel}>
                                <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-plus"></i>Yeni Personel Ekle</button>
                            </form>
                        </div>
                        <div className="col-md-12 mt-4">
                            <table className="table table-striped table-hover table-dark panel-body">
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
                                    this.state.personels.map((personel, key) => {
                                        return (
                                            <tr key = {key}>
                                                <td>{personel.id}</td>
                                                <td>{personel.name}</td>
                                                <td>{personel.surname}</td>
                                                <td>{personel.email}</td>
                                                <td><Link to = {`edit-personel/${personel.id}`} type="button" className="btn btn-primary btn-with-icon"><i className="fas fa-pencil-alt"></i>Düzenle</Link></td>
                                                <td><button onClick={this.deletePersonel.bind(this,personel.id)} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
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

export default Personel;
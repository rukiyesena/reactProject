import React, { Component } from 'react'
import TopMenu from "../layout/TopMenu.js";
import Sidebar from "../layout/Sidebar.js";
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import axios from "axios";

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {}
    }
  }
  componentDidMount() {
    axios.get("http://localhost:3004/chart").then(res => {
      const chart = res.data;
      let country = [];
      let litres = [];
      chart.forEach(element => {
        country.push(element.country);
        litres.push(element.litres);
      });
      this.setState({
        Data: {
          labels: country,
          fontcolor: 'white',
          
          datasets: [
            {
              //   label: 'Champions League 2017/2018 Top Scorer',
              data: litres,
              backgroundColor: [
                'rgba(255,105,145,0.6)',
                'rgba(155,100,210,0.6)',
                'rgba(90,178,255,0.6)',
                'rgba(240,134,67,0.6)',
                'rgba(120,120,120,0.6)',
                'rgba(250,55,197,0.6)'
              ]
            }
          ]
        }
      });
    })
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Sidebar />
        <div className="row justify-content-md-center main"  >
          <div className="col-md-6 panel-body">
            <Pie
              data={this.state.Data}
              options={{ maintainAspectRatio: false }} />
          </div>
          <div className="col-md-6 panel-body ">
            <Bar
              data={this.state.Data}
              options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    )
  }
}
export default Charts;
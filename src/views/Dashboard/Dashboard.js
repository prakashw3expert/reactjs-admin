import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';


const brandPrimary =  '#20a8d8';
const brandSuccess =  '#4dbd74';
const brandInfo =     '#63c2de';


// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Clients',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }
  ],
};

const cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}

// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Trainers',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ],
};

const cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent',
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
      }
    }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}




// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'Workouts',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
    }
  ],
};

const cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6,
    }],
    yAxes: [{
      display: false,
    }]
  }
}

// Main Chart

// convert Hex to RGBA
function convertHex(hex,opacity) {
  hex = hex.replace('#','');
  var r = parseInt(hex.substring(0,2), 16);
  var g = parseInt(hex.substring(2,4), 16);
  var b = parseInt(hex.substring(4,6), 16);

  var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
  return result;
}

//Random Numbers
function random(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50,200));
  data2.push(random(80,100));
  data3.push(65);
}

const mainChart = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jully', 'August', 'Sep'],
  datasets: [
    {
      label: 'Set Goals',
      backgroundColor: convertHex(brandInfo,10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1
    },
    {
      label: 'Achieved Goals',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2
    },
    
  ]
}

const mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false,
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    }
  }
}

class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-sm-6 col-lg-6">
            <div className="card card-inverse card-primary">
              <div className="card-block pb-0">
                <h4 className="mb-0">4000</h4>
                <p>Total Clients</p>
              </div>
              <div className="chart-wrapper px-1">
                <Line data={cardChartData1} options={cardChartOpts1} height={100}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="card card-inverse card-info">
              <div className="card-block pb-0">
                <h4 className="mb-0">30000</h4>
                <p>Total PT</p>
              </div>
              <div className="chart-wrapper px-1">
                <Line data={cardChartData2} options={cardChartOpts2} height={100}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="card card-inverse card-warning">
              <div className="card-block pb-0">
                <h4 className="mb-0">500</h4>
                <p>Total Tranings</p>
              </div>
              <div className="chart-wrapper px-1">
                <Bar data={cardChartData4} options={cardChartOpts4} height={100}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="card card-inverse card-danger">
              <div className="card-block pb-0">
                <h4 className="mb-0">500</h4>
                <p>Total Workouts</p>
              </div>
              <div className="chart-wrapper px-1">
                <Bar data={cardChartData4} options={cardChartOpts4} height={100}/>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-5">
                <h4 className="card-title mb-0">Goals</h4>
                { /*<div className="small text-muted">November 2015</div> */ }
              </div>
            </div>
            <div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
              <Line data={mainChart} options={mainChartOpts} height={300}/>
            </div>
          </div>
        </div>
        

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                New Appointments
              </div>
              <div className="card-block">
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th>Client</th>
                      <th>PT</th>
                      <th>Date & Time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Jan 10, 2017 to Jan 15, 2017</div>
                        <div className="small text-muted">
                          <span>10 AM to 12 PM</span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="text-success"><strong>Accepted</strong></div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Jan 10, 2017 to Jan 15, 2017</div>
                        <div className="small text-muted">
                          <span>10 AM to 12 PM</span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="text-danger"><strong>Pending</strong></div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Jan 10, 2017 to Jan 15, 2017</div>
                        <div className="small text-muted">
                          <span>10 AM to 12 PM</span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="text-info"><strong>Completed</strong></div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Jan 10, 2017 to Jan 15, 2017</div>
                        <div className="small text-muted">
                          <span>10 AM to 12 PM</span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="text-info"><strong>Completed</strong></div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Yiorgos Avraamu</div>
                        <div className="small text-muted">
                          <span>East Amanda</span>
                        </div>
                      </td>
                      <td>
                        <div>Jan 10, 2017 to Jan 15, 2017</div>
                        <div className="small text-muted">
                          <span>10 AM to 12 PM</span>
                        </div>
                      </td>
                      
                      <td>
                        <div className="text-info"><strong>Completed</strong></div>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;

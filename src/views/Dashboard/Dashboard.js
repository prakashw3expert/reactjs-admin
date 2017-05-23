import React, { Component } from 'react';
var AmCharts = require("amcharts3-react");

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
            <div className="card">
              <div className="card-header">
                Total Number Of Clients (5,233)
              </div>
              <div className="card-block pb-0 pt-0">
                <div className="row ml-1">
                  <div className="col-sm-6">
                    <div className="callout callout-info">
                      <small className="text-muted">IPhone</small><br/>
                      <strong className="h6">3,000</strong>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="callout callout-warning">
                      <small className="text-muted">Android</small><br/>
                      <strong className="h6">2,233</strong>
                      <div className="chart-wrapper">
                        <canvas id="sparkline-chart-2" width="100" height="30"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chart-wrapper px-1">
                <Chart height={500}/>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-6">
            <div className="card">
            <div className="card-header">
              Total Number Of PT (7,000)
            </div>
            <div className="card-block pb-0 pt-0">
              <div className="row ml-1">
                <div className="col-sm-6">
                  <div className="callout callout-info">
                    <small className="text-muted">IPhone</small><br/>
                    <strong className="h6">4,000</strong>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="callout callout-warning">
                    <small className="text-muted">Android</small><br/>
                    <strong className="h6">3,000</strong>
                  </div>
                </div>
              </div>
            </div>
              <div className="chart-wrapper px-1">
                <Chart height={500}/>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
        <div className="card-header">
          Total Number Of Sessions (6,000)
        </div>
          <div className="card-block pb-0 pt-0">
          <div className="row ml-3">
            <div className="col-sm-6">
              <div className="callout callout-info">
                <small className="text-muted">Total Session</small><br/>
                <strong className="h6">3,000</strong>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="callout callout-warning">
                <small className="text-muted">Complete Session</small><br/>
                <strong className="h6">3,000</strong>
              </div>
            </div>
          </div>
            <div className="chart-wrapper px-1">
              <Sessions height={500}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// Generate random data
function generateData(count) {
  var firstDate = new Date();
  var now = new Date();
  firstDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  var dataProvider = [];

  for (var i = 0; i < count; ++i) {
    var date = new Date(firstDate.getTime());

    date.setDate(i);

    dataProvider.push({
      date: date,
      activeCount: Math.floor(Math.random() * 10),
      inActiveCount: Math.floor(Math.random() * 10)
    });
  }

  return dataProvider;
}


// Component which contains the dynamic state for the chart
var Chart = React.createClass({
  getInitialState: function () {
    return {
      dataProvider: generateData(10),
      timer: null
    };
  },

  componentDidMount: function () {
    var self = this;

    self.setState({
      // Update the chart dataProvider every 3 seconds
      // timer: setInterval(function () {
      //   self.setState({
      //     dataProvider: generateData()
      //   });
      // }, 3000)
      dataProvider: generateData(10)
    });
  },

  componentWillUnmount: function () {
    clearInterval(this.state.timer);
  },

  render: function () {
    // Render the chart
    return React.createElement(AmCharts.React, {
      "path": "amcharts3/amcharts",
      "type": "serial",
      "theme": "light",
      'height' : 500,
      "marginTop": 10,
      "marginRight": 15,
      "marginLeft": 40,
      "legend": {
          "useGraphSettings": true
      },
      "dataDateFormat": "YYYY-MM-DD",
      "dataProvider": this.state.dataProvider,
      "valueAxes": [{
              "id": "v1",
              "axisAlpha": 0.2,
              "dashLength": 1,
              "axisColor": "#FF6600",
              "position": "left",
              "ignoreAxisWidth": true
          }
      ],
      "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
      },
      "graphs": [{
              "id": "g1",
              "balloon": {
                  "drop": true,
                  "adjustBorderColor": false,
                  "color": "#ffffff"
              },
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 10,
              "hideBulletsCount": 50,
              "lineThickness": 1,
              "title": "IPhone",
              "useLineColorForBulletBorder": true,
              "valueField": "activeCount",
              "balloonText": "<span style='font-size:11px;'>[[activeCount]]</span>"
          }
          , {
              "id": "g2",
             // "lineColor": "#FF6600",
              "balloon": {
                  "drop": true,
                  "adjustBorderColor": false,
                  "color": "#ffffff"
              },
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 10,
              "hideBulletsCount": 50,
              "lineThickness": 1,
              "title": "Andriod",
              "valueField": "inActiveCount",
              "useLineColorForBulletBorder": true,
              "balloonText": "<span style='font-size:11px;'>[[inActiveCount]]</span>"
          },
      ],
      "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis": false,
          "offset": 30,
          "scrollbarHeight": 80,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 1,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount": true,
          "color": "#AAAAAA"
      },
      "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 1,
          "cursorColor": "#258cbb",
          "limitToGraph": "g1",
          "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": false
      },
    });
  }
});

var Sessions = React.createClass({
  getInitialState: function () {
    return {
      dataProvider: generateData(20),
      timer: null
    };
  },

  componentDidMount: function () {
    var self = this;
    self.setState({
      // Update the chart dataProvider every 3 seconds
      // timer: setInterval(function () {
      //   self.setState({
      //     dataProvider: generateData()
      //   });
      // }, 3000)
      dataProvider: generateData(20)
    });
  },

  componentWillUnmount: function () {
    clearInterval(this.state.timer);
  },

  render: function () {
    // Render the chart
    return React.createElement(AmCharts.React, {
      "path": "amcharts3/amcharts",
      "type": "serial",
      "theme": "light",
      'height' : 500,
      "marginTop": 10,
      "marginRight": 15,
      "marginLeft": 40,
      "legend": {
          "useGraphSettings": true
      },
      "dataDateFormat": "YYYY-MM-DD",
      "dataProvider": this.state.dataProvider,
      "valueAxes": [{
              "id": "v1",
              "axisAlpha": 0.2,
              "dashLength": 1,
              "axisColor": "#FF6600",
              "position": "left",
              "ignoreAxisWidth": true
          }
      ],
      "balloon": {
          "borderThickness": 1,
          "shadowAlpha": 0
      },
      "graphs": [{
              "id": "g1",
              "balloon": {
                  "drop": true,
                  "adjustBorderColor": false,
                  "color": "#ffffff"
              },
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 10,
              "hideBulletsCount": 50,
              "lineThickness": 1,
              "title": "Total",
              "useLineColorForBulletBorder": true,
              "valueField": "activeCount",
              "balloonText": "<span style='font-size:11px;'>[[activeCount]]</span>"
          },
          {
              "id": "g2",
             // "lineColor": "#FF6600",
              "balloon": {
                  "drop": true,
                  "adjustBorderColor": false,
                  "color": "#ffffff"
              },
              "bullet": "round",
              "bulletBorderAlpha": 1,
              "bulletColor": "#FFFFFF",
              "bulletSize": 10,
              "hideBulletsCount": 50,
              "lineThickness": 1,
              "title": "Completed",
              "valueField": "inActiveCount",
              "useLineColorForBulletBorder": true,
              "balloonText": "<span style='font-size:11px;'>[[inActiveCount]]</span>"
          },

      ],
      "chartScrollbar": {
          "graph": "g1",
          "oppositeAxis": false,
          "offset": 30,
          "scrollbarHeight": 80,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 1,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount": true,
          "color": "#AAAAAA"
      },
      "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha": 1,
          "cursorColor": "#258cbb",
          "limitToGraph": "g1",
          "valueLineAlpha": 0.2
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": false
      },
    });
  }
});

export default Dashboard;

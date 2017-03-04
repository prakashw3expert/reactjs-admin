import React, { Component } from 'react';

class Trainings extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    this.clientList = [
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    {"id":"436000001","type":"trainer","name":"Jerry Wood","email":"jerrywood@ptspotter.co.uk","phone":"+44999999999","gym":"Life Stye Gym","location":"Belfield Interchange, UK","lat":"55.597155","lng":"-4.7519884","status":"Active","created":"20/02/2017","modified":"2017-20-02 14:24:00"},
    ];
    this.resultSet =[];
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
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                PT List
              </div>
              <div className="card-block">
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th>PT ID</th>
                      <th>PT Name</th>
                      <th>Email Address</th>
                      <th>Mobile Number</th>
                      <th>Gym</th>
                      <th className="text-center">Traiinings#</th>
                      <th className="text-center">Registration Date</th>
                      <th className="text-center">Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {(()=>{

                      this.clientList.forEach((item,index)=>{
                        this.resultSet.push(<Trainer item={item} />)
                           });
                          return this.resultSet;
                    })()}
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

function Trainer(props){
    return (
        <tr>
           <td>
             <div>{props.item.id}</div>
           </td>
           <td>
             <div>{props.item.name}</div>
           </td>
           <td>
             <div>{props.item.email}</div>
           </td>
           <td>
             <div>{props.item.phone}</div>
           </td>
           <td>
             <div>{props.item.gym} <div className="small text-muted"><span>BS4 5SS</span></div></div>
           </td>
           <td>
             <div className="text-center">10</div>
           </td>
           <td>
             <div className="text-center">{props.item.created}</div>
           </td>
           <td>
             <div className="text-center text-success"><strong>{props.item.status}</strong></div>
           </td>
           <td>
             <div className="text-center">
             <a href="#" className="mr-10 mr-h"><i className="fa fa-eye" aria-hidden="true"></i></a>
             <a href="#"><i className="fa fa-times" aria-hidden="true"></i></a>
             </div>
           </td>
         </tr>
    );
}

export default Trainings;

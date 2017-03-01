import React, { Component } from 'react';


class Categories extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };

    this.clientList = [
    {"id":"436000001","name":"Power Yoga","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000002","name":"Aerobic","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000003","name":"Cycling","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000004","name":"Running","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000005","name":"Climbing","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000006","name":"Jumping","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    {"id":"436000007","name":"Climbing","trainers":"10","contracts":"10","created":"18/02/2017","statusText":"Active"},
    
    

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
                Categories List
              </div>
              <div className="card-block">
                <table className="table table-hover table-outline mb-0 hidden-sm-down">
                  <thead className="thead-default">
                    <tr>
                      <th>Category ID</th>
                      <th>Category Name</th>
                      <th className="text-center">PT#</th>
                      <th className="text-center">Contract#</th>
                      <th className="text-center">Added Date</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {(()=>{
                      
                      this.clientList.forEach((user,index)=>{
                        this.resultSet.push(<tr>
                               <td>
                                 <div>{user.id}</div>
                               </td>
                               <td>
                                 <div>{user.name}</div>
                               </td>
                               <td>
                                 <div className="text-center">{user.trainers}</div>
                               </td>
                               <td>
                                 <div className="text-center">{user.contracts}</div>
                               </td>
                               <td>
                                 <div className="text-center">{user.created}</div>
                               </td>
                               <td>
                                 <div className="text-center text-success"><strong>{user.statusText}</strong></div>
                               </td>
                               <td>
                                 <div className="text-center">
                                 <a href="#" className="mr-10 mr-h"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                 <a href="#"><i className="fa fa-times" aria-hidden="true"></i></a>
                                 </div>
                               </td>
                             </tr>)
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

export default Categories;

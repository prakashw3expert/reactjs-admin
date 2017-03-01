import React, { Component } from 'react';



class Workouts extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

        this.clientList = [
            {"id":"436000001","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000002","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000003","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000004","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000005","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000006","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000007","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000008","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"436000009","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"4360000010","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"4360000011","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"4360000012","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"4360000013","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
            {"id":"4360000014","pt":"Ida Grahan","client":"Edward Curtis","gym":"Lifestyle Fitness","zip":"CA2 4AS","created":"18/02/2017 10AM"},
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
                            Work out List
                        </div>
                        <div className="card-block">
                            <table className="table table-hover table-outline mb-0 hidden-sm-down">
                                <thead className="thead-default">
                                    <tr>
                                        <th>Contract ID</th>
                                        <th>PT</th>
                                        <th>Client</th>
                                        <th>Gym</th>
                                        <th>ZIp</th>
                                        <th className="text-center"> Date & Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(()=>{
                                        this.clientList.forEach((item,index)=>{
                                        this.resultSet.push(<Workout item={item} />)
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

function Workout(props){
  return (
        <tr>
            <td>
                <div>{props.item.id}</div>
            </td>
            <td>
                <div>{props.item.pt}</div>
            </td>
            <td>
                <div>{props.item.client}</div>
            </td>
            <td>
                <div>{props.item.gym}</div>
            </td>
            <td>
                <div>{props.item.zip}</div>
            </td>
            <td>
                <div className="text-center">{props.item.created}</div>
            </td>
        </tr>
    );
}

export default Workouts;

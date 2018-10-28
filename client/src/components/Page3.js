import React, {Component} from 'react';
import * as API from '../api/API';
import {Link} from 'react-router-dom';
import './Design.css';


class Page3 extends Component {


    state={
        results: []
    }

    componentWillMount(){
        this.getPersons();
        this.setState({
            results: []
        })
    }

    getPersons = () =>{
        API.setPage3()
            .then((result) => {

                this.setState({
                    results: result.results
                });



            });
    };

    renderTable(){
        return this.state.results.map((result) => {
          return(

                  <tr>
                      <td>{result.pno}</td>
                      <td>{result.f_name} {result.l_name}</td>
                      <td>{result.age}</td>
                      <td>{result.gender}</td>
                      <td>{result.height}</td>
                      <td>{result.weight}</td>
                      <td>{result.bt}</td>
                      <td>{result.pr}</td>
                      <td>{result.bp}</td>
                      <td>{result.notes}</td>
                  </tr>
              )
        });

    }

    render() {
        return (
            <div>


                <ul>
                    <li><p>Health Camp SPA</p></li>
                    <Link to="/page3"><li style={{float:'right',backgroundColor: '#3878e0',color: 'white'}}><a>Reports</a></li></Link>
                    <Link to="/page2"><li style={{float:'right'}}><a>Health Vitals</a></li></Link>

                    <Link to="/"><li style={{float: 'right'}}><a>Demographics</a></li></Link>

                </ul>

                <h2>PATIENT DETAILS</h2>

                <table id="general_data">
                    <tr>
                        <th>Patient No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Body Temp</th>
                        <th>Pulse Rate</th>
                        <th>BP</th>
                        <th>Notes</th>
                    </tr>

                    {this.renderTable()}
                </table>



            </div>
        )
    }
}



export default Page3;
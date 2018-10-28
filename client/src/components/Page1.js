import React, {Component} from 'react';
import * as API from '../api/API';
import {Link} from 'react-router-dom';
import './Design.css';
//import Page2 from "./Page2";
import unknown from './download.png'


class Page1 extends Component {


    state = {
        pno: '',
        f_name: '',
        l_name: '',
        age: '',
        gender: '',
        notes: '',

    }

    componentDidMount() {
        this.setState({
            pno: '',
            f_name: '',
            l_name: '',
            age: '',
            gender: '',
            notes: '',

        });
    }

    handleSubmit= (userdata) => {

        API.setPage1(userdata)
            .then((res) => {

                if (res.status === 'true') {
                    this.setState({
                        profile: "Profile setup Successfull..!!",
                    });

                } else if (res.status === 'false') {
                    this.setState({

                        profile: "Profile setup Failed"
                    });
                }
            });
    }




    render() {
        return (
            <div>


                <ul>
                    <li><p>Health Camp SPA</p></li>
                    <Link to="/page3"><li style={{float:'right'}}><a>Reports</a></li></Link>
                    <Link to="/page2"><li style={{float:'right'}}><a>Health Vitals</a></li></Link>

                    <Link to="/"><li style={{float: 'right',backgroundColor: '#3878e0', color: 'white'}}><a>Demographics</a></li></Link>

                </ul>

                <div className="info-section">
                    <h6>Patient ID:</h6>
                    <input type="number" name="pno" id="pno" required
                           onChange={(event)=>{
                               this.setState({
                                   pno:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>First Name:</h6>
                    <input type="text" name="f_name" id="f_name" required
                           onChange={(event)=>{
                               this.setState({
                                   f_name:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Last Name:</h6>
                    <input type="l_name" name="l_name" id="l_name" required
                           onChange={(event)=>{
                               this.setState({
                                   l_name:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Age:</h6>
                    <input type="age" name="age" id="age" required
                           onChange={(event)=>{
                               this.setState({
                                   age:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Gender:</h6>
                    <input type="gender" name="gender" id="gender" required
                           onChange={(event)=>{
                               this.setState({
                                   gender:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Notes:</h6>
                    <input type="notes" name="notes" id="notes" required
                           onChange={(event)=>{
                               this.setState({
                                   notes:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />
                    <button onClick={() =>  this.handleSubmit(this.state)} className="btn btn-success">SUBMIT</button>

                </div>


                <div className="photo-section">
                    Photo:<br /><br />
                    <div style={{ border: "1px solid", marginLeft: '125px', width:'150px'}} >
                    <img src={unknown} style={{ height: '125px', width: '125px', marginLeft: '0px'}} />
                    </div><br />

                    <input type="file" name="file" style={{ marginLeft: '125px'}} />
                </div>







            </div>
        )
    }
}



export default Page1;
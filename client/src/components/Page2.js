import React, {Component} from 'react';
import * as API from '../api/API';
import {Link} from 'react-router-dom';
import './Design.css';


class Page2 extends Component {


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
            height: '',
            weight: '',
            bt: '',
            pr: '',
            bp: '',

        });
    }

    handleSubmit= (userdata) => {

        API.setPage2(userdata)
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
                    <Link to="/page2"><li style={{float:'right',backgroundColor: '#3878e0',color: 'white'}}><a>Health Vitals</a></li></Link>

                    <Link to="/"><li style={{float: 'right'}}><a>Demographics</a></li></Link>

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

                    <h6>Height:</h6>
                    <input type="text" name="height" id="height" required
                           onChange={(event)=>{
                               this.setState({
                                   height:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Weight:</h6>
                    <input type="text" name="weight" id="weight" required
                           onChange={(event)=>{
                               this.setState({
                                   weight:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Blood Temperature:</h6>
                    <input type="text" name="bt" id="bt" required
                           onChange={(event)=>{
                               this.setState({
                                   bt:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Pulse Rate:</h6>
                    <input type="text" name="pr" id="pr" required
                           onChange={(event)=>{
                               this.setState({
                                   pr:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />

                    <h6>Blood Pressure:</h6>
                    <input type="text" name="bp" id="bp" required
                           onChange={(event)=>{
                               this.setState({
                                   bp:event.target.value,
                                   type:true
                               });

                           }}/><br /><br />
                    <button onClick={() =>  this.handleSubmit(this.state)} className="btn btn-success">SUBMIT</button>

                </div>

                <div className="photo-section">

                    <h6> Medications:</h6><br />
                    <textarea rows="4" cols="35" id="medication"></textarea>

                    <h6>Notes:</h6><br />
                    <textarea rows="4" cols="35" id="notes1"></textarea>
                </div>




            </div>
        )
    }
}



export default Page2;
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


class StartPage extends Component{

    redirectURL = (url) => {
        debugger;
        this.props.history.push(url);

    }

    render(){
        return(
            <div>


                <Route exact path="/" render={() => (
                    <div>
                        <Page1 redirectURL={this.redirectURL} />

                    </div>
                )}/>

                <Route exact path="/page2" render={() => (
                    <div>
                        <Page2 redirectURL={this.redirectURL} />
                    </div>
                )}/>

                <Route exact path="/page3" render={() => (
                    <div>
                        <Page3 redirectURL={this.redirectURL} />
                    </div>
                )}/>



            </div>
        );
    }




}

export default withRouter(StartPage);
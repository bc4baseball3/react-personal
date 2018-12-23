import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1 className="text">Brendan Carpenter</h1>
                            <h5 className="text">Full Stack Web Developer</h5>
                            <div className="skill-icons">
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-css3"></i>
                                <i className="fab fa-js"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-adobe"></i>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}

export default Landing;

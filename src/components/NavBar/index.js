import React, { Component } from 'react';

import './style.css';

export default class NavBarComponent extends Component {


    render() {
        console.log("Rendered navbar");
        // const { className, ...props } = this.props;
        return (
                <h1>
                    Smart Note NavBar
                 </h1>
        );
    }
}

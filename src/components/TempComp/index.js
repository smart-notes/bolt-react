import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import fetch from 'node-fetch';

import People from '../../person';

import './style.css';

export default class TempComponent extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}
  constructor(props) {
    super(props);
    this.state = {
      peeps: []
    };
  }
  
  componentDidMount() {
    let self = this;
    fetch('http://localhost:4444/people/', {
      method: 'GET',
    }).then(function(res) {
     return res.json();
    }).then(function(json) {
     let peeps = new People(json);
     let result = (peeps.ok && peeps.people) || [];
     self.setState({peeps: result});
    }).catch(function(err) {
        console.log(err);
    });
    }

  render() {
    const { className, ...props } = this.props;

    return (
      <div className={classnames('Temp', className)} {...props}>
        <h1>
          TempGetter
        </h1>
        <section>
          {
            this.state.peeps.map((person, idx) => {
              return (<div key={idx}>
                <h3>First: {person.firstname}</h3>
                <h3>Last: {person.lastname}</h3>
                </div>)
            })
            
          }
        </section>
      </div>
    );
  }
}

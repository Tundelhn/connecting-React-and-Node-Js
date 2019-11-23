import React, { Component } from 'react';
import './customers.css';
export class Customers extends Component {
  constructor(props) {
    super();
    this.state = {
      customers: []
    };
  }
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log('customers fetched', customers)
        )
      );
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.name} {customer.lastname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;

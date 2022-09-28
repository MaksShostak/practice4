import React, { Component } from 'react';
import { ref, set } from 'firebase/database';
import { database } from 'services/firebase';
import { v4 as uuidv4 } from 'uuid';

const INITIAL = { name: '', phone: '', email: '' };

export default class FormPost extends Component {
  state = INITIAL;
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    console.log('asfasfa');
    e.preventDefault();
    try {
      const result = set(ref(database, 'users/' + uuidv4()), {
        username: this.state.name,
        useremail: this.state.email,
        userphone: this.state.phone,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState(INITIAL);
    }
  };
  render() {
    const { name, phone, email } = this.state;
    return (
      <div>
        <form
          action=""
          onSubmit={this.onSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <label>
            Name
            <input
              type="text"
              onChange={this.onHandleChange}
              value={name}
              name="name"
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              onChange={this.onHandleChange}
              value={phone}
              name="phone"
            />
          </label>
          <label>
            Email
            <input
              type="mail"
              onChange={this.onHandleChange}
              value={email}
              name="email"
            />
          </label>
          <button type="submit">add user</button>
        </form>
      </div>
    );
  }
}

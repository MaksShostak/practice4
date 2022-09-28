import React, { Component } from 'react';
import { database } from 'services/firebase';
import { ref, onValue, off } from 'firebase/database';
// import { off } from 'firebase/database';
const starCountRef = ref(database, 'users/');

export default class UserList extends Component {
  state = {
    users: [],
    listener: null,
  };
  componentDidMount() {
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      this.setState({ users: Object.values(data) });
    });
  }
  componentWillUnmount() {
    off(starCountRef);
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <ul>
          {users.map((el, index) => (
            <li key={index}>
              <p>{el.username}</p>
              <p>{el.userphone}</p>
              <p>{el.useremail}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

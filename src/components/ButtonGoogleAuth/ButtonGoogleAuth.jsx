import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { Component } from 'react';
import { toast } from 'react-toastify';

const provider = new GoogleAuthProvider();

const auth = getAuth();

export class ButtonGoogleAuth extends Component {
  state = {
    user: null,
  };
  componentDidUpdate(_, prevState) {
    if (prevState.user !== this.state.user) {
      localStorage.setItem('userInfo', JSON.stringify(this.state.user));
    }
  }
  componentDidMount() {
    const parsed = JSON.parse(localStorage.getItem('userInfo'));
    console.log(parsed);
    if (parsed === null) {
      return;
    }
    this.setState({ user: parsed });
  }

  handleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        this.setState({ user });
        toast.success(`Вітаю ${user.displayName} ви успішно залогінились`);
      })
      .catch(error => {
        toast.error('Щось пішло не так перезавантажте сторінку');
      });
  };

  handleLogOut = () => {
    signOut(auth)
      .then(() => {
        this.setState({ user: null });
        toast.info(
          `Вітаю ${this.state.user.displayName} ви успішно відписались`
        );
      })
      .catch(error => {
        toast.error('Щось пішло не так перезавантажте сторінку');
      });
  };

  render() {
    const { handleLogIn, handleLogOut } = this;
    const { user } = this.state;
    return (
      <>
        {!user ? (
          <button type="button" onClick={handleLogIn}>
            {'sign in with google'}
          </button>
        ) : (
          <button type="button" onClick={handleLogOut}>
            log out
          </button>
        )}
      </>
    );
  }
}

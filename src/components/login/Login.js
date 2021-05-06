import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../context/firebase';
import './login.scss';
import { Link, useHistory } from 'react-router-dom';

function Login() {    
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push('/browse');
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
   
    <div className="login">
      <form onSubmit={handleSignin} method="POST">
        <h1>Zaloguj się</h1>
        {error && <span className="error">{error}</span>}
        <input
          placeholder="Email address"
          value={emailAddress}
          onChange={({target}) => setEmailAddress(target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />
        <button type="submit" value="Wyślij" disabled={isInvalid}>Wyślij</button>
        <p>Nie masz jeszcze konta w serwisie Netflix ? <br></br> <Link className="link" to='/signup'>Zarejestruj się</Link></p>
        <p>Ta strona korzysta z zabezpieczeń Google reCAPTCHA, by upewnić sie, że nie jesteś botem. Dowiedz się więcej</p>
      </form>
    </div>
  );
}

export default Login;

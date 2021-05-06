import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';

import './signup.scss';

function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user.updateProfile({
          displayName: firstName,
        })
          .then(() => {
            history.push('/home');
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };


  return (

    <div className="login">
      <form onSubmit={handleSignup} method="POST">
        <h1>Zarejestruj się</h1>
        {error && <span className="error">{error}</span>}
        <input
          placeholder="Firsname"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" value="Wyślij" disabled={isInvalid}>Wyślij</button>
        <p>Posiadasz już konto na Netflixie ?<br></br> <Link className="link" to='/signin'>Zaloguj się</Link></p>
        <p>Ta strona korzysta z zabezpieczeń Google reCAPTCHA, by upewnić sie, że nie jesteś botem. Dowiedz się więcej</p>
      </form>
    </div>
  );
}

export default Signup;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

import { db } from '../firebase.config';

// icons
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password, name } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            className="emailInput"
            id="email"
            type="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
          />
          <input
            className="nameInput"
            id="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
          />
          <div className="passwordInputDiv">
            <input
              value={password}
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              onChange={onChange}
              id="password"
              placeholder="Password"
            />
            <img
              src={visibilityIcon}
              alt="show"
              className="showPassword"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>

            <button className="signUpButton">
              <ArrowRightIcon fill="#fff" width="37px" height="37px" />
            </button>
          </div>
        </form>

        {/* Google OAuth Component */}

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;

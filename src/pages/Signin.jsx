import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// icons
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate('/');
      }
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
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signInBar">
            <p className="signInText">Sign In</p>

            <button className="signInButton">
              <ArrowRightIcon fill="#fff" width="37px" height="37px" />
            </button>
          </div>
        </form>

        {/* Google OAuth Component */}

        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default Signin;

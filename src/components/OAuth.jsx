import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// icons
import GoogleIcon from '../assets/svg/googleIcon.svg';

const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const signWithGoogle = async () => {
    try {
      const auth = getAuth();

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google');
    }
  };
  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} </p>
      <button className="socialIconDiv" onClick={signWithGoogle}>
        <img className="socialIconImg" src={GoogleIcon} alt="google" />
      </button>
    </div>
  );
};

export default OAuth;

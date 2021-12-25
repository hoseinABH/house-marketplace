import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <>
      <h2>{user ? user.displayName : 'Not Logged In'}</h2>
    </>
  );
};

export default Profile;

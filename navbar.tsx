import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth';

export const Navbar = () => {
     const[user]=useAuthState(auth);

     const signUserOut = async () => {
        await signOut(auth)
     };



    return (
        <div className='navbar'>
            <div className='links'>
              <Link to="/"> Home </Link>
              {! user ? (<Link to="/login"> Login </Link>
              ) : (
              <Link to="/Createpost"> Create post </Link>
              ) }
            </div>
            <div className='user'>
                {user &&(
                    <>
                       <p>{user?.displayName}</p>
                       <img src = {user?.photoURL || ""} width="20" height = "20"/>
                       <button onClick={signUserOut}>Log out</button>
                    </>
                )}
            </div>
        </div>

    );
};
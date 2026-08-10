import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext); // this user is the one we created in UserContextProvider.jsx and we are accessing it here using useContext hook.
    console.log(user);

    return(
        <div className='mt-10 font-mono'>
            <p className='text-4xl text-white font-semibold'>{user ? `Hello, ${user.username}` : "Login Please"}</p>
        </div>
    )
}

export default Profile
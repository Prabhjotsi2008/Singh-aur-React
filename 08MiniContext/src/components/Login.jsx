import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext); // this setUser is the one we created in UserContextProvider.jsx and we are accessing it here using useContext hook.

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(username,password);
        if (!username || !password){ // validation for username and password
          // console.log("null applied");
          setUser(null);
          return;
        }
        setUser({username,password});
    }

    

  return (
    <div className='flex flex-col items-center gap-y-6 pt-5 font-mono text-white'>
        <h2 className='font-bold text-2xl font-mono'>Login</h2>
        <input type="text" placeholder='Enter username' className='bg-gray-700 px-4 py-2 rounded-md outline-none' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder='Enter Password' className='bg-gray-700 px-4 py-2 rounded-md outline-none' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 active:bg-green-600' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
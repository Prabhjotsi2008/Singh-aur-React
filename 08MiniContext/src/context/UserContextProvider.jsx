import React, {useState} from 'react';
import UserContext from './UserContext';

function UserContextProvider({children,name}) {
    const [user,setUser] = useState(null);

    // console.log(user);

    console.log(children) // this comes from App.jsx where we have wrapped the Login and Profile components inside the UserContextProvider component 

    console.log(name); // this is just for fun, signifying that this is a prop passed manually to the provider component and can be accessed here. It is not related to the context API.

    return (
    // providing data to the context and the Components which are wrapped inside the provider can access this data using useContext hook.
    /* these chidren are the components which are wrapped inside the provider and they can access the data provided by the provider using useContext hook. */
    <UserContext.Provider value={{user,setUser}}> 
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider
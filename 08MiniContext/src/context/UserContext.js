import { createContext } from "react";

const UserContext = createContext(); // it creates an empty context object which can be used to share data across components without passing props down manually at every level.

export default UserContext;
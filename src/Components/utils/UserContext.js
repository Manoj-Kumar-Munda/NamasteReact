import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Mason Kane",
        email : "dummy@gmail.com",
    }
});

export default UserContext;
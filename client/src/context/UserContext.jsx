import { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export const useUserContext = () => {
    return useContext(UserContext);
}

const UserContextProvider = ({children}) => {

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
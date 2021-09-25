import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
          setIsLoggedIn(true);
        }
      }, []);


    const loginHandler = () => {
        localStorage.setItem('LoggedIn', '1');
        setIsLoggedIn(true);
    }

    const logoutHandler = () => {
        localStorage.removeItem('LoggedIn');
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{isLoggedIn: isLoggedIn, 
                    onLogout: logoutHandler, 
                    onLogin: loginHandler,
                   }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
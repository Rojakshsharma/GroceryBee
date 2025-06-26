import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = useMemo(
    () => ({
      navigate,
      user,
      setUser,
      isSeller,
      setIsSeller,
      showUserLogin,
      setShowUserLogin,
    }),
    [navigate, user, isSeller, showUserLogin]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

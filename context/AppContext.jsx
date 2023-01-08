import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children, initialData={}}) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    if (initialData.menuData) setMenuData(initialData.menuData);
  }, [initialData])

  return (
    <AppContext.Provider
      value={{
        menuData,
        setMenuData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

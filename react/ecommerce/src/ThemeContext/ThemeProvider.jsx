import React, { createContext, useState } from 'react'

const CreateTheme = createContext(null)

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState("light")

    function toggleTheme(){

        setTheme((preTheme => preTheme == 'light' ? 'dark' : 'light'))
        // if(theme == 'light'){
        //     setTheme('dark')
        // }else{
        //     setTheme('light')
        // }
    }

  return (
    <CreateTheme.Provider value={{theme, toggleTheme}}>
      {children}
    </CreateTheme.Provider>
  )
}

export {ThemeProvider, CreateTheme}

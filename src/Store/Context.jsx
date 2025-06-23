import { createContext, useState } from "react";

export const linkedinContext = createContext();

export const ContextProvider =({children})=>{
  
    // for form data 
    const [formdata , setFormdata] = useState({
      fullName : "OM PRAKASH VISHWAKARMA",
      Pronouns : "he/him",
      Headline : "",
      Education : "",
      Location : "",
    
    });


    const handleChange =(e)=>{
        const{name, value} = e.target;
        setFormdata((prev)=>(
          {
            ...prev,
            [name] : value,
          }
        ))
      }

      const handleFormSubmit =(e)=>{
        e.preventDefault();
      }

    //   for dark and light mode 

    const [mode, setMode] = useState(false);

    const handleTheme =()=>{
       setMode(!mode); 
    }
    
   
    const objValue = {
      formdata,
      setFormdata,
      handleChange,
      handleFormSubmit,
      handleTheme,
      mode,
    
    }
     
    return (

        <linkedinContext.Provider value={objValue}>{children}</linkedinContext.Provider>
    )
}
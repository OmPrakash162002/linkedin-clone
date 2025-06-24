import { createContext, useEffect, useState } from "react";

export const linkedinContext = createContext();

export const ContextProvider =({children})=>{
  
    // for form data 
    const [formdata , setFormdata] = useState({
      fullName : "",
      Pronouns : "",
      Headline : "",
      Education : "",
      Location : "",
    
    });

    const[submit, setSubmit] = useState({
      fullName : "OM PRAKASH VISHWAKARMA ",
      Pronouns : "He/Him",
      Headline : "Skilled in React JS | Passionate About Building Interactive and Scalable Frontend Web Applications | MCA'25",
      Education : "Guru Ghasidas University",
      Location : "Bilaspur chhattisgarh, India",
    
    });


  //  for pursisting the form data when page refresh

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('formData'));
    if(data){
      setSubmit(data);
    }
  },[])


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
        localStorage.setItem('formData', JSON.stringify(formdata));
        setSubmit(formdata);

      }


    //   for dark and light mode 

    const [mode, setMode] = useState(false);

    const handleTheme =()=>{
       setMode(!mode); 
    }
    

    // for profile image 

    const[editImage, setEditImage]   = useState(false);

    const handleProfileImage =()=>{
            setEditImage(!editImage);
    }
    
    const [image, setImage] = useState(null);

  // Load image from localStorage when the component mounts
  useEffect(() => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result;
        setImage(base64Image);
        localStorage.setItem("savedImage", base64Image); // save to localStorage
      };

      reader.readAsDataURL(file);
    }
  };
    
   
    const objValue = {
      formdata,
      setFormdata,
      handleChange,
      handleFormSubmit,
      handleTheme,
      mode,
      submit,
      handleProfileImage,
      editImage,
      handleImageChange,
      image,
    
    }
     
    return (

        <linkedinContext.Provider value={objValue}>{children}</linkedinContext.Provider>
    )
}
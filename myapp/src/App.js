import React, { useState } from 'react';

const App = () => {

  const [headAdd, setHead] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

  //  const value = event.target.value;
  //  const  name = event.target.name;

   const {value, name} = event.target;

   setHead((preValue) => {

      return {
          ...preValue,
          [name] : value
      }


      // if(name === 'fName') {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone:preValue.phone

      //   }
      //  }else if(name === 'lName') {
      //   return {
      //    fname: preValue.fname,
      //    lname: value,
      //    email: preValue.email,
      //    phone:preValue.phone
      //   } 
      //  }else if(name === 'email') {
      //   return {
      //    fname: preValue.fname,
      //    lname: preValue.lname,
      //    email: value,
      //    phone:preValue.phone
       
      //   } 
      //  }else if(name === 'phone') {
      //   return {
      //    fname: preValue.fname,
      //    lname: value,
      //     email: preValue.email,
      //     phone:value
       
      //   } 
      //  }
    });

   };

  const Add = (event) => {
     alert('Form Submitted');
  };
  return(
    <>
    
    <div>
    <form onSubmit = {Add} method = 'POST'>
        <h1 > Hello <span> ❣️</span>,
        {headAdd.fname} {headAdd.lname}  </h1>
        <p>{headAdd.email}</p>
        <p>{headAdd.phone}</p>
        <input type ='text' 
        placeholder = 'Enter Your First Name'
        onChange={inputEvent}
        name='fname'
        value={headAdd.fname} /><br/>
        <input type ='text'
        placeholder = 'Enter Your Last Name'
        onChange={inputEvent} name='lname'
        value={headAdd.lname} /><br/>
        <input type='email'
        placeholder = 'Enter Your email'
        onChange={inputEvent} name='email'
        value={headAdd.email} autoComplete='off' /><br/>
        <input type ='text'
        placeholder = 'Enter Your Phone Number'
        onChange={inputEvent}
        name='phone' value={headAdd.phone} /><br/>

        <button type = "submit" onClick = {Add} >Submit Me ☑️</button>
      </form>
    </div>
    </>
  )
  } 

export default App;
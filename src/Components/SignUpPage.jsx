import React, {useState} from 'react'
import SignUpForm from './SignUpForm';


const SignUpPage  = () => {
  
        const [title,setTitle] = useState('')
        const [fname,setFname] = useState('')
        const [lname,setLname] = useState('')
        const [email,setEmail] = useState('')
        const [date,setDate] = useState('')
        const [phone,setPhone] = useState('')
        const [gender,setGender] = useState('')
        
      
        const showTitle = title => {
          setTitle(title)
        }
      
        const showFname = fname => {
          setFname(fname)
        }
      
        const showLname = lname => {
          setLname(lname)
        }
      
        const showEmail = email => {
          setEmail(email)
        }
      
        const showDate = date => {
          setDate(date)
        }
      
        const showPhone = phone => {
          setPhone(phone)
        }
      
        const showGender = gender => {
          setGender(gender)
        }


    return (
      <div class='form'>
        <h1>Sign Up</h1>
        <p> </p>
        <div className='signuparea'>
          <h3>Title        : {title}</h3>
          <h3>First Name   : {fname}</h3>
          <h3>Last Name    : {lname}</h3>
          <h3>Email        : {email}</h3>
          <h3>Date of Birth: {date}</h3>
          <h3>Phone        : {phone}</h3>
          <h3>Gender       : {gender}</h3>        
        </div> 
        <SignUpForm submitTitle={showTitle} submitLname = {showLname} submitFname = {showFname} submitDate = {showDate} submitEmail={showEmail} submitPhone={showPhone} submitGender={showGender} />
 
      </div>  
)};

export default SignUpPage;

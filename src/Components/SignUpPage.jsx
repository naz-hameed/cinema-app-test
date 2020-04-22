import React, {useState} from 'react'
import SignUpForm from './SignUpForm';


const SignUpPage  = () => {
  
        const [title,setTitle] = useState('not given')
        const [fname,setFname] = useState('not given')
        const [lname,setLname] = useState('not given')
        const [email,setEmail] = useState('not given')
        const [date,setDate] = useState('not given')
        const [phone,setPhone] = useState('not given')
        const [gender,setGender] = useState('not given')
        
      
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
        <div>
        <h3>Title        : {title}</h3>
      <h3>First Name   : {fname}</h3>
      <h3>Last Name    : {lname}</h3>
      <h3>Email        : {email}</h3>
      <h3>Date of Birth: {date}</h3>
      <h3>Phone        : {phone}</h3>
      <h3>Gender       : {gender}</h3>
      <SignUpForm submitTitle={showTitle} submitLname = {showLname} submitFname = {showFname} submitDate = {showDate} submitEmail={showEmail} submitPhone={showPhone} submitGender={showGender} />
      </div>    
)};

export default SignUpPage;
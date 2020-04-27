import React, {useState} from 'react'
import SignUpForm from './SignUpForm';


const SignUpPage  = () => {
  
        const [title,setTitle] = useState('-')
        const [fname,setFname] = useState('-')
        const [lname,setLname] = useState('-')
        const [email,setEmail] = useState('-')
        const [date,setDate] = useState('-')
        const [phone,setPhone] = useState('-')
        const [gender,setGender] = useState('-')
        
      
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
        <SignUpForm submitTitle={showTitle} submitLname = {showLname} submitFname = {showFname} submitDate = {showDate} submitEmail={showEmail} submitPhone={showPhone} submitGender={showGender} />
        <br />
        <br />
        <div className='signuparea'>
          <table>
            <tr>
              <td>Title:</td>
              <td>{title}</td>
            </tr>
            <tr>
              <td>First Name:</td>
              <td>{fname}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{lname}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>Date of Birth:</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>{phone}</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>{gender}</td>
            </tr>
          </table>     
        </div> 
        <br />
      </div>  
)};

export default SignUpPage;

import React, { useState, useEffect } from "react";
import SignUpForm from "./SignUpForm";
import PostCustomer from "./PostCustomer";
import axios from "axios";






const SignUpPage = () => {
  const [title, setTitle] = useState("-");
  const [fname, setFname] = useState("-");
  const [lname, setLname] = useState("-");
  const [email, setEmail] = useState("-");
  const [date, setDate] = useState("-");
  const [phone, setPhone] = useState("-");
  const [gender, setGender] = useState("-");
  const [thanks, setThanks] = useState("");


  const postSubscriber = () => {
    const subscriber = {
      "title": "Mr",
      "first_name": {fname},
      "last_name": "Flintstonenew8",
      "email": "fredflintstone@gmail.com",
      "dob": "1988-04-28",
      "phone_number": "07777777777",
      "sex": "Male"
    }
    
    axios.post('/subscribers', subscriber).catch(error => {
      alert("We have a problem")
    });
  }

  useEffect(() => {
    postSubscriber()

  })

  const showTitle = (title) => {
    setTitle(title);
  };

  const showFname = (fname) => {
    setFname(fname);
  };

  const showLname = (lname) => {
    setLname(lname);
  };

  const showEmail = (email) => {
    setEmail(email);
  };

  const showDate = (date) => {
    setDate(date);
  };

  const showPhone = (phone) => {
    setPhone(phone);
  };

  const showGender = (gender) => {
    setGender(gender);
  };

  const showThanks = (thanks) => {
    setThanks(thanks);
  };





  return (
    <div className="form">
      <h1>Sign Up</h1>

      <SignUpForm
        submitTitle={showTitle}
        submitLname={showLname}
        submitFname={showFname}
        submitDate={showDate}
        submitEmail={showEmail}
        submitPhone={showPhone}
        submitGender={showGender}
        submitThanks={showThanks}
      />
      
      <PostCustomer params = {title}/>

      <br />
      <div className="signuparea">

        <h3>{thanks}</h3>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
};

export default SignUpPage;

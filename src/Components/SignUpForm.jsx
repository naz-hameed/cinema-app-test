import React, { useState } from "react";
import "react-day-picker/lib/style.css";
import Popup from "reactjs-popup";

const SignUpForm = (props) => {
  const [title, setTitle] = useState("Mrs");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(``);

  const handleFnameChange = (event) => {
    setFname([event.target.value]);
  };

  const handleLnameChange = (event) => {
    setLname([event.target.value]);
  };

  const handleTitleChange = (event) => {
    setTitle([event.target.value]);
  };

  const handleEmailChange = (event) => {
    setEmail([event.target.value]);
  };

  const handleDateChange = (event) => {
    setDate([event.target.value]);
  };

  const handlePhoneChange = (event) => {
    setPhone([event.target.value]);
  };

  const handleGenderChange = (event) => {
    setGender([event.target.value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //stops browser clearing form
    props.submitFname(fname);
    props.submitLname(lname);
    props.submitTitle(title);
    props.submitEmail(email);
    props.submitDate(date);
    props.submitPhone(phone);
    props.submitGender(gender);
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <table>
        <tr>
          <td>
            {" "}
            <label id="title"> Title *: </label>{" "}
          </td>

          <td>
            <select value={title} onChange={handleTitleChange}>
              <option value="mrs">Mrs</option>
              <option value="mr">Mr</option>
              <option value="dr">Dr</option>
              <option value="miss">Miss</option>
              <option value="sir">Sir</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            {" "}
            <label id="firstname"> First Name* : </label>{" "}
          </td>

          <td>
            <input
              type="fname"
              value={fname}
              onChange={handleFnameChange}
              required
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            {" "}
            <label id="lastname">Last Name* : </label>{" "}
          </td>

          <td>
            <input
              type="lname"
              value={lname}
              onChange={handleLnameChange}
              required
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            <label id="emailid">Email: </label>
          </td>

          <td>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            {" "}
            <label id="dob">Date of Birth: </label>{" "}
          </td>

          <td>
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              required
            ></input>
          </td>
        </tr>

        <tr>
          <td>
            {" "}
            <label id="phonenum">Phone : </label>
          </td>
          <td>
            {" "}
            <input
              type="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            ></input>
          </td>
        </tr>

        <tr>
          <td> </td>
          <td>
            <label id="male-btn">
              <input
                type="radio"
                value="male"
                name="gender"
                onChange={handleGenderChange}
                required
              />
              Male
            </label>
            &nbsp;
            <label id="female-btn">
              <input
                type="radio"
                value="female"
                name="gender"
                onChange={handleGenderChange}
                required
              />
              Female
            </label>
          </td>
        </tr>

        <tr>
          <td> </td>
          <td>
            <Popup
              trigger={
                <button id="signup-btn" className="button">
                  Sign me up !
                </button>
              }
              modal
              closeOnDocumentClick
            >
              <span> Thanks for the sign-up! </span>
            </Popup>
          </td>
        </tr>
      </table>
    </form>
  );
};

export default SignUpForm;

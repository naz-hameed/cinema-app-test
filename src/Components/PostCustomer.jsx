import React, { useState } from "react";
import axios from "axios";


const PostCustomer  = (params) => {

const [entry, setEntry] = useState(null);

const getEntry = async (params) => {
  //let result = await axios.post('/customers');
 // console.log(result.data || []);
 // setEntry(result.data || []);
 console.log("inside post customer");
  console.log(params.title);
  
}

return(
<h1>{params.title}</h1>
);

};

export default PostCustomer;
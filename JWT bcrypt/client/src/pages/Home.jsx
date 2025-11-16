import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Home = () => {
  // now authentication function where you are login or not which checks token if it is right then you can LOGIN. 

  const userAuthenticate = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/students/userauth`;
    const token = localStorage.getItem("token");

    // 51 : 30 
    if (token) {
      const response = await axios.post(api, {}, {

      });
    }

    else {
      console.log("No token has been found in Browser !");
    }

  }

  useEffect(() => {
    userAuthenticate();
  }, [])

  return (
    <>
      <div>

        <h1> Welcome to home page.. </h1>
      </div>
    </>
  )
}

export default Home; 

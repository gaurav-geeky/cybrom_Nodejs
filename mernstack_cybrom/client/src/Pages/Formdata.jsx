import React, { useState } from 'react'
import axios from "axios"; 


function Form() {
    let [data, setData] = useState({});

    let handleinput = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value }) 
    }

    let handelSubmit = async (e) => {
        e.preventDefault()
        let api = "http://localhost:9500/save" 
        const resp = await axios.post(api, data); 
        console.log(resp); 
    }

    return (
        <>
            <div className='min-h-[90vh] border-1 border-black  ' >

                <form className='border-1 w-100 m-5'  onSubmit={handelSubmit} >
                    <p className='m-2'>
                        <label htmlFor="">Name : </label>
                        <input className='border-1 pl-1' name='name' type="text" onChange={handleinput} />
                    </p>
                    <p className='m-2'>
                        <label htmlFor="">Roll No. : </label>
                        <input className='border-1 pl-1' name='rollno' type="text" onChange={handleinput} />
                    </p>
                    <p className='m-2'>
                        <label htmlFor="">City : </label>
                        <input className='border-1 pl-1' name='city' type="text" onChange={handleinput} />
                    </p>
                    <p className='m-2'>
                        <label htmlFor="">Fees : </label>
                        <input className='border-1 pl-1' name='fees' type="text" onChange={handleinput} />
                    </p>

                    <input className=' bg-amber-200 p-2 rounded-4xl' type="submit" />

                </form>

            </div>
        </>
    )
}

export default Form

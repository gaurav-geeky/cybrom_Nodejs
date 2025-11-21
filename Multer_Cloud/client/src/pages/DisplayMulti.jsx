import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

const DisplayMulti = () => {
    const [mydata, setMydata] = useState([]);

    const loadData = async () => {
        let api = `${import.meta.env.VITE_BACKEND_URL}/multer/displaymulti`;
        const response = await axios.get(api);
        console.log(response.data.msg);
        setMydata(response.data.info)
    }

    useEffect(() => {
        loadData();
    }, []);

    // get data from model using map
    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                    <td>
                        <img src={key.defaultImage} style={{ width: "100px", height: "80px" }} />
                    </td>
                    <td> {key.name} </td>
                    <td> {key.email} </td>
                    <td> {key.subject} </td>
                </tr>
            </>
        )
    })


    return (
        <>
            <div>

                <h1> showing data of multiple upload 1st file save in cloud then get them in mongo db then displaying here..</h1>

                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th> Email</th>
                        <th> Subject</th>
                    </tr>
                    {ans}
                </table>

            </div>
        </>
    )
}

export default DisplayMulti;

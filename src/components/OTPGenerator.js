import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function OTPGenerator(props) {
    const [str,setStr] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    useEffect(() =>{
        setStr(shuffle());
    },[]);

    const generateNew = ()=>{
        setStr(shuffle());
    }

    const shuffle = ()=>{
        var myS = '';
        for(let i = 0;i< 4;i++){
           let v = Math.random();
            myS += Math.floor(v*10);
        }
        return myS;
    }

    const sendMail = (e)=>{

        var template_params  = {
            'to_name': 'Chandan',
            'from_name' : 'Akasha Airline',
            'company_name' : 'Akasha Airline LLC',
            'message': 'Your OTP is: '+str+''

        };
        
        console.log(template_params);
        emailjs.send(
            process.env.REACT_APP_EMAILJS_Service_ID, 
            process.env.REACT_APP_EMAILJS_Template_ID, 
            template_params,
            process.env.REACT_APP_EMAILJS_User_ID)
        .then((result) => {
            console.log(result);
            setResponseMessage('Mail send sucessfully'); 
        }, (error) => {
            setResponseMessage('Mail Not Send');
            console.log(error.text);
        });

    }

    return (
        <div className='otp-geerator-container'>
            <p>Copy this OTP and paste in form below:</p>
            <div className='otp'>{str}</div>
            <span className='generate-link' onClick={generateNew}>Generate New</span>
            <button onClick={sendMail}>Send in Mail</button>
            <span>{responseMessage}</span>
        </div>
    );
}

export default OTPGenerator;
import React, { useState, useEffect, useRef } from 'react'

export default function OtpForm() {
    const [otp,setOtp] = useState();
    const ref1= useRef(null);
    const ref2= useRef(null);
    const ref3= useRef(null);
    const ref4 = useRef(null);

    useEffect(()=>{

    },[]);

    const distributeCode = (e)=>{
        e.preventDefault();
        var str = e.clipboardData.getData("Text");
        setOtp(str);
        localStorage.setItem('otp',otp);
        var digits = str.split('');
        ref1.current.value = digits[0];
        ref2.current.value = digits[1];
        ref3.current.value = digits[2];
        ref4.current.value = digits[3];
    }
    const verifyOTP = () =>{
        var newOTP = "".concat(ref1.current.value,ref2.current.value,ref3.current.value,ref4.current.value);
        alert(newOTP);
    }

    const goNext = (e)=>{
        const active = document.activeElement;
        if (active?.nextElementSibling) {
            (active.nextElementSibling).focus();
        }
    }
    const clearFields = ()=>{
        ref1.current.value = '';
        ref2.current.value = '';
        ref3.current.value = '';
        ref4.current.value = '';
        ref1.current.focus();
    }

  return (
    <div className='otpcode-container'>
        <p className='form-title'>Verify OTP</p>
        <p className='info'>Please check your mailbox for OTP and enter the OTP here</p>
        <div className='input-fields'>
        <span className='clearFields'>&nbsp;</span>
            <input type="text" ref={ref1} onPaste={distributeCode} onKeyUp={goNext} maxLength={1} />&nbsp;
            <input type="text" ref={ref2} onPaste={distributeCode} onKeyUp={goNext} maxLength={1} />&nbsp;
            <input type="text" ref={ref3} onPaste={distributeCode} onKeyUp={goNext} maxLength={1} />&nbsp;
            <input type="text" ref={ref4} onPaste={distributeCode} onKeyUp={goNext} maxLength={1} /> <span onClick={clearFields} className='clearFields'>X</span>
        </div>
        <div className='btn-cont'>
            <button onClick={verifyOTP}>Verify</button>
        </div>
    </div>
  )
}

import React, { useState } from 'react'

const regsterHook = () => {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [loading , setLoading] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }    
    const onChangeEmail = (e) => {
        setName(e.target.value);
    }    
    const onChangePhone = (e) => {
        setName(e.target.value);
    }    
    const onChangePassword = (e) => {
        setName(e.target.value);
    }    
    const onChangeConfirmPassword = (e) => {
        setName(e.target.value);
    }    



    return [name , email , phone , password , confirmPassword , loading ,onChangeName ,onChangeEmail ,onChangePhone ,onChangePassword ,onChangeConfirmPassword ];

}

export default regsterHook
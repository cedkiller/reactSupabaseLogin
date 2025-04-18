import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function User () {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');
    const userType = localStorage.getItem('userType');

    const back = async () => {
        navigate('/');
    }

    return(
        <>
        <p>{userName}</p>
        <p>{userType}</p>
        <button onClick={() => back()}>back</button>
        </>
    );
}

export default User;
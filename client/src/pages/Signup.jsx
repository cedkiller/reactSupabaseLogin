import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import supabase from '../config/config';
import '../assets/css/Style.css';

function Signup () {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [type, setType] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        const hashPass = await bcrypt.hash(pass, 10);

        const {data, error} = await supabase.from('users').insert({user_name:name, user_email:email, user_password:hashPass, user_type:type});

        if (error) {
            Swal.fire({
                title:'Error Signing Up',
                text:'There has been error in signing up',
                icon:'error'
            }).then((result) => {
                if (result.isConfirmed) {
                    setName("");
                    setEmail("");
                    setPass("");
                    setType("");
                    window.location.reload();
                }
            })
        }

        else {
            Swal.fire({
                title:'Account Registered',
                text:'Your account has been registered',
                icon:'success'
            }).then((result) => {
                if (result.isConfirmed) {
                    setName("");
                    setEmail("");
                    setPass("");
                    setType("");
                    navigate('/');
                }
            })
        }
    }

    const login = async () => {
        navigate('/');
    }

    return(
        <>
        <br />

        <div style={{display:'flex', justifyContent:'center'}}>
            <div className='div'>
                <h1 style={{textAlign:'center', fontSize:20, fontWeight:'bold'}}>Sign Up</h1>
                <br />

                <form onSubmit={submit}>
                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                        <input type="text" placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'/>
                        </div>
                    </div>
                    <br />

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" placeholder='Enter a email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                        </div>
                    </div>
                    <br />

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className='form-control'/>
                        </div>
                    </div>
                    <br />

                    <div className="mb-3 row">
                        <label className="col-sm-2 col-form-label">User Type</label>
                        <div className="col-sm-10">
                        <select onChange={(e) => setType(e.target.value)} className='form-control'>
                            <option value="" selected disabled>Select User Type</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        </div>
                    </div>
                    <br />

                    <button className='btn btn-primary w-100'>Sign Up</button>
                </form>
                <hr />

                <button className='btn btn-light w-100' onClick={() => login()}>Login</button>
            </div>
        </div>
        </>
    );
}

export default Signup;
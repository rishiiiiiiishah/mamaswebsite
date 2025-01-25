import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './login.css';
import axios from 'axios';
import { SiAxios } from 'react-icons/si';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('login-body');
        return () => {
            document.body.classList.remove('login-body');
        };
    }, []);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:4000/login',{
                email:email,
                password:password,

            },{
                headers:{
                    'Content-Type':'application/json',

                },
                withCredentials:true
            } );
               console.log("now logged in");
               navigate("/")
            
            // Assuming your backend sends a token upon successful login
            
        } catch (error) {
            console.error('Login Error:', error);
            // Add your login error handling here
        }
    };
    
    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:4000/signup',{
                name:name,
                email:email,
                password:password,

            },{
                headers:{
                    'Content-Type':'application/json',

                },
                withCredentials:true
            } );
               console.log("now signed in");
              setIsSignup(true)
            
        } 
    
        catch (error) {
            console.error('Signup Error:', error);
            // Add your signup error handling here
        }
        
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            handleSignup();
        } else {
            handleLogin();
        }
        // Optional: Reset form fields after submission
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <h2>{isSignup ? 'Signup' : 'Login'}</h2>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button type="submit" className="login-button">
                            {isSignup ? 'Sign up' : 'Login'}
                        </button>
                        <p className="signup-link">
                            {isSignup ? (
                                <>
                                    Already have an account?{' '}
                                    <Link to="#" onClick={() => setIsSignup(false)}>
                                        Login here
                                    </Link>
                                </>
                            ) : (
                                <>
                                    New user?{' '}
                                    <Link to="#" onClick={() => setIsSignup(true)}>
                                        Sign up here
                                    </Link>
                                </>
                            )}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

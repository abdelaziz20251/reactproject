import React, { useState } from "react";
import axios from "axios";
import { message } from 'antd';

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", user);
            console.log(response.data);
            if (response.status === 200) {
                console.log("Login successful", response.data);
                localStorage.setItem("token", response.data.accessToken);
                window.location.href = "/home"; 
            } else if (response.status === 401) {
                message.open({
                    type: 'error',
                    content: 'Invalid credentials',
                });
            } else {
                console.log("Login failed");
            }
                
        } catch (err) {
            console.error("Error during login:", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username"
                        placeholder="Username" 
                        value={user.username}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        value={user.password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded p-3 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white rounded p-3 w-full hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
//emilys
//emilyspass
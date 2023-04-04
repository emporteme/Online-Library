// pages/register.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { register } from '../../redux/reducers/authSlice';
import MainLayout from "@/components/MainLayout" // Main Layout

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register({ username, password }));
        router.push('/login');
    };

    return (
        <MainLayout>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </MainLayout>
    );
};

export default RegisterPage;

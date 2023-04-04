// pages/login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from '../../redux/reducers/authSlice';
import MainLayout from '@/components/MainLayout'; // Main Layout

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ username, password }));
        router.push('/');
    };

    return (
        <MainLayout>
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </MainLayout>
    );
};

export default LoginPage;

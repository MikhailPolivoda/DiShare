import React, { useState } from 'react';
import './Login.css';
import { authenticate } from '../api/api'; // Импортируйте функцию из api.js
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) { // Принимаем onLogin как пропс
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await authenticate(email, password);
            setResponse(result);
            setError(null);
            
            onLogin(); // Вызываем переданный onLogin для обновления состояния авторизации

            navigate('/'); // Перенаправляем пользователя на главную страницу
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-group flex-row">
                    <label htmlFor="email">Email</label>
                    <input 
                        className="input-login"
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="input-group flex-row">
                    <label htmlFor="password">Password</label>
                    <input 
                        className="input-login"
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button className = "buttonLogin" type="submit">Login</button>
            </form>
            {response && (
                <div className="response">
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="error">
                    <h3>Error:</h3>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
}

export default Login;

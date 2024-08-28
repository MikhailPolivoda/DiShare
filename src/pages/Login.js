import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import { authenticate } from '../api/api';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const storedAuth = sessionStorage.getItem('isAuthenticated');
        if (storedAuth === 'true') {
            onLogin(); 
            navigate('/');
        }
    }, [navigate, onLogin]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Выполняем аутентификацию и получаем результат
            const result = await authenticate(email, password);
            if (result && result.tokenId) {
                setResponse(result);
                setError(null);
                onLogin(); // Уведомление родительского компонента об успешной аутентификации
                navigate('/'); // Перенаправление на главную страницу
            } else {
                    throw new Error(result);
            }
        } catch (err) {
            // Обработка ошибок и вывод сообщения
            setError(err.message); // Устанавливаем сообщение ошибки
            setResponse(null);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
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
                <button className="buttonLogin" type="submit">Login</button>
            </form>
            {response && (
                <div className="response">
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="error">
                    <p>{error}</p> {/* Показываем только текст ошибки без заголовка */}
                </div>
            )}
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LoginForm } from '../../type/Common';
import '../../type/Common';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload: LoginForm = { username, password };

        const res = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST', 
            headers: { 
                'Content-Type':'application/json' 
            }, 
            body: JSON.stringify(payload), 
        });

        if (!res.ok) {
            throw new Error('Server error')
        }

        navigate('/board');
    };

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
            <div className='bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-sm'>
                <div className='text-center mb-6'>
                    <h1 className='text-xl font-semibold text-gray-900'>ログイン</h1>
                    <p className='text-sm text-gray-500 mt-1'>アカウントにサインインしてください</p>
                </div>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='block text-sm text-gray-600 mb-1' htmlFor=''>ユーザー名</label>
                        <input 
                            type='text' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            placeholder='ユーザー名' 
                            className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    </div>
                    <div>
                        <label className='block text-sm text-gray-600 mb-1' htmlFor=''>パスワード</label>
                        <input 
                            type='text' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder='パスワード' 
                            className='w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                    </div>
                    <button 
                        type='submit' 
                        className='w-full py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors'>
                        登録
                    </button>
                </form>
            </div>
        </div>
    );
}
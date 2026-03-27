import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './component/auth/LoginForm';
import SignupForm from './component/auth/SignupForm';
import BoardList from './component/board/BoardList';
import "./index.css"
import { useBoardList } from './api/SampleData';
import BoardForm from './component/board/BoardForm';
import BoardDetail from './component/board/BoardDetail';
import { AuthProvider } from './component/auth/AuthContext';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/signup' element={<SignupForm />} />
                    <Route path='/' element={<Navigate to='/board' replace />} />
                    <Route path='/board' element={<BoardList />} />
                    <Route path='/board/form' element={<BoardForm boardForm={ null }/>} />
                    <Route path='/board/:id' element={<BoardDetail/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App

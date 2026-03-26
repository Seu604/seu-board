import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './component/auth/LoginForm';
import SignupForm from './component/auth/SignupForm';
import BoardList from './component/board/BoardList';
import "./index.css"
import { sampleBoards, useBoardList } from './api/SampleData';

function App() {
    const { boardList, loading } = useBoardList();
    

    return (
        <BrowserRouter>
            <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/' element={<BoardList boardList={ boardList }  />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

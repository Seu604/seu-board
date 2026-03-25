import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm';
import BoardList from './component/BoardList';
import "./index.css"
import type { CommentResponse } from './type/Comment';
import type { BoardResponse } from './type/Board';

const sampleComments: CommentResponse[] = [
    { 
        id: 1, 
        content: 'content', 
        status: 'PUBLIC', 
        createdDate: '2024-03-25T10:30:00+09:00', 
        lastModifiedDate: '2024-03-25T10:30:00+09:00', 
        deletedDate: null, 
        boardId: 1, 
        authorId: 1, 
        authorUsername: 'testuser'
    }, 
    {
        id: 2, 
        content: 'content', 
        status: 'PUBLIC', 
        createdDate: '2024-03-25T10:30:00+09:00', 
        lastModifiedDate: '2024-03-25T10:30:00+09:00', 
        deletedDate: null, 
        boardId: 1, 
        authorId: 2, 
        authorUsername: 'otherTestuser'
    }, 
    {
        id: 3, 
        content: 'content', 
        status: 'PRIVATE', 
        createdDate: '2024-03-25T10:30:00+09:00', 
        lastModifiedDate: '2024-03-25T10:30:00+09:00', 
        deletedDate: null, 
        boardId: 1, 
        authorId: 3, 
        authorUsername: 'KimoiTestuser'
    }
]

const sampleBoards: BoardResponse[] = [
    {
        id: 1, 
        title: 'title', 
        content: 'content', 
        status: 'PUBLIC', 
        createdDate: '2024-03-25T10:30:00+09:00', 
        lastModifiedDate: '2024-03-25T10:30:00+09:00', 
        deletedDate: null, 
        authorId: 1, 
        authorUsername: 'testuser', 
        comments: sampleComments
    }, 
    {
        id: 2, 
        title: 'title', 
        content: 'content', 
        status: 'PUBLIC', 
        createdDate: '2024-03-25T10:30:00+09:00', 
        lastModifiedDate: '2024-03-25T10:30:00+09:00', 
        deletedDate: null, 
        authorId: 1, 
        authorUsername: 'testuser', 
        comments: sampleComments
    }
]

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/board' element={<BoardList boards={sampleBoards}  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

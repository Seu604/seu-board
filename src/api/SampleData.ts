import type { CommentResponse } from '../type/Comment';
import type { BoardResponse } from '../type/Board';
import { useEffect, useRef, useState } from 'react';

export const useBoardList = () => {
    const [ boardList, setBoardList ] = useState<BoardResponse[]>([]);
    const [ loading, setLoading ] = useState(true);

    const isFetched = useRef(false);

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        fetch(`http://localhost:8080/api/board`)
        .then(res => res.json())
        .then(data => { 
            setBoardList(data);
            setLoading(true);
        });
    });

    return { boardList, loading };
}

export const useBoardDetail = (boardId: string) => {
    const [ boardDetail, setBoardDetail ] = useState<BoardResponse>();
    const [ loading, setLoading ] = useState(true);

    const isFetched = useRef(false);

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        fetch(`http://localhost:8080/api/board/${boardId}`)
            .then(res => res.json())
            .then(data => { 
                setBoardDetail(data);
                setLoading(true); 
        });
    }, [boardId]);

    return { boardDetail, loading };
}

export const sampleComments: CommentResponse[] = [
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

export const sampleBoards: BoardResponse[] = [
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
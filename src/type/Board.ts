import type { CommentResponse } from "./Comment";

export type BoardRequest = {
    title: string;
    content: string;
}

export type BoardStatus = "PUBLIC" | "PRIVATE" | "DELETED"

export type BoardResponse = {
    id: number;
    title: string;
    content: string;
    status: BoardStatus;
    createdDate: string;
    lastModifiedDate: string;
    deletedDate: string | null;
    authorId: number;
    authorUsername: string;
    comments: CommentResponse[];
}


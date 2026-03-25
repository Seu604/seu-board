export type CommentRequest = {
    content: string;
}

export type CommentStatus = "PUBLIC" | "PRIVATE" | "DELETED"

export type CommentResponse = {
    id: number;
    content: string;
    status: CommentStatus;
    createdDate: string;
    lastModifiedDate: string;
    deletedDate: string | null;
    boardId: number;
    authorId: number;
    authorUsername: string;
}
import type { CommentResponse } from "./Comment";

// 登録・更新
export type BoardRequest = {
    title: string;
    content: string;
}

// ステータス
export type BoardStatus = "PUBLIC" | "PRIVATE" | "DELETED"

// 一覧
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

export type BoardStatusUpdateRequest = {
    status: BoardStatus;
}
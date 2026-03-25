
export type ErrorResponse = {
    field: string;
    message: string;
}

export type LoginRequest = {
    username: string;
    password: string;
}

export type LoginResponse = {
    id: number;
    username: string;
    status: string;
    role: string;
}
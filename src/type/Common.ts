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

export type SignupForm = {
    username: string;
    password: string;
    passwordConfirm: string;
}

export type LoginForm = {
    username: string;
    password: string;
}
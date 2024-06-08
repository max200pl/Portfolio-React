import { TokenResponse } from '@react-oauth/google';
import { baseQuery } from './api.helper';
import { SubmitSignUpFormValues } from '../../pages/Auth/AuthSignUp/AuthSignUp';
import { SubmitSignInFormValues } from '../../pages/Auth/AuthSignIn/AuthSignIn';

// const AUTH_API_BASE_URL = "http://localhost:8000/auth";
// const AUTH_API_BASE_URL = "/api/auth";

const AUTH_API_BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:8000/api/auth" : "https://portfolio-react-2xm7e44fdq-lm.a.run.app/api/auth";

export type TypeActionAuth = "sign-up" | "login";

export const getAuthGoole = (type: TypeActionAuth, codeResponse: TokenResponse) => {
    const baseQueryFn = baseQuery;

    return baseQueryFn({
        url: `${AUTH_API_BASE_URL}/${type}/google`,
        body: codeResponse,
        method: 'post',
        credentials: 'include'
    })
};

export const getAuthForm = (type: TypeActionAuth, submitFormValues: SubmitSignUpFormValues | SubmitSignInFormValues) => {
    const baseQueryFn = baseQuery;

    return baseQueryFn({
        url: `${AUTH_API_BASE_URL}/${type}/form`,
        body: submitFormValues,
        method: 'post',
    })
};

export const getAuthGitHub = (type: TypeActionAuth, codeResponse: { code: string }) => {
    const baseQueryFn = baseQuery;

    return baseQueryFn({
        url: `${AUTH_API_BASE_URL}/${type}/github`,
        body: codeResponse,
        method: 'post',
        credentials: 'include'
    })
};


export const logOutUser = () => {
    const baseQueryFn = baseQuery;

    return baseQueryFn({
        url: `${AUTH_API_BASE_URL}/logout`,
        method: 'post',
        credentials: 'include'
    })
};
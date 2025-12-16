import { GoogleLogin, type CredentialResponse, } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React from 'react'

const SignUp = () => {
    const handleSuccess = (response: CredentialResponse) => {
        const user = jwtDecode(response.credential ?? '');
        console.log(user);
    };

    const linkedInLogin = () => {
        const redirectUri = encodeURIComponent(
            'http://localhost:3000/auth/linkedin/callback'
        );

        window.location.href =
            `https://www.linkedin.com/oauth/v2/authorization` +
            `?response_type=code` +
            `&client_id=VITE_LINKEDIN_CLIENT_ID` +
            `&redirect_uri=${redirectUri}` +
            `&scope=openid profile email`;
    };

    const githubLogin = () => {
        window.location.href =
            `https://github.com/login/oauth/authorize` +
            `?client_id=VITE_GITHUB_CLIENT_ID` +
            `&scope=user:email`;
    };

    return (
        <div className='loginOptions'>

            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log('credentialResponse', credentialResponse);
                    handleSuccess(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                theme='filled_blue'
                shape='pill'
            />

            <button onClick={() => linkedInLogin()}>Linkedin</button>

            <button onClick={() => githubLogin()}>Github</button>


        </div>
    )
}

export default SignUp
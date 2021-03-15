import React, { useContext } from 'react';
import './Login.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import userContext from '../../context/userContext';
import { useHistory } from 'react-router-dom';
const keys = require('../url');
const clientId = require('../../keys');

const Login = () => {

    const { setUserData } = useContext(userContext);

    const history = useHistory();

    const responseSuccessGoogle = async (response) => {
        await axios.post(`${keys.serverURL}/user/googlelogin`, {tokenId: response.tokenId})
        .then((res) => {
            setUserData({
                token: res.data.token,
                user: res.data.user.username,
                email: res.data.user.email,
                userId: res.data.user.id
                });
                localStorage.setItem("auth-token", res.data.token);
                history.push("/");
        })
    }

    const responseErrorGoogle = async (error) => {
        // console.log(error.details);
    }

        return (
            <div className="container login_flex">
            <GoogleLogin
                                clientId={clientId.clientId}
                                buttonText="Login With Google" 
                                onSuccess={responseSuccessGoogle}
                                onFailure={responseErrorGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                <p className='disclaimer'>Authorization is required so that only verified users show on leaderboard</p>
            </div>

        );
    }


export default Login;

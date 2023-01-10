import {React,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(){
    const {Kakao}=window;
    const uri=window.location.href
    const arr=uri.split("=");
    const navigate=useNavigate();
    useEffect(async() =>{
        // console.log(uri);
        // console.log(arr[1]);
        await axios.post("https://kauth.kakao.com/oauth/token",{
            "grant_type":"authorization_code",
            "client_id":"8932f7430024486005b0d58acf215574",
            "redirect_uri":"http://localhost:3000/login",
            "code":arr[1]
        },
        {
        headers:{
            "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => { 
            // console.log(response.data.access_token);
            Kakao.Auth.setAccessToken(response.data.access_token);
            Kakao.API.request({
                url: '/v2/user/me',
                data: {
                    property_keys: ['kakao_account.email'],
                },
            })
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
         })
        .catch((res)=>console.log(res));
        navigate("/");

    })
    return(
        <div></div>
    )    
}
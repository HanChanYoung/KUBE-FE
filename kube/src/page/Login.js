import {React,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { SET_LOGIN,SET_UID } from '../state/slice/LoginSlice';
import Swal from 'sweetalert2'

export default function Login(){

    const {Kakao}=window;
    const uri=window.location.href
    const arr=uri.split("=");
    const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(() =>{
        async function fetchData(){
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
                    
                },
            })
                .then(function(response) {
                    console.log(response);
                    console.log(response.id); 
                    dispatch(SET_UID(response.id))
                    dispatch(SET_LOGIN());

                    Swal.fire({
                        toast: true,
                        icon: 'success',
                        title: `${response.properties.nickname}님 안녕하세요!`,
                        animation: false,
                        position: 'top',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: false,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      });
                })
                .catch(function(error) {
                    console.log(error);
                });
         })
        .catch((res)=>console.log(res));
        navigate("/");
        }
        fetchData();
    })
    
    return(
        <div></div>
    )    
}
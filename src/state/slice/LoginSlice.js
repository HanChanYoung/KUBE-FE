import { createSlice} from '@reduxjs/toolkit'

export const LoginSlice=createSlice(
    {
        name:'LoginSlice',
        initialState:{
            uid:null,
            isLogin:false,
        },
        reducers:{
            SET_LOGIN:(state,action)=>{
                state.isLogin=true;
            },
            SET_LOGOUT:(state,action)=>{
                state.isLogin=false;
            },
            SET_UID:(state,action)=>{
                state.uid=action.payload
            }
        }
    }
);


export const {
    SET_LOGIN,
    SET_LOGOUT,
    SET_UID
} = LoginSlice.actions;


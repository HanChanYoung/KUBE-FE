import { createSlice} from '@reduxjs/toolkit'

export const LoginSlice=createSlice(
    {
        name:'LoginSlice',
        initialState:{
            isLogin:false,
        },
        reducers:{
            SET_LOGIN:(state,action)=>{
                state.isLogin=true;
            },
            // SET_LOGOUT:(state,action)=>{
            //     state.isLogin=false;
            // }
        }
    }
);


export const {
    SET_LOGIN,
    // SET_LOGOUT,
} = LoginSlice.actions;


import { createSlice} from '@reduxjs/toolkit'

export const BoardRsvdSlice=createSlice(
    {
        name:'BoardRsvdSlice',
        initialState:{
            
        },
        reducers:{
            SET_LOGIN:(state,action)=>{
                state.isLogin=true;
            },
        }
    }
);


export const {
    SET_LOGIN,
} = BoardRsvdSlice.actions;


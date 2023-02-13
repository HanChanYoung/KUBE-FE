import { combineReducers} from '@reduxjs/toolkit'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
//redux test
import { ExamSlice } from './slice/SliceExam';
import { LoginSlice } from './slice/LoginSlice';
import { BoardRsvdSlice } from './slice/BoardRsvdSlice';

export const rootReducer=combineReducers({
    //redux test
    examSlice:ExamSlice.reducer,
    loginSlice:LoginSlice.reducer,
    boardRsvdSlice:BoardRsvdSlice.reducer,
    })

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
    whitelist: ["loginSlice"]
    // blacklist -> 그것만 제외합니다
    };
export const persistReduce=persistReducer(persistConfig, rootReducer);    

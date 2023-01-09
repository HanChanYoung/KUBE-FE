import { configureStore ,combineReducers} from '@reduxjs/toolkit'
//redux test
import { ExamSlice } from './slice/SliceExam';

const rootReducer=combineReducers({
    //redux test
    examSlice:ExamSlice.reducer,

    })

export const store = configureStore({reducer: rootReducer});
import { createSlice} from '@reduxjs/toolkit'

export const BoardRsvdSlice=createSlice(
    {
        name:'BoardRsvdSlice',
        initialState:{
            //Back -> Front
            boardId:null,
            categoryName:'',
            boardName:'',
            boardDesc:[],
            price:null,
            //대여 가능 기간
            canRentStartDate:null,
            canRentEndDate:null,
            //이미 예약된 기간
            reservedDate:null,
            //Front -> Back
            delvyStatusCode:'',
            boardAddr:'',
            boardAddrExtra:'',
            //대여자가 빌리는 기간
            rentStartDate:null,
            rentEndDate:null,
        },
        reducers:{
            SET_RSVD_PAGE:(state,action)=>{
                state.boardId=action.payload['id']
                state.categoryName=action.payload['categoryName']
                state.boardName=action.payload['boardName']
                state.boardDesc=action.payload['boardDesc'].split("\n")
                state.price=action.payload['price']
                state.canRentStartDate=action.payload['canRentStartDate']
                state.canRentEndDate=action.payload['canRentEndDate']
                state.reservedDate=action.payload['reservedDate']
            },
            SET_RSVD_INFO:(state,action)=>{
                state.delvyStatusCode=action.payload['delvyStatusCode']
                state.boardAddr=action.payload['boardAddr']
                state.boardAddrExtra=action.payload['boardAddrExtra']
                state.rentStartDate=action.payload['rentStartDate']
                state.rentEndDate=action.payload['rentEndDate']
            },
        }
    }
);


export const {
    SET_RSVD_PAGE,
    SET_RSVD_INFO,
} = BoardRsvdSlice.actions;


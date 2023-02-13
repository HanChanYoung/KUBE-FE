import { createSlice} from '@reduxjs/toolkit'

export const ExamSlice=createSlice(
    {
        name:'ExamSlice',
        initialState:{
            userId:undefined,
            title:'이름 없는 설문',
            description:'이름 없는 설문입니다',
            askAge:false,
            askGender:false,
            privateSurvey:'FALSE', 
            limitPerson:'',
            theme:null,
            questionNumber:0,
            questionList:[],
        },
        reducers:{
            SET_USER:(state,action)=>{
                state.userId=action.payload;
            },
            SET_TITLE:(state,action)=>{
                state.title=action.payload;
            },
            SET_DESCRIPTION:(state,action)=>{
                state.description=action.payload;
            },
            SET_PUBLIC_PRIVATE:(state,action)=>{
                state.privateSurvey=action.payload;
            },
            SET_PEOPLE_LIMIT:(state,action)=>{
                state.limitPerson=action.payload;
            },
            SET_IS_GENDER_QUESTION:(state)=>{
                state.askGender=!state.askGender;
            },
            SET_IS_AGE_QUESTION:(state)=>{
                state.askAge=!state.askAge;
            },
            //테마 바뀌려나?

            SET_THEME_TEST:(state,action)=>{
                if(state.theme===action.payload){
                    state.theme=null
                    state.themeForFront=null
                }else{
                    state.theme=action.payload
                    switch(action.payload){
                        case "chunsik":
                            state.themeForFront="url('/images/theme_chunsik.png')";
                            break;
                        case "ryan":
                            state.themeForFront="url('/images/theme_ryan.png')";
                            break;
                        case "jordy":
                            state.themeForFront="url('/images/theme_jordy.png')";
                            break
                        case "apeach":
                            state.themeForFront="url('/images/theme_apeach.png')";
                            break;
                    }
                }
                
                
                
            },

            NEXT_LEVEL:(state,action)=>{
                state.step=state.step+action.payload;
            },


        }
    }
);


export const {
    SET_USER,
    SET_TITLE,
    SET_DESCRIPTION,
    SET_STARTDATE,
    SET_ENDDATE,
    SET_PUBLIC_PRIVATE,
    SET_PEOPLE_LIMIT,
    SET_IS_GENDER_QUESTION,
    SET_IS_AGE_QUESTION,
    SET_THEME_TEST,
    NEXT_LEVEL,

} = ExamSlice.actions;


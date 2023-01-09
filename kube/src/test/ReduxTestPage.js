import {useSelector,useDispatch} from 'react-redux';
import { 
    SET_TITLE,
    // SET_DESCRIPTION,
    // SET_STARTDATE,
    // SET_ENDDATE,
    // SET_PUBLIC_PRIVATE,
    // SET_PEOPLE_LIMIT,
    // SET_IS_GENDER_QUESTION,
    // SET_IS_AGE_QUESTION,
    // SET_THEME_TEST,
    // NEXT_LEVEL,
    // SET_USER,
 } from "../state/slice/SliceExam"

export default function ReduxTestPage(){
    //store에 정의된 이름으로 불러와야 됩니다
    const sliceExam=useSelector((state)=>state.examSlice);
    const dispatch=useDispatch();

    return(
        <div>
            <button onClick={()=>{console.log(sliceExam)}}>버튼입니당</button>
            <button onClick={()=>{dispatch(SET_TITLE("dispatch test"))}}>dispatch test</button>
        </div>
    )
}
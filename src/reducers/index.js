/**
 * Created by Administrator on 2017/11/16/016.
 */
import { combineReducers } from "redux";
import { INIT_NOTES, ADD_NOTE, DELETE_NOTE } from "../actions";

//处理笔记初始化、添加及删除请求
function notes(state = [ ], action){
    //每一次的操作无论是添加、删除还是初始化，全部的笔记内容会被重新更新一次
    switch(action.type){
        // case INIT_NOTES:
        //     return [ ...action.notes ];
        case ADD_NOTE:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    note: action.note
                }
            ];
        case DELETE_NOTE:
            var newState=[];
            state.map((note) =>{
                if(note.id != action.id){
                    newState.push(note);
                }
            });
            return newState;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ notes });
export default rootReducer;
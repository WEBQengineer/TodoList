import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionType'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItyemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
});

export const getTodoList = () => {
    //当生成是函数的action时，return的这个方法会自动接受dispatch
    return (dispatch) =>{
        axios.get('/list.json').then((res) => {
        const data = res.data;
        console.log(data);
        const action = initListAction(data);
        dispatch(action);
    });}
} 

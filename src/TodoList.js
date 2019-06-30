import React, {Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import{ getTodoList, getInputChangeAction, getAddItemAction, getDeleteItyemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }

    render(){
        return <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />
    }

    componentDidMount(){
        //不推荐将Ajax请求等复杂的代码写在组件中，不然组件会变得复杂
        /*axios.get('/list.json').then((res) => {
                // console.log('res中的数据',res)
            const data = res.data;
            const action = initListAction(data);
                //console.log('这是action',action);
            store.dispatch(action);
        });*/
        const action = getTodoList();
        //只有dispatch了，action返回的函数才会被执行
        store.dispatch(action);
    }


    handleInputChange(e){
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState()); 
        // console.log('123');
    }
    //点击按钮
    handleBtnClick(){
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        // alert(index);
        const action = getDeleteItyemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;
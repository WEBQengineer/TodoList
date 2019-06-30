import React,{ Component , Fragment } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios';

class TodoList extends Component {
  // constructor构造函数优于其他函数自动执行
  constructor(props){
    super(props);
    //把数据定义在组件状态里
    this.state = {
      inputValue : '',
      list:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  componentDidMount(){
    axios.get('/api/todolist')
    .then((res) => {
      // console.log(res.data)
      this.setState(() => ({
        list : [...res.data]
      }));
    })
    .catch(() => {alert('error')});
  }


  render() {
    return (
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          {/* 绑定事件，事件名字要首字母大写 */}
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>          
            {this.getTodoItem()}          
        </ul>
      </Fragment>
    )
  }
  getTodoItem(){
    return this.state.list.map((item,index) => {
      return(
          <TodoItem 
            key={index}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete}
          />
      )
    })
  }

  //老师说下面这个e叫做事件对象
  handleInputChange(e) {
    // const value = e.target.value;
    //异步
    // this.setState(() => ({
    //   inputValue:value 
    // }));

    const value = this.input.value;
    // console.log('zhege',this);//打印的是TodoList实例
    // console.log('zhege',this.input);//打印的是input实例
    //异步
    this.setState(() => ({
      inputValue:value
    }));

  }
  handleBtnClick(){
    //prevState代表修改数据前的那一次数据是怎么样的
    this.setState((prevState) => ({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }));
  }
  //删除对应项
  handleItemDelete(index){
    //拷贝list数组然后操作,不要删原数组
    this.setState((prevState) =>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {list}
    });
  }
}

export default TodoList
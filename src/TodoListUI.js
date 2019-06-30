import React from 'react';
import { Input, Button, List} from 'antd';
//接受一个props，是父组件传递过来的参数
//无状态组件性能告，因为无状态组件只是一个函数，而普通组件是一个类，
// 类中会有声明周期函数等，所以声明周期函数和render都要执行，所以无状态组件开销就会低的多。
//定义一个UI组件，只负责页面渲染没有取做任何逻辑操作，一般都可以用无状态组件定义
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px',marginLeft: '10px'}}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder="todo info" 
                    style={{width:'300px',marginRight:'10px'}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary"
                    onClick={props.handleBtnClick}
                >提交</Button>
            </div>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (
                    <List.Item onClick={() => (props.handleItemDelete(index))}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
}

// class TodoListUI extends Component{
//     render(){
//         return (
//             <div style={{marginTop: '10px',marginLeft: '10px'}}>
//             <div>
//                 <Input 
//                     value={this.props.inputValue} 
//                     placeholder="todo info" 
//                     style={{width:'300px',marginRight:'10px'}}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary"
//                     onClick={this.props.handleBtnClick}
//                 >提交</Button>
//             </div>
//             <List
//                 style={{marginTop:'10px',width:'300px'}}
//                 bordered
//                 dataSource={this.rops.list}
//                 renderItem={(item) => (<List.Item onClick={(index) => (this.props.handleItemDelete(index))}>{item}</List.Item>)}
//             />
//         </div>
//         )
//     }
// };

export default TodoListUI;
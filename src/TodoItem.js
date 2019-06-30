import React,{ Component } from 'react';
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextProps.content !== this.props.content){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    // shouldComponentUpdate(){
    //     console.log('qweqwe123');
    //     return false;
    // }

    render(){
        console.log('child render');
        const { content } = this.props;
        return (
            <div onClick={this.deleteClick}>
                {content}
                {/*下面两个打印结果一样。‘const { content } = this.props;’
                    这句话的{content}也许代表this.props下的content。毕竟是框架
                {console.log(content)}
                {console.log(this.props.content)} */}
            </div>
        )
    }

    deleteClick(){
        const { deleteItem,index } = this.props;
        deleteItem(index);
    }

}

export default TodoItem
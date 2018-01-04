/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    handleClick(){
        var title=this.refs.title.value;
        var describe=this.refs.description.value;
        
        if(title=='') return;
        if(describe=='') return;
        
        this.props.onAddNote(title,describe);
        
        this.refs.title.value='';
        this.refs.description.value='';
        
    }
    render(){
        return(
            <div className="notes note-left">
                <form onSubmit={()=>this.handleClick()}>
                    <h3 className="title">添加笔记</h3>
                    <input type="text" ref="title" placeholder="标题"/>
                    <textarea type="text" ref="description" placeholder="内容"></textarea>
                    <p className="add-p"><button type="submit">添加</button></p>
                </form>

            </div>
            
        )
    }
}
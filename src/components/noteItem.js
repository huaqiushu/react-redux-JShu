/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';


export default class Test extends Component{
    constructor(props){
        super(props)
    }
    handleClick(id){
        this.props.onDeleteNote(id)
    }
    render(){
        return(
            <div className="note-item">
                <p className="item-title"><span>{this.props.note.title}</span><button onClick={(id)=>this.handleClick(this.props.note.id)}>删除笔记</button></p>
                <p className="item-info"><span>{this.props.note.note}</span><i>{this.props.note.id}</i></p>
            </div>
            
        )
    }
}
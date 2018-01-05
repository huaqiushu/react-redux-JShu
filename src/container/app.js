/**
 * Created by Administrator on 2017/11/16/016.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import NoteAdd from '../components/noteAdd'
import NoteList from '../components/noteList'


class App extends Component{
    constructor(props){
        super(props);
    }
    onAddNote(title,text){
        this.props.actions.addNote(title,text);
    }
    deleteNote(id){
       
        this.props.actions.deleteNote(id);
    }

    render(){
        
        return(
            <div className="container">
                <h1 className="header">记事本</h1>
                <NoteAdd onAddNote={(title,text)=>this.onAddNote(title,text)}/>
                <NoteList notes={this.props.notes} onDeleteNote={(id)=>this.deleteNote(id)}/>
            </div>
        );
    }
}

App.propTypes = {
    notes : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            note : PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

//为actions里面的函数绑定dispatch，直接调用this.props.actions.xxx()，即等同于没绑定情况下this.props.dispatch(xxx())
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

//另一种写法：绑定多个action
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return bindActionCreators({
//         increase: action.increase,
//         decrease: action.decrease
//     });
// }

const mapStateToProps = state => {
    return{
        notes : state.notes
    }
};
//mapDispatchToProps为第二个参数
export default connect(mapStateToProps,mapDispatchToProps)(App)
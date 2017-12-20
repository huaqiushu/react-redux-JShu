/**
 * Created by Administrator on 2017/11/16/016.
 */
import React, { Component, cloneElement } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import * as actions from '../actions'


class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }

    render(){
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => cloneElement((child))
        );
        return(
            <div>
                {childrenWithProps}
            </div>
        );
    }
}

//为actions里面的函数绑定dispatch，直接调用this.props.actions.xxx()，即等同于没绑定情况下this.props.dispatch(xxx())
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
    return state
};
//mapDispatchToProps为第二个参数
export default connect(mapStateToProps,mapDispatchToProps)(App)
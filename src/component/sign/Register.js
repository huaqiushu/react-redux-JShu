/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';
import {Link} from 'react-router';
// import NoteItem from './noteItem'
import logo from '../../image/logo_login.png'
import '../../css/sign.scss'


export default class Test extends Component{
    constructor(props){
        super(props);
        this.state={login:true}
    }
    handleClick(type){
        if(type=='login'){
            this.setState({login:true});
        }else{
            this.setState({login:false});
        }
    }
    render(){
        return(
            <div className="sign shadow-panel">
                <div className="logo">
                    <p className="logo-img shadow-panel"><img src={logo} alt=""/></p>
                </div>
                
                <div className="sign-panel">
                    <nav><Link to="/login">登录</Link> | <Link className="active" to="/register">注册</Link></nav>
                    <div>
                        <form>
                            <input type="text" placeholder="手机号"/>
                            <input className="tel-code" type="text" placeholder="手机验证码"/><span><button className="send-code">发送验证码</button></span>
                            <input type="text" placeholder="昵称"/>
                            <input type="password" placeholder="密码"/>
                            <p className="info">点击 “注册” 即表示您同意并愿意遵守<a href="#">《用户协议》</a>和<a href="#">《隐私政策》</a>。</p>
                            <button>注册</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
    }
}
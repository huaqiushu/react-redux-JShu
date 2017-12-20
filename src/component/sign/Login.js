/**
 * Created by Administrator on 2017/11/16/016.
 */
import React,{ Component } from 'react';
import classname from 'classnames'
import {Link} from 'react-router';
// import NoteItem from './noteItem'
import logo from '../../image/logo_login.png'
import wechat from '../../image/login_wechat.png'
import weibo from '../../image/login_weibo.png'
import qq from '../../image/login_qq.png'
import '../../css/sign.scss'


export default class Test extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="sign shadow-panel">
                <div className="logo">
                    <p className="logo-img shadow-panel"><img src={logo} alt=""/></p>
                </div>
                
                <div className="sign-panel">
                    <nav><Link className="active" to="/login">登录</Link> | <Link to="/register">注册</Link></nav>
                    <div>
                        <form>
                            <input type="text" placeholder="手机号"/>
                            <input type="password" placeholder="密码"/>
                            <input type="text" placeholder="验证码"/><span><img src="" alt=""/></span>
                            <p>
                                <i className="left"><input type="checkbox" checked/><span>记住我</span></i>
                                <i className="right">登录遇到问题？</i>
                            </p>
                           <button>登录</button>
                        </form>
                        <div className="more-login">
                            <p className="hr">第三方账号登录</p>
                            <div>
                                <ul>
                                    <li><img src={wechat} alt=""/></li>
                                    <li><img src={weibo} alt=""/></li>
                                    <li><img src={qq} alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
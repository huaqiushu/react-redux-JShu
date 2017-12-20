/**
 * Created by Administrator on 2017/12/18/018.
 */
import React ,{Component} from 'react'
import {Link} from 'react-router';
import '../css/header.scss'
import logo from '../image/logo_login.png'


export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="header">
                <div className="navbar">
                    <Link className="logo"><img src={logo} alt=""/></Link>
                    <div className="right">
                        <span><Link>登录</Link></span>
                        <span><Link>注册</Link></span>
                        <span><button className="public">发布</button></span>
                    </div>
                    <div className="nav">
                        <span><Link>发现</Link></span>
                        <span><Link>专题</Link></span>
                        <span><input type="text" placeholder="搜索"/></span>
                    </div>
                </div>
            </div>
        )
    }
}
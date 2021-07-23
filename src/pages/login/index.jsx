
import { Fragment } from "react"
import React, { Component } from "react"
import { Form, Input, Button, Row, Col } from 'antd';
import { Emailreg } from "../../untils/regex";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getLogin,getCode} from "../../untils/login";
import "../login/login.scss"
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statusL:'regisx',
             username:"",
             password:"",
             code:"",
        }
    }

    // 登录接口
    onFinish = () => {
        getLogin().then(res=>{
            
        }).catch(err=>{
            console.log(err)
        })
    }
    // 切换 
    hanldeSwitch=()=>{
        this.props.switchfn(this.state.statusL)
    }
    // 实时获取username的值
    userValue=(e)=>{
       // console.log(e)
       let val=e.target.value;
       this.setState({
          username:val
       })
    }
    // codeFn
    codeFn=()=>{
        getCode().then(res=>{

        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        const {username,password,code} =this.state
        return (
            <Fragment>
                <div className='header'>
                    <span className="denglu" >登录</span>
                    <span className="zhuce" onClick={this.hanldeSwitch}>注册</span>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '邮箱不能为空',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if(Emailreg.test(value)){
                                       return Promise.resolve()
                                  }
                                  return Promise.reject(new Error('邮箱格式不正确'));
                                },
                              }),
                        ]}
                    >
                        <Input  value={username}  onChange={this.userValue} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空',
                            },
                        ]}
                    >
                        <Input
                            value={password}
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item
                                name="code"
                                rules={[
                                    { required: true, message: '验证码不能为空' },
                                ]}
                            >
                                <Input
                                value={code}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="验证码"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Button type="danger"  onClick={this.codeFn}>
                                获取验证码
                            </Button>
                        </Col>
                    </Row>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block className="login-form-button">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        )
    }
}
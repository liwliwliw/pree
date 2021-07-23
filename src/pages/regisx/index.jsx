import { Fragment } from "react"
import React, { Component } from "react"
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../regisx/regisx.scss"
export default class Regisx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            statusL:'login'
        }
    }
    // 注册事件
    onFinish = () => {

    }
    // 切换 
    hanldeSwitch=()=>{
        this.props.switchfn(this.state.statusL)
    }
    render() {
        return (
            <Fragment>
                <div className='header'>
                    <span className="denglu" onClick={this.hanldeSwitch}>登录</span>
                    <span className="zhuce" >注册</span>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    // initialValues={{
                    //     remember: true,
                    // }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password1"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password1"
                        />
                    </Form.Item>
                    <Row gutter={8}>
                        <Col span={16}>
                            <Form.Item
                                name="code"
                                rules={[
                                    { required: true, message: '验证码不能为空' }
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="验证码"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Button type="danger" >
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
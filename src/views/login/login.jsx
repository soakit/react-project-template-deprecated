import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import itemWrap from '@/components/itemWrap'
import './login.less'
import { actions as loginActions } from '@/store/login.redux'

const { login, } = loginActions

@connect(
	state => state.userData,
	{
		login
	},
)
@itemWrap
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.register = this.register.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}
	register() {
		this.props.history.push('/register')
	}
	handleLogin() {
        // TODO: login
		this.props.login(this.props.state)
	}
	render() {
		console.log(this.props, this.state)
		return (
			<div className="mod-login">
				{this.props.redirectTo && this.props.redirectTo !== '/login' ? (
					<Redirect to={this.props.redirectTo} />
                ) : null}
                
				<WingBlank>
					<List>
						{this.props.msg ? (
							<p className="error-msg">{this.props.msg}</p>
						) : null}
						<InputItem onChange={v => this.props.handleChange('userName', v)}>
							用户
						</InputItem>
						<WhiteSpace />
						<InputItem
							onChange={v => this.props.handleChange('password', v)}
							type="password"
						>
							密码
						</InputItem>
					</List>
					<WhiteSpace />
					<Button onClick={this.handleLogin} type="primary">
						登录
					</Button>
					<WhiteSpace />
				</WingBlank>
			</div>
		)
	}
}

export default Login

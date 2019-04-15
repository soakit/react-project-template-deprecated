import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import api from '@/utils/api-client'
import { actions as loginActions } from '@/store/login.redux'

const { loadData, } = loginActions

@withRouter
@connect(
	state => state.userData,
	{
		loadData,
	}
)
class AuthRoute extends React.Component{
	componentDidMount() {
		const publicList = ['/login','/register']
		const pathname = this.props.location.pathname
		if (publicList.indexOf(pathname)>-1) {
			return null
		}
        if (!localStorage.getItem('isLogined')) {
            this.props.history.push('/login')
        } else {
			// 获取用户信息
			/* api('get', '/user/info')
				.then(res=>{
					if (res.status==200) {
						if (res.data.code==0) {
							// 有登录信息de
							this.props.loadData(res.data.data)
						}
					}
				}) */
		}
	}
	render(){
		return null
	}

}
export default AuthRoute
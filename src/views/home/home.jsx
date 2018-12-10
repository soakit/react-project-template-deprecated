import React, { Component } from 'react'
import { connect } from 'react-redux'

import mixin, { padStr } from '@/utils/mixin'
import './home.less'

import { actions as homeActions } from '@/store/home'

const { getAllRecords, } = homeActions


@mixin({ padStr })
class Home extends Component {

    componentDidMount() {
        this.props.getAllRecords()
	}

    render() {
		const {recordList} = this.props.homeData
		return <div>
			<h1>首页</h1>
			<ul>
				<li>{recordList[0]}</li>
				<li>{recordList[1]}</li>
				<li>{recordList[2]}</li>
			</ul>
		</div>
    }

}

export default connect(
	state => ({
		homeData: state.homeData,
	}),
	{
		getAllRecords,
	}
)(Home)
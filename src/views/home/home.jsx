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
        return <h1>首页</h1>
    }

}

export default connect(
	state => ({
		formData: state.formData,
		proData: state.proData
	}),
	{
		getAllRecords,
	}
)(Home)
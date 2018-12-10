import React, { Component } from 'react'
import { connect } from 'react-redux'

import mixin, { padStr } from '@/utils/mixin'
import './contacts.less'

import { actions as contactsActions } from '@/store/contacts'

const { getContactsList, } = contactsActions


@mixin({ padStr })
class Contacts extends Component {

    componentDidMount() {
        this.props.getContactsList()
	}

    render() {
		const {contactsList} = this.props.contactsData
		return <div className="mod-contacts">
			<h1>联系人</h1>
			<ul>
				<li>{contactsList[0]}</li>
				<li>{contactsList[1]}</li>
				<li>{contactsList[2]}</li>
			</ul>
		</div>
    }

}

export default connect(
	state => ({
		contactsData: state.contactsData,
	}),
	{
		getContactsList,
	}
)(Contacts)
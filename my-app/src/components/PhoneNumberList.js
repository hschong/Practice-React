import React, { Component } from 'react'
import PhoneNumber from './PhoneNumber'

export default class PhoneNumberList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const {data} = this.props
        const list = data.map(
            info => (<PhoneNumber info={info} key={info.id} />)
        )
        return (
            <div>
                {list}
            </div>
        )
    }
}

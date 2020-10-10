import React, { Component } from 'react'

export default class PhoneNumber extends Component {
    render() {
        const {id, name, number} = this.props.info
        const style = {
            border: '1px solid red',
            padding: '8px',
            margin: '8px',
        }

        return (
            <div>
                <div><b>{name}</b></div>
                <div>{number}</div>
            </div>
        )
    }
}

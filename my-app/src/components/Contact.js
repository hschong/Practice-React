import React, { Component } from 'react'

export default class Contact extends Component {
    handleRemove = () => {
        const {contact, onRemove} = this.props
        onRemove(contact.id)
    }

    render() {
        const {name, number} = this.props.contact
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        }

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{number}</div>
                <button onClick={this.handleRemove}>remove</button>
            </div>
        )
    }
}

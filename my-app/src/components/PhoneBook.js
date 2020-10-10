import React, { Component } from 'react'
import Contact from './Contact'

export default class PhoneBook extends Component {
    static defaultProps = {
        phoneBook: []
    }

    render() {
        const {phoneBook, onRemove} = this.props
        const list = phoneBook.map( e => (
            <Contact 
                onRemove={onRemove} 
                contact={e} 
                key={e.id} 
            />)
        )
        
        return (
            <div>
                {list}
            </div>
        )
    }
}

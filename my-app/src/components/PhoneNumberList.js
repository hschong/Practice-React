import React, { Component } from 'react'
import PhoneNumber from './PhoneNumber'

export default class PhoneNumberList extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const {data, onRemove} = this.props
        const list = data.map(
            info => (
                <PhoneNumber 
                    onRemove={onRemove} 
                    info={info} 
                    key={info.id} 
                />)
        )
        
        return (
            <div>
                {list}
            </div>
        )
    }
}

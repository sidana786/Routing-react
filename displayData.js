import React, { Component } from 'react';

export class DisplayData extends Component{
  
    render(){
        return(<tr onClick={this.props.getData.bind(this,this.props.item)}>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.age}</td>
        </tr>)
    }
}
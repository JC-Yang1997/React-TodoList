import React , { Component , Fragment } from 'react'

class ListItem extends Component{
  handleClick = () => {
    const {id,onClick} = this.props;
    onClick(id);
  }
  render(){
    return (
      <li 
      key={this.props.id}
      >
      {
        this.props.isDone===false
        ?
        <Fragment>
        <input 
        type="checkbox" 
        onClick={this.handleClick}
        /> 
        <span className=''>
          {this.props.children} 
        </span>
        </Fragment>
        :
        <Fragment>
        <input 
        type="checkbox" 
        onClick={this.handleClick}
        /> 
        <span className='done-item'>
          {this.props.children} 
        </span>
        </Fragment>
      }
      </li> 
    )
  }
}
export default ListItem;
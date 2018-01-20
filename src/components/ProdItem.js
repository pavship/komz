import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

class ProdItem extends Component {
  state = {
    checked: false
  }

  handleClick = (e, d) => {
    const { checked } = this.state
    const { id } = this.props
    console.log(d)
    this.setState({checked: !checked})
    this.props.selectProd(id)
  }

  render() {
    const {checked} = this.state

    return (
      <List.Item onClick={this.handleClick} active={checked}>
        <List.Icon name={checked ? 'checkmark box' : 'square outline'} />
        <List.Content>
          {this.props.title}
        </List.Content>
      </List.Item>
    )
  }
}

export default ProdItem

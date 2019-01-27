import React from 'react'

function Placeholder (Component, EditComponent) {

  return class extends React.PureComponent {

    state = { editMode: false }

    changeEditMode = () => {
      this.setState(({editMode}) => ({editMode: !editMode}))
    }

    render() {
      const {editMode} = this.state
      //const {[dataType]:dataValue} = this.props

      if(editMode)
        return <EditComponent {...this.props} disableEditMode={this.changeEditMode} />

      return <Component {...this.props} enableEditMode={this.changeEditMode} />
    }
  }

}

export default Placeholder

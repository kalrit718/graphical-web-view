import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import './ApiCanvas.css'
import AddNewButton from '../add-new-button/AddNewButton'
import PropertyDialog, { PropertyDialogTypes } from '../property-dialog/PropertyDialog'

type Props = {}

type State = {
    showDialog: boolean,
    propDialogType: PropertyDialogTypes
}

export default class ApiCanvas extends Component<Props, State> {
  state = {
    showDialog: false,
    propDialogType: PropertyDialogTypes.API_PROPERTY_DIALOG
  }

  render() {
    return (
        <>
        <Row id='api-canvas-shell' onClick={() => {
            this.setState({propDialogType: PropertyDialogTypes.API_PROPERTY_DIALOG, showDialog: true});
            // this.setState({showDialog: true});
          }}>
            <Row id='canvas-title'>&#123; API &#125;</Row>
            <Row id='add-new-button-strip'>
                <AddNewButton />
            </Row>
            <Row></Row>
        </Row>
        { this.state.showDialog && <PropertyDialog toggleToClose={() => this.setState({propDialogType: PropertyDialogTypes.API_PROPERTY_DIALOG, showDialog: false})} dialogType={this.state.propDialogType} />}
        </>
    )
  }
}
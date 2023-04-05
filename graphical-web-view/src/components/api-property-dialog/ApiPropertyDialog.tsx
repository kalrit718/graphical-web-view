import React, { Component } from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

type Props = {}

type State = {}

export default class ApiPropertyDialog extends Component<Props, State> {
  state = {}

  render() {
    return (
        <>
            <Modal.Header>
                <Modal.Title className='text-primary'>Properties</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        API Properties
                    </Modal.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label className='mt-2 mb-0'>Name</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>Context</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>PublishSwagger</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>Host Name</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>Port</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>Version Type</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                            <Form.Label className='mt-2 mb-0'>Description</Form.Label>
                            <Form.Control type='text' placeholder='eg: None' />
                        </Form.Group>
                    </Form>
                </Row>
                <Row className='mb-4'>
                    <Modal.Title className='text-secondary'>
                        Handler
                    </Modal.Title>
                    <Form>
                        {/* <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Check type='checkbox' label='GET' />
                                    <Form.Check type='checkbox' label='POST' />
                                </Col>
                                <Col>
                                    <Form.Check type='checkbox' label='DELETE' />
                                    <Form.Check type='checkbox' label='OPTIONS' />
                                </Col>
                            </Row>
                        </Form.Group> */}
                    </Form>
                </Row>
                
            </Modal.Body>
        </>
    )
  }
}
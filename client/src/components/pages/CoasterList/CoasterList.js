import React, { Component } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import NewCoasterForm from './NewCoasterForm'
import CoasterCard from './CoasterCard'

class CoasterList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    const { coasters, refreshCoasters } = this.props

    return (
      <div>
        {this.props.loggedUser && <Button onClick={this.openModal}>Crea una nueva montaña rusa</Button>}

        <Modal
          show={this.state.showModal}
          backdrop="static"
          onHide={this.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Nueva Coaster</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewCoasterForm refreshCoasters={refreshCoasters} closeModal={this.closeModal} />
          </Modal.Body>
        </Modal>

        <Row>
          {coasters.map(elm => (
            <Col key={elm._id}>
              <CoasterCard owned={this.props.loggedUser?._id === elm.owner} {...elm} />
            </Col>
          ))
          }
        </Row>
      </div>
    )
  }
}

export default CoasterList
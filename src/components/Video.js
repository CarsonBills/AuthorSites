import React from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';
import Modal from 'react-modal';

const appElement = document.getElementById('your-app-element');

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.8)',
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    height                : '560px',
    width                 : '750px',
    marginRight           : '-50%',
    backgroundColor       : "#141519",
    border                : "none",
    transform             : 'translate(-50%, -50%)',
  }
};

class Video extends React.Component{

    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    // references are now sync'd and can be accessed.
        this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }




    render(){
        return (
            <Col xs={12} md={4} >
                <div className="video">
                    <img class="video-thumb" onClick={this.openModal} src="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg"/>
                    <p>{this.props.title}</p>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Example Modal">
                      <iframe onClick={this.openModal} width="700" height="510" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                    </Modal>
                </div>
            </Col>
        );
    }
}

export default Video;
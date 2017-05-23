import React from 'react';
import { Col } from 'react-bootstrap';
import Modal from 'react-modal';

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
        const thumbnail = "https://img.youtube.com/vi/"+this.props.video.id.videoId+"/0.jpg";
        const src = 'https://www.youtube.com/embed/' + this.props.video.id.videoId;
        return (
            <Col xs={12} md={4} >
                <div className="video">
                    <img alt={this.props.video.snippet.title} className="video-thumb" onClick={this.openModal} src={thumbnail}/>
                    <p>{this.props.video.snippet.title}</p>
                    <Modal
                      isOpen={this.state.modalIsOpen}
                      onAfterOpen={this.afterOpenModal}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                      contentLabel="Example Modal">
                      <iframe onClick={this.openModal} width="700" height="510" src={src} frameBorder="0" allowFullScreen></iframe>
                    </Modal>
                </div>
            </Col>
        );
    }
}

export default Video;
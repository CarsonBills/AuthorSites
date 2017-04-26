import React from 'react';
import {gaClick} from '../components/gaClick';
import { Link } from 'react-router';
import { FormGroup, InputGroup, FormControl, Col, Button } from 'react-bootstrap';

const Subscribe = React.createClass({
    render(){
        let form;
        if (this.props.title){
            form = (
                <FormGroup>
                  <p>{this.props.about.newsletter.signUpTitleText}</p>
                  <InputGroup>
                    <FormControl type="text" placeholder={this.props.about.newsletter.signUpPlaceholder} />
                    <InputGroup.Button>
                      <div className="button" >{this.props.about.newsletter.signUpButtonText}</div>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
            )
        } else {
            form = (
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder={this.props.about.newsletter.signUpPlaceholder} />
                    <InputGroup.Button>
                      <div className="button" >{this.props.about.newsletter.signUpButtonText}</div>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
            )
        }
        return (
            <div>
                { form }
            </div>
        )
    }
});

export default Subscribe;
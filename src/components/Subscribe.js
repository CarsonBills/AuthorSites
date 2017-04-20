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
                  <p>{this.props.title}</p>
                  <InputGroup>
                    <FormControl type="text" placeholder="Enter Your Email Address" />
                    <InputGroup.Button>
                      <div className="button" >Sign Up</div>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
            )
        } else {
            form = (
                <FormGroup>
                  <InputGroup>
                    <FormControl type="text" placeholder="Enter Your Email Address" />
                    <InputGroup.Button>
                      <div className="button" >Sign Up</div>
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
import React from 'react';
import {gaClick} from '../components/gaClick';
import { Link } from 'react-router';
import { FormGroup, InputGroup, FormControl, Col, Button } from 'react-bootstrap';

import {Component, PropTypes, getDOMNode} from 'react';
import validation from 'react-validation-mixin';
import strategy from 'react-validatorjs-strategy';
import classnames from 'classnames';



class Subscribe extends Component {

  constructor(props) {
    super(props);
    this.validatorTypes = strategy.createSchema(
        // First parameter is a list of rules for each element name 
        {
            email: 'required|email'
        },
        // Second parameter is optional and is a list of custom error messages for elements 
        {
            "email": "Sorry, your :attribute is invalid. Please try again."
        }
    );
    this.getValidatorData = this.getValidatorData.bind(this);
    this.renderHelpText = this.renderHelpText.bind(this);
    this.getClasses = this.getClasses.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  getValidatorData() {
    return {
      email: this.refs.email.value
    };
  }

  render() {
    let form;

    if (this.props.title){
      form = (
        <FormGroup onSubmit={this.onSubmit}>
          <p>{this.props.siteConfig.newsletter.signUpTitleText}</p>
          <InputGroup>
            <div className="Email">
              <input
                ref='email'
                type='text'
                className='form-control'
                placeholder={this.props.siteConfig.newsletter.signUpPlaceholder}
                onBlur={this.props.handleValidation('email')}
              />
              {this.props.getValidationMessages('email')}
            </div>
            <InputGroup.Button>
              <div onClick={this.onSubmit} className="button" >{this.props.siteConfig.newsletter.signUpButtonText}</div>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      )
    } else {

      form = (
        <FormGroup onSubmit={this.onSubmit}>
          <InputGroup>
            <div className="Email">
              <input
                ref='email'
                type='text'
                className='form-control'
                placeholder={this.props.siteConfig.newsletter.signUpPlaceholder}
                onBlur={this.props.handleValidation('email')}
              />
              {this.props.getValidationMessages('email')}
            </div>
            <InputGroup.Button>
              <div onClick={this.onSubmit} className="button" >{this.props.siteConfig.newsletter.signUpButtonText}</div>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      )
    }

    return (
      <div>
        { form }
      </div>
    );
  }

  renderHelpText(message) {
    return (
     <span className='help-block'>{message}</span>
    );
  }

  getClasses(field) {
    return classnames({
      'form-group': true,
      'has-error': !this.props.isValid(field)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const onValidate = (error) => {
      if (error) {
        //form has errors; do not submit
        console.log("MANY ERRORS")
      } else {
        //no errors; submit form
        console.log("NO ERRORS")
      }
    };
    this.props.validate(onValidate);
  }
}

Subscribe.propTypes = {
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  handleValidation: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func,
};

module.exports = validation(strategy)(Subscribe);

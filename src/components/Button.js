import React from 'react';
import {gaClick} from '../helpers/functions'
import { Link } from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Book = React.createClass({

    render(){
        let button;
        if (this.props.text === "Buy Now"){
            button = (
                <DropdownButton className="button" title={this.props.text} id='dropdown-basic' >
                    {this.props.dropDownLinks.map((link, i) => <MenuItem>{link.retailer}</MenuItem>)}
                </DropdownButton>
            )
        } else if (this.props.type === "see-all") {
            button = (
                <Link to={this.props.link} onClick={()=>{gaClick.handleClick()}}>
                    <div className="see-all" >{this.props.text} <i className="fa fa-chevron-right" aria-hidden="true"></i></div>
                </Link>                 
            )
        }
        return (
            <div>
                { button }
            </div>
        )
    }
});

export default Book;
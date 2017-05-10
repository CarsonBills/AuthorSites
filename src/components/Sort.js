import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Sort = React.createClass({
    sort(field){
        this.props.sortBy(field);
    },
    render(){
        console.log(this.props.articles)
        return (
            <div className="sort-by">
                <DropdownButton className="button" title='Sort By' id='dropdown-basic' >
                    <MenuItem onClick={this.sort.bind(this,'date')}>Date</MenuItem>
                    <MenuItem onClick={this.sort.bind(this,'articleTitle')}>Title A-Z</MenuItem>
                    <MenuItem onClick={this.sort.bind(this,'publisher')}>Publication A-Z</MenuItem>
                </DropdownButton>
            </div>
        )
    }
});

export default Sort;
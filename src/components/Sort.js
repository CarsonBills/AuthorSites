import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Sort = (props) => {
        return (
            <div className="sort-by">
                <DropdownButton className="button" title='Sort By' id='dropdown-basic' >
                    <MenuItem onClick={()=>props.sort('date')}>Date</MenuItem>
                    <MenuItem onClick={()=>props.sort('articleTitle')}>Title A-Z</MenuItem>
                    <MenuItem onClick={()=>props.sort('publisher')}>Publication A-Z</MenuItem>
                </DropdownButton>
            </div>
        )
    }
export default Sort;
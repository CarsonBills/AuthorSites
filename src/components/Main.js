import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render(){
        return (
            <div>
                <div className="Nav">
                    <div>
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to="/books">Books</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/videos">Videos</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        Social Links
                    </div>
                </div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
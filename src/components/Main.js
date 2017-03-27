import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
    render(){
        return (
            <div>
                <div className="Nav">
                    <div style={{'display': "inline-block", width: "80%", background: 'lightgrey'}}>
                        <ul>
                            <li style={{'display':'inline-block'}}><Link to='/about'>About</Link></li>
                            <li style={{'display':'inline-block'}}><Link to="/books">Books</Link></li>
                            <li style={{'display':'inline-block'}}><Link to="/events">Events</Link></li>
                            <li style={{'display':'inline-block'}}><Link to="/videos">Videos</Link></li>
                            <li style={{'display':'inline-block'}}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div style={{'display': "inline-block", width: "20%", background: 'grey'}}>
                        <ul>
                            <li style={{'display':'inline-block'}}><Link style={{'color':'navy'}} target="_blank" to="https://www.youtube.com/"><i className="fa fa-youtube-play" ></i></Link></li>
                            <li style={{'display':'inline-block'}}><Link style={{'color':'navy'}} target="_blank" to="https://www.instagram.com/"><i className="fa fa-instagram" ></i></Link></li>
                            <li style={{'display':'inline-block'}}><Link style={{'color':'navy'}} target="_blank" to="https://www.twitter.com/"><i className="fa fa-twitter" ></i></Link></li>
                            <li style={{'display':'inline-block'}}><Link style={{'color':'navy'}} target="_blank" to="https://www.facebook.com/"><i className="fa fa-facebook-official" ></i></Link></li>
                        </ul>
                    </div>
                </div>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
});

export default Main;
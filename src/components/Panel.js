import React from 'react';
import { Link } from 'react-router';

class Panel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
    }
    render(){
        return (
            <div className={this.props.isActive ? 'flying-panel move' : 'flying-panel'} >
                <div className="title">
                    <Link to='/'><span className="home"><span className="first">{this.props.siteConfig.authorFirstName}</span> <span className="second">{this.props.siteConfig.authorLastName}</span></span></Link>
                </div>
                <div className="nav">
                    {this.props.siteConfig.header.map((link, i) => <li key={i}><Link to={link.title}>{link.title}</Link></li>)}
                </div>
                <div className="social">
                    <p>{this.props.siteConfig.social.socialLinksTitle}</p>
                    <ul>
                        {this.props.siteConfig.social.socialMediaLinks.map((link, i) => <li key={i}><Link target="_blank" to={link.url}><i className={link.type} ></i></Link></li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Panel;
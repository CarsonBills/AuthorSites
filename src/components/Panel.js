import React from 'react';
import { Link } from 'react-router';

const Panel = React.createClass({
    getInitialState: function(){
        return {
            isActive: false
        };
    },
    render(){
        return (
            <div className={this.props.isActive ? 'flying-panel move' : 'flying-panel'} >
                <div className="title">
                    <Link to='/'><span className="home"><span className="first">{this.props.siteConfig.header.titleFirst}</span> <span className="second">{this.props.siteConfig.header.titleSecond}</span></span></Link>
                </div>
                <div className="nav">
                    {this.props.siteConfig.header.type.map((link, i) => <li key={i}><Link to={link}>{link}</Link></li>)}
                </div>
                <div className="social">
                    <p>{this.props.siteConfig.social.socialLinksTitle}</p>
                    <ul>
                        {this.props.siteConfig.social.links.map((link, i) => <li key={i}><Link target="_blank" to={link.url}><i className={link.icon} ></i></Link></li>)}
                    </ul>
                </div>
            </div>
        )
    }
});

export default Panel;
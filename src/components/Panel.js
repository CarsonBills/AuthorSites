import React from 'react';
import { Link } from 'react-router';

class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }
    render() {
        return (
            <div className={this.props.isActive ? 'flying-panel move' : 'flying-panel'} >
                <div className="title">
                    {this.props.siteConfig.length ? <Link to='/'><span className="home"><span className="first">{this.props.siteConfig[0].data.authorFirstName}</span> <span className="second">{this.props.siteConfig[0].data.authorLastName}</span></span></Link> : null}
                </div>
                <div className="nav">
                    {this.props.siteConfig.length ? this.props.siteConfig[0].data.header.map(
                        (link, i) => {
                            if (link.title.toUpperCase() === "HOME")
                                return null;
                            else
                                return <li key={i}><Link to={link.title}>{link.title}</Link></li>
                        }) : null}
                </div>
                <div className="social">
                    {this.props.siteConfig.length ? <p>{this.props.siteConfig[0].data.social.socialLinksTitle}</p> : null}
                    <ul>
                        {this.props.siteConfig.length ? this.props.siteConfig[0].data.social.socialMediaLinks.map((link, i) => <li key={i}><Link target="_blank" to={link.url}><i className={link.type} ></i></Link></li>) : null}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Panel;
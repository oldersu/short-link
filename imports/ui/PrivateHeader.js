import React from 'react';
import { Accounts } from 'meteor/accounts-base';
export default class PrivateHeader extends React.Component{
    render() {
        return(
            <div className="header">
                <div className="header__content">
                    <h1 className="header__title">{this.props.title}</h1>
                    <button  className="button--link-text" onClick={() => Accounts.logout()}>Logout</button>
                </div>
            </div>
        )
    }
}
PrivateHeader.propTypes={
 title:React.PropTypes.string.isRequired
};

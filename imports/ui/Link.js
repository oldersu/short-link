import React from 'react';
import {Meteor} from 'meteor/meteor';



import LinksList from  './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class Link extends React.Component{
  render(){
    return(
      <div>
        <PrivateHeader title="Your Links"/>
        <div className="page-content">
          <LinksListFilters/>
          <LinksList/>
          <AddLink/>
        </div>
      </div>
    );
  }
}
import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router,Route, browserHistory, Link} from 'react-router';

import Links from '../ui/Link.js';
import Signup from '../ui/Signup.js';
import NotFound from '../ui/NotFound.js';
import Login from '../ui/Login.js';


const unauthenticatedPages=['/','/signup'];
const anthenticatedPages=['links'];

//const browserHistory = createBrowserHistory();
const onEnterPublicPage=()=>{
  if(Meteor.userId()){
    browserHistory.replace('/links');
  }
}
const onEnterPrivatePage=()=>{
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
}
export const onAuthChange=(isAuthenticated)=>{
    const pathname=browserHistory.getCurrentLocation().pathname;
    const isUnauthenticatedPage=unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage=anthenticatedPages.includes(pathname);
    if(isUnauthenticatedPage&&isAuthenticated){
      browserHistory.replace('/links');
    }else if(isAuthenticatedPage&&!isAuthenticated){
      browserHistory.replace('/');
    }
};
export const routes=(
  <Router history={browserHistory}>
      <Route exact path="/" component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Links} onEnter={onEnterPrivatePage}/>
      <Route path="*" component={NotFound}/>
  </Router>
);


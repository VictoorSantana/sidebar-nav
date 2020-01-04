import React, { Component } from 'react';
import AroundNav from '../components/aroundnav';

const settingsNav = {
    titlesidebar: 'My App',
    titlecontent: 'Title content',
    buttonsidebar: [
        { action: 'LOGOUT', icon: 'fas fa-star', color: '#8894ec' },
        { action: 'BACK', icon: 'fas fa-star', color: '#fe2f2f' },
        { action: 'HOME', icon: 'fas fa-star', color: '#ffc35c' }
    ],
    actionroutes: [
        {
            title: 'Route init',
            items: [
                {action: 'IDK', icon: 'fas fa-star', text: 'link test', legend: 'I dont know'},
                {action: 'IDK2', icon: 'fas fa-star', text: 'whatever', legend: 'I dont know'},
            ]
        },
    ]
  };

class IndexRoutes extends Component {
    state = {  }


    routinehandle = action => {
        console.log(action);
    }

    render() { 
        return ( 
        <AroundNav settings={settingsNav} routine={this.routinehandle}>
            <h1 >test</h1>
        </AroundNav> );
    }
}
 
export default IndexRoutes;
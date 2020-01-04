import React, { Component } from 'react';
import './aroundnav.css';


class AroundNav extends Component {

    constructor(props) {
        super(props);
    }

    state = { }

    componentDidMount() {
        const btnToggle = document.getElementsByClassName('lksmt-sidebartoggle');        
        const itemLink = document.getElementsByClassName('lksmt-sidebar-item-top');

        Array.from(btnToggle).forEach(function(elem) {
            elem.addEventListener('click', function() {  
                const sidebar = document.getElementById('lksmt-sidebar');
                const contentSide = document.getElementById('lksmt-contentPage');            

                if(sidebar.classList.contains('lksmt-sidebar-closed')) {
                    sidebar.classList.remove('lksmt-sidebar-closed');
                    sidebar.classList.add('lksmt-sidebar-opened');
                    contentSide.classList.add('lksmt-content-less');
                } else {
                    sidebar.classList.remove('lksmt-sidebar-opened');
                    sidebar.classList.add('lksmt-sidebar-closed');
                    contentSide.classList.remove('lksmt-content-less');
                }
            });
        });        

        Array.from(itemLink).forEach(function(itemLinkElem) {
            itemLinkElem.addEventListener('click', function() {  
                const parentelem = this.parentElement;     

                if(parentelem.classList.contains('lksmt-sidebar-item-closed')) {
                    parentelem.classList.remove('lksmt-sidebar-item-closed');
                    parentelem.classList.add('lksmt-sidebar-item-opened');
                } else {
                    parentelem.classList.remove('lksmt-sidebar-item-opened');
                    parentelem.classList.add('lksmt-sidebar-item-closed');
                }
            });
        });

    }    
    /*
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
    */

    render() { 
        return ( 
            <React.Fragment>
                     <div className="lksmt-sidebar lksmt-sidebar-closed" id="lksmt-sidebar" ref={el => (this.div = el)}>
                        <h1 className="lksmt-sidebar-title"> {this.props.settings.titlesidebar} </h1>

                        <div className="lksmt-sidebar-tools">
                            <button type="button" className="lksmt-sidebar-tools-btn" onClick={e => this.props.routine(this.props.settings.buttonsidebar[0].action)} style={{color:'#8894ec'}}> <i className="fas fa-star"></i> </button>
                            <button type="button" className="lksmt-sidebar-tools-btn" onClick={e => this.props.routine(this.props.settings.buttonsidebar[1].action)} style={{color:'#fe2f2f'}}> <i className="fas fa-star"></i> </button>
                            <button type="button" className="lksmt-sidebar-tools-btn" onClick={e => this.props.routine(this.props.settings.buttonsidebar[2].action)} style={{color:'#ffc35c'}}> <i className="fas fa-star"></i> </button>
                            <button type="button" className="lksmt-sidebar-tools-btn lksmt-sidebartoggle" style={{color:'#b5ff3c'}} id="lksmt-btnclosebar"> <i className="fas fa-align-left"></i> </button>
                        </div>

                    <div className="lksmt-sidebar-content">
                        {
                            this.props.settings.actionroutes.map((item) =>
                                <div className="lksmt-sidebar-item lksmt-sidebar-item-closed" key={Math.random(2,10)}>
                                    <div className="lksmt-sidebar-item-top">
                                        <i className="fas fa-star"></i>
                                        <p className="lksmt-sidebar-item-top-title"> {item.title} </p>

                                        <i className="fas fa-sort-down lksmt-sidebar-item-top-i"></i>
                                    </div>

                                    {
                                        item.items.map((link) =>                                                                             
                                            <a className="lksmt-sidebar-item-item" key={Math.random(2,10)} title={link.legend} onClick={e => this.props.routine(link.action)}>  <i className={link.icon}></i>  { link.text } </a>
                                        )
                                    }                                    
                                </div>
                            )
                        }                        
                    </div>

                </div>

                <div className="lksmt-content" id="lksmt-contentPage">
                    <div className="lksmt-content-nav">
                        <button type="button" className="lksmt-content-nav-toggle lksmt-sidebartoggle" id="lksmt-btntogglebar">
                            <i className="fas fa-bars"></i>
                        </button>

                        <div>
                            <button type="button" className="lksmt-content-nav-rightbtn" title={this.props.settings.optionsbtn[0].legend} onClick={e => this.props.routine(this.props.settings.optionsbtn[0].action)}>
                                <i className="fas fa-star"></i>
                            </button>
                            <button type="button" className="lksmt-content-nav-rightbtn" title={this.props.settings.optionsbtn[0].legend} onClick={e => this.props.routine(this.props.settings.optionsbtn[1].action)}>
                                <i className="fas fa-star"></i>
                            </button>
                        </div>
                    </div>

                    <div className="lksmt-content-body">
                        <h2 className="lksmt-content-body-title">this page title</h2>
                        {this.props.children}

                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default AroundNav;
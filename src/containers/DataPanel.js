import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from '../AppTopbar';
import {AppBreadcrumb} from '../AppBreadcrumb';
import {AppFooter} from '../AppFooter';
import {AppMenu} from '../AppMenu';
import {AppConfig} from '../AppConfig';
import {withRouter} from 'react-router';
import {Route} from 'react-router-dom';
import {Dashboard} from '../components/Dashboard';
import {FormsDemo} from '../components/FormsDemo';
import {SampleDemo} from '../components/SampleDemo';
import {DataDemo} from '../components/DataDemo';
import {PanelsDemo} from '../components/PanelsDemo';
import {OverlaysDemo} from '../components/OverlaysDemo';
import {MenusDemo} from '../components/MenusDemo';
import {MessagesDemo} from '../components/MessagesDemo';
import {ChartsDemo} from '../components/ChartsDemo';
import {MiscDemo} from '../components/MiscDemo';
import {EmptyPage} from '../components/EmptyPage';
import {Documentation} from '../components/Documentation';
import {Panel} from 'primereact/components/panel/Panel';
import {Checkbox} from 'primereact/components/checkbox/Checkbox';
import {Editor} from 'primereact/components/editor/Editor'

import {Chart} from 'primereact/chart';

import {ProgressBar} from 'primereact/components/progressbar/ProgressBar';
import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../App.css';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';



class Datapanel extends Component {

    constructor() {
        super();
        this.state = {
            voteAPI: [],

            layoutMode: 'static',
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            darkTheme: false,
            menuActive: false,
            themeColor: 'blue',
            configDialogActive: false,

            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: '#03A9F4'
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        borderColor: '#FFC107'
                    }
                ]
            },

            pieData: {
                labels: ['Alexandria Ocasio-Cortez','John Cummings'],
                datasets: [
                    {
                        data: [10, 10],
                        backgroundColor: [
                            "#FFC107",
                            "#03A9F4",
                            "#4CAF50"
                        ],
                        hoverBackgroundColor: [
                            "#FFE082",
                            "#81D4FA",
                            "#A5D6A7"
                        ]
                    }]
            },
        };

        

        
        
 //////////////// Click Handlers //////
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarMenuButtonClick = this.onTopbarMenuButtonClick.bind(this);
        this.onThemeChange = this.onThemeChange.bind(this);
        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.changeMenuMode = this.changeMenuMode.bind(this);
        this.changeMenuColor = this.changeMenuColor.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.onConfigButtonClick = this.onConfigButtonClick.bind(this);
        this.onConfigCloseClick = this.onConfigCloseClick.bind(this);
        this.onConfigClick = this.onConfigClick.bind(this);
        this.createMenu();
    }

  

    onMenuClick(event) {
        this.menuClick = true;
    }

    onMenuButtonClick(event) {
        this.menuClick = true;
        this.setState(({
            topbarMenuActive: false
        }));

        if (this.state.layoutMode === 'overlay' && !this.isMobile()) {
            this.setState({
                overlayMenuActive: !this.state.overlayMenuActive
            });
        } else {
            if (this.isDesktop())
                this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
            else
                this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
        }

        event.preventDefault();
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        this.hideOverlayMenu();
        event.preventDefault();
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if (this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();
    }

    onMenuItemClick(event) {
        if (!event.item.items) {
            this.hideOverlayMenu();
        }
        if (!event.item.items && (this.isHorizontal() || this.isSlim())) {
            this.setState({
                menuActive: false
            })
        }
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });
    }

    onConfigButtonClick(event){
        this.configClick = true;
        this.setState({configDialogActive: !this.state.configDialogActive})
    }

    onConfigCloseClick(){
        this.setState({configDialogActive: false})
    }

    onConfigClick(){
        this.configClick = true;
    }

    onDocumentClick(event) {
        if (!this.topbarItemClick) {
            this.setState({
                activeTopbarItem: null,
                topbarMenuActive: false
            });
        }

        if (!this.configClick) {
            this.setState({configDialogActive: false});
        }

        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.setState({
                    menuActive: false
                })
            }

            this.hideOverlayMenu();
        }

        this.topbarItemClick = false;
        this.menuClick = false;
        this.configClick = false;
    }

    hideOverlayMenu() {
        this.setState({
            overlayMenuActive: false,
            staticMenuMobileActive: false
        })
    }
////// FUNCTIONS for different displays///////////
    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isOverlay() {
        return this.state.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.state.layoutMode === 'horizontal';
    }

    isSlim() {
        return this.state.layoutMode === 'slim';
    }

    changeMenuMode(event) {
        this.setState({
            layoutMode : event.menuMode,
            staticMenuDesktopInactive: false,
            overlayMenuActive: false
        });
    }
// ////////Changing the Theme from Dark to Light///////
    changeMenuColor(event) {
        this.setState({darkTheme : event.darkTheme})
        this.onThemeChange();
    }

    onThemeChange() {
        const themeLink = document.getElementById('theme-css');
        const href = themeLink.href;
        const themeFile = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.'));
        const themeTokens = themeFile.split('-');
        const themeName = themeTokens[1];
        const themeMode = themeTokens[2];
        const newThemeMode = (themeMode === 'dark') ? 'light' : 'dark';

        this.changeTheme({originalEvent: null, theme:themeName + '-' + newThemeMode});
    }

    changeTheme(event) {
        this.setState({themeColor: event.theme.split('-')[0]})
        this.changeStyleSheetUrl('layout-css', event.theme, 'layout');
        this.changeStyleSheetUrl('theme-css', event.theme, 'theme');
    }

    changeStyleSheetUrl(id, value, prefix) {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);

        if (value.indexOf('light') !== -1) {
            this.setState({darkTheme: true});
        } else {
            this.setState({darkTheme: false});
        }
    }

    // Internet Explorer Functions////
    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent)
    }

    replaceLink(linkElement, href) {
        const id = linkElement.getAttribute('id');
        const cloneLinkElement = linkElement.cloneNode(true);

        if(this.isIE()){
            linkElement.setAttribute('href', href);
        }
        else {
            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }


    // /////Functions and Variables that create the Side Menu Display// 200 lines////

    createMenu() {
        this.menu = [
            // Dashboard Button/Home Icon/ links to landing page//
            {label: 'Landing Page', icon: 'pi pi-fw pi-home', to: '/'},
            {
                // Menu Display Options//
            //     label: 'Menu', icon: 'pi pi-fw pi-bars',
            //     items: [
            //         {
            //             label: 'Horizontal Menu',
            //             icon: 'pi pi-fw pi-bars',
            //             command: () => this.setState({layoutMode: 'horizontal'})
            //         },
            //         {
            //             label: 'Overlay Menu',
            //             icon: 'pi pi-fw pi-bars',
            //             command: () => this.setState({layoutMode: 'overlay'})
            //         },
            //         {
            //             label: 'Static Menu',
            //             icon: 'pi pi-fw pi-bars',
            //             command: () => this.setState({layoutMode: 'static'})
            //         },
            //         {label: 'Slim Menu', icon: 'pi pi-fw pi-bars', command: () => this.setState({layoutMode: 'slim'})}
            //     ]
            // },
            // {
                // Dark Theme and all of its color options///
                label: 'Theme Selector', icon: 'pi pi-fw pi-circle-on', badge: '',
                items: [
                    {
                        label: 'Blue', icon: 'pi pi-fw pi-palette', styleClass: 'blue-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'blue-dark'})
                        }
                    },
                    {
                        label: 'Green', icon: 'pi pi-fw pi-palette', styleClass: 'green-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'green-dark'})
                        }
                    },
                    {
                        label: 'Cyan', icon: 'pi pi-fw pi-palette', styleClass: 'cyan-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'cyan-dark'})
                        }
                    },
                    {
                        label: 'Purple', icon: 'pi pi-fw pi-palette', styleClass: 'purple-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'purple-dark'})
                        }
                    },
                    {
                        label: 'Indigo', icon: 'pi pi-fw pi-palette', styleClass: 'indigo-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'indigo-dark'})
                        }
                    },
                    {
                        label: 'Yellow', icon: 'pi pi-fw pi-palette', styleClass: 'yellow-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'yellow-dark'})
                        }
                    },
                    {
                        label: 'Orange', icon: 'pi pi-fw pi-palette', styleClass: 'orange-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'orange-dark'})
                        }
                    },
                    {
                        label: 'Pink', icon: 'pi pi-fw pi-palette', styleClass: 'pink-theme', command: (event) => {
                            this.changeTheme({originalEvent:event, theme:'pink-dark'})
                        }
                    }

                ]
            },
            // /////Commented And Disabled the Option For Light Theme//
            // {
            //     label: 'Light', icon: 'pi pi-fw pi-circle-off', badge: '8',
            //     items: [
            //         {
            //             label: 'Blue', icon: 'pi pi-fw pi-palette', styleClass: 'blue-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'blue-light'})
            //             }
            //         },
            //         {
            //             label: 'Green', icon: 'pi pi-fw pi-palette', styleClass: 'green-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'green-light'})
            //             }
            //         },
            //         {
            //             label: 'Cyan', icon: 'pi pi-fw pi-palette', styleClass: 'cyan-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'cyan-light'})
            //             }
            //         },
            //         {
            //             label: 'Purple', icon: 'pi pi-fw pi-palette', styleClass: 'purple-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'purple-light'})
            //             }
            //         },
            //         {
            //             label: 'Indigo', icon: 'pi pi-fw pi-palette', styleClass: 'indigo-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'indigo-light'})
            //             }
            //         },
            //         {
            //             label: 'Yellow', icon: 'pi pi-fw pi-palette', styleClass: 'yellow-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'yellow-light'})
            //             }
            //         },
            //         {
            //             label: 'Orange', icon: 'pi pi-fw pi-palette', styleClass: 'orange-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'orange-light'})
            //             }
            //         },
            //         {
            //             label: 'Pink', icon: 'pi pi-fw pi-palette', styleClass: 'pink-theme', command: (event) => {
            //                 this.changeTheme({originalEvent:event, theme:'pink-light'})
            //             }
            //         }

            //     ]
            // },
            
            // All the Sample Components being Demo'd We may be able to repurpose///
            //////////Disabling/////////
            {
                label: 'Historical Voting Data', icon: 'pi pi-fw pi-clone',
                items: [
                    // {label: 'Sample Page', icon: 'pi pi-fw pi-desktop', to: '/sample'},
                    // {label: 'Forms', icon: 'pi pi-fw pi-check-square', to: '/forms'},
                    // {label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
                    // {label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
                    // {label: 'Overlays', icon: 'pi pi-fw pi-images', to: '/overlays'},
                    // {label: 'Menus', icon: 'pi pi-fw pi-bars', to: '/menus'},
                    // {label: 'Messages', icon: 'pi pi-fw pi-info-circle', to: '/messages'},
                    // {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
                    // {label: 'Misc', icon: 'pi pi-fw pi-globe', to: '/misc'}
                ]
            },
            
            
            {
                label: 'Current State Data', icon: 'pi pi-fw pi-clone',
                items: [
                    // {label: 'Empty Page', icon: 'pi pi-fw pi-ticket', to: '/empty'},
                    // {label: 'Landing', icon: 'pi pi-fw pi-eye', url: 'assets/pages/landing.html', target: '_blank'},
                    // {label: 'Login', icon: 'pi pi-fw pi-user', to: '/login'},
                    // {label: 'Error', icon: 'pi pi-fw pi-times', to: '/error'},
                    // {label: 'Not Found', icon: 'pi pi-fw pi-ban', to: '/notfound'},
                    // {label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'}
                ]
            },
            
            // Examples of Menu Sub menu Categories////
            // {
            //     label: 'Menu Hierarchy', icon: 'pi pi-fw pi-sort-amount-down-alt',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-angle-right',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-angle-right',
            //                     items: [
            //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-angle-right'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-angle-right',
            //                     items: [
            //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-angle-right'}
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-angle-right',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-angle-right',
            //                     items: [
            //                         {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-angle-right'},
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-angle-right',
            //                     items: [
            //                         {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-angle-right'},
            //                         {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-angle-right'}
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
            
            // Documentation///
            {
                label: 'Docs', icon: 'pi pi-fw pi-question', command: () => {
                    window.location = "#/documentation"
                }
            }
        ];
    }


    //////////Rendering functions/////////
    componentDidMount() {
        fetch('http://localhost:3000/votes')
            .then(res => res.json())
            .then(voteAPI => this.setState({voteAPI}))
            
            // pieData: {
            //     labels: ['Alexandria Ocasio-Cortez','John Cummings'],
            //     datasets
    }

    // componentDidUpdate(prevProps, prevState) {
    //     prevState
    // }
    

    presidentVotes = () => {
        let data =  this.state.voteAPI
        let result = data.filter((ele)=> ele.candidate_id === 1 || ele.candidate_id === 2)
        return result.length
    }

    findBidenVotes = () => {
        let data =  this.state.voteAPI
        let result = data.filter((ele)=> ele.candidate_id === 1)
        return result.length
    }
    
    
    findTrumpVotes = () => {
        let data =  this.state.voteAPI
        let result = data.filter((ele)=> ele.candidate_id === 2)
        return result.length
    }

    aoc = () => {
        let data =  this.state.voteAPI
        let result = data.filter((ele)=> ele.candidate_id === 5)
        return result.length
    }
    
    jcumm = () => {
        let data =  this.state.voteAPI
        let result = data.filter((ele)=> ele.candidate_id === 6)
        return result.length
    }
     
    
    


    render() {
        console.log(this.state.voteAPI)
        const layoutClassName = classNames('layout-wrapper', {
            'layout-horizontal': this.state.layoutMode === 'horizontal',
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-slim': this.state.layoutMode === 'slim',
            'layout-static-inactive': this.state.staticMenuDesktopInactive,
            'layout-mobile-active': this.state.staticMenuMobileActive,
            'layout-overlay-active': this.state.overlayMenuActive
        });
        const AppBreadCrumbWithRouter = withRouter(AppBreadcrumb);

        return (
            <div className={layoutClassName} onClick={this.onDocumentClick}>

                <AppTopbar darkTheme={this.state.darkTheme} onThemeChange={this.onThemeChange}
                           topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem}
                           onMenuButtonClick={this.onMenuButtonClick}
                           onTopbarMenuButtonClick={this.onTopbarMenuButtonClick}
                           onTopbarItemClick={this.onTopbarItemClick}/>

        {/* SideBar Menu  */}

                <div className='layout-menu-container' onClick={this.onMenuClick}>
                    <div className="layout-menu-content">
                        <div className="layout-menu-title">MENU</div>
                        <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick}
                                 onRootMenuItemClick={this.onRootMenuItemClick}
                                 layoutMode={this.state.layoutMode} active={this.state.menuActive}/>
                        <div className="layout-menu-footer">
                            <div className="layout-menu-footer-title">STATES</div>

                            <div className="layout-menu-footer-content">
                                Maybe Drop Down Options For State Selection Here?
                                <InputText />
                                <Dropdown />
                                {/* <ProgressBar value={50} showValue={false}></ProgressBar>
                                Today
                                <ProgressBar value={80} showValue={false}></ProgressBar>
                                Overall */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layout-content">
                    <AppBreadCrumbWithRouter/>

                    <div className="layout-content-container">
                        <Route path="/" exact component={Dashboard}/>
                        <Route path="/forms" component={FormsDemo}/>
                        <Route path="/sample" component={SampleDemo}/>
                        <Route path="/data" component={DataDemo}/>
                        <Route path="/panels" component={PanelsDemo}/>
                        <Route path="/overlays" component={OverlaysDemo}/>
                        <Route path="/menus" component={MenusDemo}/>
                        <Route path="/messages" component={MessagesDemo}/>
                        <Route path="/charts" component={ChartsDemo}/>
                        <Route path="/misc" component={MiscDemo}/>
                        <Route path="/empty" component={EmptyPage}/>
                        <Route path="/documentation" component={Documentation}/>
                    </div>
                    
                    <div className='p-grid p-fluid'>
                        <div className="p-col-12 p-lg-12">
                                
                            <div className="p-grid dashboard">
                                {/* The Light Blue box */}
                                <div className="p-col-8 p-md-4">
                                    <div className="overview-box overview-box-1"><h1>TOTAL BALLOTS</h1>
                                        <div className="overview-value">{this.state.voteAPI.length}</div>
                                        <div className="overview-ratio">
                                            <div className="overview-direction">
                                                <i className="pi pi-arrow-up" ></i>
                                            </div>
                                            <div className="overview-ratio-value">
                                                64%
                                            </div>
                                        </div>
                                        <img src="assets/layout/images/dashboard/graph-blue.svg" alt="apollo-layout"/>
                                    </div>
                                </div>
                                {/*  Green Box */}
                                <div className="p-col-12 p-md-4">
                                    <div className="overview-box overview-box-2">
                                        <h1>Votes Ballots for President</h1>
                                        <div className="overview-value">
                                            {this.presidentVotes()}
                                        </div>
                                        <div className="overview-ratio">
                                            {/* <div className="overview-direction">
                                                <i className="pi pi-arrow-up" ></i>
                                            </div> */}
                                            <div className="overview-ratio-value">
                                                NY
                                            </div>
                                        </div>
                                        <img src="assets/layout/images/dashboard/graph-green.svg" alt="apollo-layout"/>
                                    </div>
                                </div>
                                {/* Orange Box */}
                                <div className="p-col-12 p-md-4">
                                    <div className="overview-box overview-box-3">
                                        <h1>Presidential Race</h1>
                                        <div className="overview-value">Joe Biden({this.findBidenVotes()}) <br></br>Donald Trump({this.findTrumpVotes()}) </div>
                                        
                                        <div className="overview-ratio">
                                            <div className="overview-direction">
                                                <i className="pi pi-arrow-up"></i>
                                            </div>
                                            <div className="overview-ratio-value">
                                                R
                                            </div>
                                        </div>
                                        
                                        <img src="assets/layout/images/dashboard/graph-yellow.svg" alt="apollo-layout"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                                
                {/* Line Chart */}
                            
                       
                            <div className="p-col ">
                                <div className="p-col-8 p-lg-6 card">
                                    <h1 className="centerText">Linear Chart</h1>
                                    <Chart type="line" data={this.state.lineData}/>
                                </div>
                            </div>
                            {/* Pie Chart */}

                            <div className="card">
                        <h1 className="centerText">Pie Chart</h1>
                        <Chart type="pie" data={this.state.pieData} height="150"/>
                    </div> 
                        
                    </div>  

                    {/* <AppFooter/> */}

                    {this.state.staticMenuMobileActive && <div className="layout-mask"></div>}
                </div>


                <AppConfig layoutMode={this.state.layoutMode} darkTheme={this.state.darkTheme} themeColor={this.state.themeColor}
                           changeMenuMode={this.changeMenuMode} changeMenuColor={this.changeMenuColor} changeTheme={this.changeTheme}
                           onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick}
                           onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>
            </div>
        );
    }
}

export default Datapanel;

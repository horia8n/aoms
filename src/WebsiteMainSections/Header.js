import React, {Component} from 'react';

class Header extends Component {

    constructor(){
        super();
        this.state = {
            substate: false
        };
    }
    render(){
        return (
            <div class="header">
                <div class="container-flex">
                    <div class="row">
                        <div class="col-2 header-col logo align-left"><img src="images/logo.png" alt=""/></div>
                        <div class="col-9 col-lg-10 row">
                            <ul class="a-j menu row col-lg-0">
                                <li>Widgets
                                    <ul>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                    </ul>
                                </li>
                                <li>Galery
                                    <ul>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                    </ul>
                                </li>
                                <li>Lists
                                    <ul>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                    </ul>
                                </li>
                                <li>Tags
                                    <ul>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                    </ul>
                                </li>
                                <li>Text & Pictures
                                    <ul>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                        <li>Widgets</li>
                                    </ul>
                                </li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                            <div class="menu-mobile-icon col-0 col-lg-12 a-r">&#9776;</div>
                        </div>
                        <div class="col-1 col-lg-0 header-col align-right relative logo2">
                            <img class="absolute" src="images/logo2.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Header;
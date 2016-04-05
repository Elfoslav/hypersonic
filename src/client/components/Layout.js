import React from 'react';
import _ from 'underscore';
import { Navbar, Modal, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import VNav from '../components/navigation/VNav';
import NotificationSystem from 'react-notification-system';
import UserBadge from '../components/UserBadge.js';

var Layout = React.createClass({

    componentDidMount: function() {
        this.props.menuActions.loadMenu();
        this.props.userActions.loadUser();
        
        this._notificationSystem = this.refs.notificationSystem;
    },

    /**
     * Handles when there's a new notification
     */
    handleNotification(notification) {
        if(this._notificationSystem) {
            notification = _.extend({ position: 'bl'}, notification);
            this._notificationSystem.addNotification(notification);
        }
    },

    render: function() {

        // load modals
        let modals = <div>
            {
                this.props.modal.map((m, i) => {
                    return <div key={`modal-${i}`} className="static-modal">
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>{m.title}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                {m.text}
                            </Modal.Body>

                            <Modal.Footer>
                                <Button>Close</Button>
                                <Button bsStyle="primary">Save changes</Button>
                            </Modal.Footer>

                        </Modal.Dialog>
                    </div>
                })
            }
        </div>;


        return (
            <div>
                <Navbar  fluid staticTop>
                    <Nav className="navbar-brand">
                        <a hfef="/">Gearz app</a>
                    </Nav>
                    <Nav pullRight>
                        <UserBadge user={this.props.user.data} />
                    </Nav>
                </Navbar>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <VNav nodes={this.props.menu.data} />
                        </div>
                        <div className="col-md-10">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <NotificationSystem ref="notificationSystem" />
                {modals}
                {
                    (() => {
                        if (process.env.NODE_ENV !== 'production') {
                            const DevTools = require('./DevTools');
                            return <DevTools />;
                        }
                    })()
                }
            </div>

        );
    }
});

export default Layout;
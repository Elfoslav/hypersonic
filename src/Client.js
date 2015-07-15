import bootstrap from 'bootstrap/less/bootstrap.less';
import reactSelect from 'react-select/dist/default.css';
import styles from './styles/styles.less';

import React from 'react';
import Router from 'react-router';
import routes from './Routes';

window.React = React;

Router.run(routes, Router.HistoryLocation, Handler => {
    React.render(<Handler/>, document);
});

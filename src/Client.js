import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router'
import configureStore from './client/store/configureStore';
import './client/less/styles.less';
import { Provider } from 'react-redux';
import {Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './Routes.js';
import '../assets/favicon.ico';
import applicationDomainLoaded from './client/actions/applicationDomainActions';

export default function setupClient(appConfig) {

    const store = configureStore();
    const history = syncHistoryWithStore(browserHistory, store);

    // loads the application domain into the store
    store.dispatch(applicationDomainLoaded({ entities: appConfig.entities }));

    render(
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>,
        document.getElementById('#app_container')
    );    
}





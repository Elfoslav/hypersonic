import LoggedUserActions from './LoggedUserActions.js';
import MainMenuActions from './MainMenuActions.js';
import ApplicationDomainActions from './ApplicationDomainActions.js';
import RouterActions from './RouterActions.js';

let clientActions = {
    loggedUser: LoggedUserActions,
    mainMenu: MainMenuActions,
    applicationDomain: ApplicationDomainActions,
    router: RouterActions
};

if(window) {
    window.clientActions = clientActions;
}

export default clientActions;
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "mobx-react"
import BaseStore from "./stores/BaseStore"
import ModalStore from "./stores/ModalStore"
import VacationStore from "./stores/VacationStore"
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./components/Home/Home";
import Events from "./components/Events/Events";
import Event from "./components/Events/Event";
import Personal from "./components/Personal/Personal";
import Rates from "./components/Rates/Rates";
import Rate from "./components/Rates/Rate";
import Pawnshops from "./components/Pawnshops/Pawnshops";
import ResetPassword from "./components/ResetPassword";
import PublicAuction from "./components/PublicAuction/PublicAuction";
import LegalInformation from "./components/LegalInformation/LegalInformation";
import Faq from "./components/Faq";
import './styles/main.sass'
import TimerStore from "./stores/TimerStore";
import BreadcrumbsStore from "./stores/BreadcrumbsStore";
import {routes} from "./constants/routes";
import ErrorBoundary from "./components/ErrorBoundary";
import Page from "./components/Page";
import Landing from "./components/Landing/Landing";


const stores = {
    BaseStore,
    ModalStore,
    VacationStore,
    TimerStore,
    BreadcrumbsStore,
};

ReactDOM.render(
    <Provider { ...stores }>
        <BrowserRouter>
            <ErrorBoundary>
                <App>
                    <Switch>
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.publicAuction} component={PublicAuction} />
                        <Route exact path={routes.publicAuctionItem} component={PublicAuction} />
                        <Route exact path={routes.legalInformation} component={LegalInformation} />
                        <Route exact path={routes.legalInformationItem} component={LegalInformation} />
                        <Route exact path={routes.faq} component={Faq} />
                        <Route exact path={routes.events} component={Events} />
                        <Route exact path={routes.eventId} component={Event} />
                        <Route exact path={routes.personal} component={Personal} />
                        <Route exact path={routes.personalTab} component={Personal} />
                        <Route exact path={routes.rates} component={Rates} />
                        <Route exact path={routes.rateId} component={Rate} />
                        <Route exact path={routes.pawnshops} component={Pawnshops} />
                        <Route exact path={routes.resetPasswordToken} component={ResetPassword} />
                        <Route exact path={routes.page} component={Page} />
                        <Route exact path={routes.landing} component={Landing} />
                    </Switch>
                </App>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

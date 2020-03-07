import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { AppContextProvider } from './contexts/AppContext';
import ListPage from './pages/ListPage';
import InsertPage from './pages/InsertPage';
import UpdatePage from './pages/UpdatePage';
import TabsPage from './pages/TabsPage';
import MenuPages from './pages/MenuPages';

const App: React.FC = () => (
  <IonApp>
    <AppContextProvider>
      <IonSplitPane contentId="main">
        <MenuPages />
        <IonPage id="main">
          <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/list" component={ListPage} exact={true} />
              <Route path="/insert" component={InsertPage} exact />
              <Route path="/update/:idx" component={UpdatePage} exact />
              <Route path="/tabs" component={TabsPage} exact />
              <Route path="/menu" component={MenuPages} exact />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonPage>
      </IonSplitPane>

    </AppContextProvider>
  </IonApp>
);

export default App;

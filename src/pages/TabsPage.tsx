import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route, Redirect } from 'react-router';
import ListPage from './ListPage';
import Home from './Home';
import { home, list } from 'ionicons/icons';

const TabsPage: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/list" component={ListPage} exact />
        <Route path="/tabs/home" component={Home} exact />
        <Route exact path="/tabs" render={() => <Redirect to="/tabs/home" />} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonLabel>Home</IonLabel>
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="list" href="/tabs/list">
          <IonLabel>Lista</IonLabel>
          <IonIcon icon={list} />
        </IonTabButton>

      </IonTabBar>

    </IonTabs>
  )

}

export default TabsPage;
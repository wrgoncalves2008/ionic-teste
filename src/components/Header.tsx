import React from 'react';
import { IonToolbar, IonHeader, IonTitle } from '@ionic/react';

const Header: React.FC<string> = (title: string) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>)
}

export default Header;
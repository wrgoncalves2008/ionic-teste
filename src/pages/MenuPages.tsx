import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonAvatar, IonRippleEffect } from '@ionic/react';
import { home, person, list } from 'ionicons/icons';
import { Plugins, CameraPhoto, CameraResultType } from '@capacitor/core'
const { Camera } = Plugins;

const MenuPages: React.FC = () => {

  const [avatar, setAvatar] = useState('');

  const handleChangeAvatar = async () => {
    const photo: CameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      allowEditing: true
    });

    setAvatar(photo.webPath!);
  }


  return (
    <IonMenu type="overlay" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <IonAvatar className="ion-activatable" style={{ overflow: 'hidden', cursor: 'pointer' }} onClick={handleChangeAvatar}>
            <img src={avatar} alt="Avatar do usuário" />
            <IonRippleEffect />
          </IonAvatar>
        </div>
        <IonList>
          <IonItem button routerLink="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonItem>

          <IonItem button routerLink="/tabs">
            <IonIcon icon={person} />
            <IonLabel>Tabs</IonLabel>
          </IonItem>

          <IonItem button routerLink="/list">
            <IonIcon icon={list} />
            <IonLabel>Lista</IonLabel>
          </IonItem>

        </IonList>
      </IonContent>

    </IonMenu >
  )
}

export default MenuPages;
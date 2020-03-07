import React, { useContext } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import { AppContext } from '../contexts/AppContext';
import { useParams, useHistory } from 'react-router';
import NameSetter from '../components/NameSetter';

type UpdateParams = {
  idx?: string
}

const UpdatePage: React.FC = () => {

  const params: UpdateParams = useParams();

  if (params.idx === undefined) {
    throw new Error('cade o indice');
  }

  const idx = parseInt(params.idx);
  const [appData, dispatchAppData] = useContext(AppContext);
  const initialName = appData.names[idx];
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  return (
    <IonPage id="insert">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Atualizar</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <NameSetter buttonTitle="Atualizar" placeholder="Mudar o nome" initialValue={initialName}
          onNameSet={(name) => {
            dispatchAppData({
              action: {
                type: 'update',
                at: idx, to: name
              }
            });

            handleBack();
          }} />


      </IonContent>

    </IonPage>
  )
}

export default UpdatePage;
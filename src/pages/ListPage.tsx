import React, { useContext } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonButton, IonIcon } from '@ionic/react';
import ContextualNameList from '../components/ContextualNameList';
import { useHistory } from 'react-router';
import { addCircle } from 'ionicons/icons';
import { AppContext } from '../contexts/AppContext';

const ListPage: React.FC = () => {

  const [appData,] = useContext(AppContext);

  const history = useHistory();

  const handleInsert = () => {
    history.push('/insert');
  }

  return (
    <IonPage id="list">

      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="end">
            <IonButton onClick={handleInsert}>
              <IonIcon icon={addCircle} />
            </IonButton>
          </IonButtons>

          <IonTitle>Lista de Nomes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ContextualNameList />

      </IonContent>

      <IonFooter>
        <IonToolbar color="primary">
          <IonTitle>{appData.names.length} nomes cadastrados</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage >
  )
}

export default ListPage;
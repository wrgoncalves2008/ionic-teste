import { IonButton, IonItem, IonLabel, IonList, IonAlert, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import { trash, create } from 'ionicons/icons';

type NameListProps = {
  names: string[]
  onRemoveName?: (index: number) => void
  onUpdateName?: (index: number) => void
}

const NameList: React.FC<NameListProps> = ({ names, onRemoveName, onUpdateName }) => {

  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <IonList>
        {names.map((name, index) => {
          return (<IonItem key={`NameList_${name}_${index}`}>
            <IonLabel>{name}</IonLabel>

            <IonButton onClick={() => {
              if (onUpdateName) {
                onUpdateName(index);
              }
            }}>
              <IonIcon icon={create} />
            </IonButton>

            <IonButton onClick={() => {
              setSelectedIndex(index);
              setAlertVisible(true);
            }}>
              <IonIcon icon={trash} />
            </IonButton>
          </IonItem>)
        })}
      </IonList >

      <IonAlert isOpen={alertVisible} onDidDismiss={() => setAlertVisible(false)}
        header='Confirmar'
        message='Deseja realmente remover este nome da lista?'
        buttons={
          [
            'Não',
            {
              text: 'Sim',
              handler: () => {
                if (onRemoveName) {
                  onRemoveName(selectedIndex);
                }
                setAlertVisible(false);
              }
            }
          ]
        } />
    </>
  )
}

export default NameList;
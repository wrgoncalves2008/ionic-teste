import { IonButton, IonItem, IonLabel, IonList, IonAlert } from '@ionic/react';
import React, { useState } from 'react';

type NameListProps = {
  names: string[]
  onRemoveName?: (index: number) => void
}

const NameList: React.FC<NameListProps> = ({ names, onRemoveName }) => {

  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <IonList>
        {names.map((name, index) => {
          return (<IonItem key={`NameList_${name}_${index}`} button>
            <IonLabel>{name}</IonLabel>

            <IonButton onClick={() => {
              setSelectedIndex(index);
              setAlertVisible(true);

            }}>Remover</IonButton>
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
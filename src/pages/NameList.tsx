import { IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';

type NameListProps = {
  names: string[]
  onRemoveName?: (index: number) => void
}

const NameList: React.FC<NameListProps> = ({ names, onRemoveName }) => {

  return (
    <IonList>
      {names.map((name, index) => {
        return (<IonItem key={`NameList_${name}_${index}`}>
          <IonLabel>{name}</IonLabel>
          <IonButton onClick={() => {
            if (onRemoveName) {
              onRemoveName(index);
            }
          }}>Remover</IonButton>
        </IonItem>)
      })}
    </IonList >
  )
}

export default NameList;
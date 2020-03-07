import { IonButton, IonInput, IonText } from '@ionic/react';
import React, { useRef } from 'react';

export type NameSetterProps = {
  initialValue: string
  placeholder: string
  buttonTitle: string
  onNameSet?: (name: string) => void
}

const NameSetter: React.FC<NameSetterProps> = ({ initialValue, placeholder, buttonTitle, onNameSet }) => {

  const inputRef = useRef<HTMLIonInputElement>(null);

  const addName = () => {
    if (inputRef.current!.value === '') return;

    if (onNameSet) {
      onNameSet(inputRef.current!.value ?? '');
    }

    inputRef.current!.value = "";
  }

  return <div style={{ marginTop: '10px', padding: '5px', border: 'solid 1px black' }}>
    <IonText>{initialValue}</IonText>
    <IonInput ref={inputRef} type="text" placeholder={placeholder} />
    <IonButton onClick={addName}>{buttonTitle}</IonButton>
  </div >;
};

export default NameSetter;
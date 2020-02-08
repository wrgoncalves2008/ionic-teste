import React, { useRef, useState } from 'react';
import { IonText, IonInput, IonButton } from '@ionic/react';

const NameSetter: React.FC = () => {

  const inputRef = useRef<HTMLIonInputElement>(null);
  const [title, setTitle] = useState('Texto');

  return <>
    <IonText>{title}</IonText>
    <IonInput ref={inputRef} type="text" placeholder="Digite seu nome" />
    <IonButton onClick={() => { setTitle(inputRef.current!.value ?? '') }}>Definir</IonButton>
  </>;
};

export default NameSetter;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ContactNameList from "../components/ContactNameList";

const Home: React.FC = () => {


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <ContactNameList placeholder="Informe o nome" initialValue="Meu nome é" buttonTitle="Registrar seu nome" />
        <ContactNameList placeholder="Informe o nome da mãe" initialValue="O nome da sua mãe é" buttonTitle="Registrar nome da mãe" />
        <ContactNameList placeholder="Informe o nome do pai" initialValue="O nome do seu pai é" buttonTitle="Registrar nome do pai" />
      </IonContent>

    </IonPage>
  );
};

export default Home;

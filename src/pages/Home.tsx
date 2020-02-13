import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
// import NameList from "./NameList";
// import NameSetter from "./NameSetter";
import ContactNameList from "./ContactNameList";

const Home: React.FC = () => {

  // const [names, setNames] = useState<string[]>([]);

  // const addName = (name: string) => {
  //   const newNames = [name, ...names];
  //   setNames(newNames);
  // }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <NameSetter initialValue="Meu nome é" placeholder="Seu nome" buttonTitle="Definir seu nome?" onNameSet={addName} /> */}
        {/* <NameSetter initialValue="Sua Mãe é" placeholder="Nome da sua mãe" buttonTitle="Definir sua Mãe" onNameSet={addName} /> */}
        {/* <NameSetter initialValue="Seu Pai é" placeholder="Nome do seu Pai" buttonTitle="Definir seu pai" onNameSet={addName} /> */}

        {/* <NameList names={names} /> */}

        <ContactNameList placeholder="Informe o nome" initialValue="Meu nome é" buttonTitle="Registrar seu nome" />
        <ContactNameList placeholder="Informe o nome da mãe" initialValue="O nome da sua mãe é" buttonTitle="Registrar nome da mãe" />
        <ContactNameList placeholder="Informe o nome do pai" initialValue="O nome do seu pai é" buttonTitle="Registar nome do pai" />
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ContextualNameSetter from "../components/ContextualNameSetter";
import ContextualNameList from "../components/ContextualNameList";
import React from "react";
// import NameSetter from "../components/NameSetter";
// import NameList from "../components/NameList";


const Home: React.FC = () => {

  // const [names, setNames] = useState<string[]>([]);

  // const addName = (name: string) => {
  //   const newNames = [name, ...names];
  //   setNames(newNames);
  // }

  // const removeName = (removeIndex: number) => {

  //   const newNames = [...names];
  //   newNames.splice(removeIndex, 1);
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
        <ContextualNameSetter initialValue="Meu nome é" placeholder="Seu nome" buttonTitle="Definir seu nome?" />
        <ContextualNameList />

        {/* <NameSetter initialValue="Meu nome é" placeholder="Seu nome" buttonTitle="Definir seu nome?" onNameSet={addName} />
        {/* <NameSetter initialValue="Sua Mãe é" placeholder="Nome da sua mãe" buttonTitle="Definir sua Mãe" onNameSet={addName} /> */}
        {/* <NameSetter initialValue="Seu Pai é" placeholder="Nome do seu Pai" buttonTitle="Definir seu pai" onNameSet={addName} /> */}

        {/* <NameList names={names} onRemoveName={removeName} /> */}

      </IonContent>
    </IonPage>
  );
};

export default Home;

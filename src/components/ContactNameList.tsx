import React, { useState } from 'react';
import NameList from './NameList';
import NameSetter, { NameSetterProps } from './NameSetter';


const ContactNameList: React.FC<NameSetterProps> = ({ initialValue, placeholder, buttonTitle }) => {

  const [nameList, setNameList] = useState<string[]>([]);

  const addNameToList = (name: string) => {
    const list = [name, ...nameList];
    setNameList(list);
  }

  const removeName = (removeIndex: number) => {

    const list = nameList.filter((name, index) => index !== removeIndex);
    setNameList(list);
  }

  return (
    <>
      <NameSetter buttonTitle={buttonTitle} initialValue={initialValue} placeholder={placeholder} onNameSet={addNameToList} />
      <NameList names={nameList} onRemoveName={removeName} />
    </>
  )
}

export default ContactNameList;
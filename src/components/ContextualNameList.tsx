import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import NameList from './NameList';

const ContextualNameList: React.FC = () => {

  const [appData, dispatchAppData] = useContext(AppContext);

  return (
    <NameList names={appData.names}
      onRemoveName={(removeIndex) => {
        dispatchAppData({ action: { type: 'delete', indexToDelete: removeIndex } })
      }}
    />
  )
}

export default ContextualNameList;

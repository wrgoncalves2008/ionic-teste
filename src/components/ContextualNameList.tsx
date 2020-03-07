import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import NameList from './NameList';
import { useHistory } from 'react-router';

const ContextualNameList: React.FC = () => {

  const [appData, dispatchAppData] = useContext(AppContext);
  const history = useHistory();

  return (
    <NameList names={appData.names}
      onRemoveName={(removeIndex) => {
        dispatchAppData({ action: { type: 'delete', indexToDelete: removeIndex } })
      }}

      onUpdateName={(updateIndex) => {
        history.push(`/update/${updateIndex}`)
      }}
    />
  )
}

export default ContextualNameList;

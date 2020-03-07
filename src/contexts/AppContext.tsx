import React, { useReducer, useEffect } from 'react';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export interface AppData {
  names: string[]
}

const DEFAULT_APPDATA: AppData = {
  names: []
}

export interface AppDataAction {

  action:
  ({ type: 'add', nameToInsert: string }) |
  ({ type: 'delete', indexToDelete: number }) |
  ({ type: 'initialize', state: AppData }) |
  ({ type: 'update', at: number, to: string });

}

export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([DEFAULT_APPDATA, () => { }])

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }: React.PropsWithChildren<{}>) => {
  const reducer = useReducer(
    (state: AppData, { action }: AppDataAction): AppData => {
      switch (action.type) {
        case 'add': {
          const newState = {
            ...state, names: [action.nameToInsert, ...state.names]
          }
          Storage.set({
            key: 'AppContext',
            value: JSON.stringify(newState)
          })
            .catch(() => { });

          return newState;
        }
        case 'delete': {
          const newNames = [...state.names]
          newNames.splice(action.indexToDelete, 1)

          const newState = {
            ...state,
            names: newNames
          }

          Storage.set({
            key: 'AppContext',
            value: JSON.stringify(newState)
          })

          return newState;
        }
        case 'initialize': {
          return action.state
        }
        case 'update': {
          const newNames = [...state.names];
          newNames[action.at] = action.to;

          const newState = {
            ...state,
            names: newNames
          }

          Storage.set({
            key: 'AppContext',
            value: JSON.stringify(newState)
          })

          return newState;
        }

      }
    }, DEFAULT_APPDATA
  )

  useEffect(() => {
    Storage.get({ key: 'AppContext' })
      .then((value) => {
        if (!value.value) return;

        const state: AppData = JSON.parse(value.value);

        reducer[1]({
          action: { type: 'initialize', state }
        })
      })
      .catch(() => { });
  },
    // eslint-disable-next-line
    []);

  return (
    <AppContext.Provider value={reducer}>
      {children}
    </AppContext.Provider>
  )

}
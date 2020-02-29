import React, { useReducer } from 'react';

export interface AppData {
  names: string[]
}

const DEFAULT_APPDATA: AppData = {
  names: []
}

export interface AppDataAction {

  action: ({ type: 'add', nameToInsert: string }) | ({ type: 'delete', indexToDelete: number })

}

export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([DEFAULT_APPDATA, () => { }])

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }: React.PropsWithChildren<{}>) => {
  const reducer = useReducer(
    (state: AppData, { action }: AppDataAction): AppData => {
      switch (action.type) {
        case 'add': return {
          ...state, names: [action.nameToInsert, ...state.names]
        }
        case 'delete':
          const newNames = [...state.names]
          newNames.splice(action.indexToDelete, 1)

          return {
            ...state,
            names: newNames
          }
      }
    }, DEFAULT_APPDATA
  )

  return (
    <AppContext.Provider value={reducer}>
      {children}
    </AppContext.Provider>
  )

}
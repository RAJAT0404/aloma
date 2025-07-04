// app/providers/ReduxProvider.tsx
'use client'

import { Provider } from 'react-redux'
import { store, persistor } from '@/Store'
import { PersistGate } from 'redux-persist/integration/react'

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

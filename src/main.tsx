import './i18n.ts'

import App from './App.tsx'
import i18next from "i18next"
import * as React from 'react'
import ReactDOM from 'react-dom/client'
import QueryProvider from '@config/providers/QueryProvider.tsx'

import { store } from '@store/index'
import { Provider } from 'react-redux'
import { I18nextProvider } from "react-i18next"
import { ThemeProvider } from '@config/providers/ThemeProvider.tsx'
import { ConfettiProvider } from '@config/providers/ConfettiProvider.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { SearchProvider } from '@config/providers/SearchContext.tsx'
import { ErrorManagerProvider } from '@config/providers/ErrorManagerProvider.tsx'
import { ErrorStackIndicator } from './components/dev/ErrorStackIndicator.tsx'

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <QueryProvider>
          <SearchProvider>
            <ConfettiProvider>
              <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                <ErrorManagerProvider environment='debug'>
                  <I18nextProvider i18n={i18next}>
                    <App />
                  </I18nextProvider>
                  <ErrorStackIndicator environment='debug' />
                </ErrorManagerProvider>
              </ThemeProvider>
            </ConfettiProvider>
          </SearchProvider>
        </QueryProvider>
      </Router>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)


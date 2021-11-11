import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import theme from '../../global/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
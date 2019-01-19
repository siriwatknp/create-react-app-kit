import React from 'react'
// THEME
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import emotionTheme from 'theme/emotionTheme'

export default story => (
  <EmotionThemeProvider theme={emotionTheme}>
    {story()}
  </EmotionThemeProvider>
)

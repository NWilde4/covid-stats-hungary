import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  createMuiTheme, 
  ThemeProvider, 
  responsiveFontSizes  
} from '@material-ui/core/styles'
import { huHU } from '@material-ui/core/locale'

let theme = createMuiTheme({
  palette: {
    primary: { main: '#ba000d' },
  },
}, huHU)
theme = responsiveFontSizes(theme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


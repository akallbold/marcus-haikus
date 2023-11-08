import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          backgroundColor: '#ffffff',
          borderRadius: 4,
        },
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#2A6EBB',
          fontSize: 16,
          fontWeight: 700,
          '&:hover': {
            pointer: 'cursor',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#000',
      dark: "#b27771", 
    },
    secondary: {
      main: '#136A61', 
      light:"#428780" 
    },

    text: {
      primary: '#FFABA2',
      secondary: '#FFABA2',
    },
    divider: '#00000050',
  },
  typography: {
    h1: { 
      fontSize: 34,
      fontWeight: 800,
      textAlign:'center',
      color: "#136A61",
      letterSpacing: ".3rem",

    },
    h2: {
      color: "#136A61",
      fontSize: 34,
      fontWeight: 700,
    },
    h3: { 
      color:"#136A61",
      fontSize: 30,
      fontWeight: 900,
      // textDecoration: 'underline',
    },
    h4: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      color:"#136A61"
    },   
    // h6: {
    //   color:"#136A61"
    // },
    body1: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.625,
      textAlign:'left'
    },
    body2: {
      color:"#136A61",
      fontSize: 16,
      fontWeight: 800,
      textAlign:'left'
    },
    button: {
        fontFamily:'Gideon Roman serif'
    },
    caption: {
      fontSize: 12,
      color:"#136A61"
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      color:"#b27771",
      textAlign: "left",
      letterSpacing: "2px",
      textTransform:"uppercase"
    },  
    fontFamily:'Gideon Roman serif'
    
  },
});

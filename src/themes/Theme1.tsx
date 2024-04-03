import { createTheme } from "@mui/material";

export const Theme1 = createTheme ({
    palette: {
      mode: 'dark',
      primary: {
        main: '#367588',
      },
      secondary: {
        main: '#367588',
      },
      background: {
        default: '#1A1A1A',
      },
      text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.50)',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            //border: '1px solid',
            //borderColor: '#ffffff10',
            borderRadius: 5,
          },
          elevation: 3,
        }
      },
    },
    typography: {
      fontFamily:'Poppins'
    },
    
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
    
  });

  declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      laptop: true;
      desktop: true;
    }
  }

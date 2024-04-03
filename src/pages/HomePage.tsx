import { Avatar, Box, Button, Grid, Paper, Snackbar, Typography, useMediaQuery } from "@mui/material"
import { Theme1 } from "../themes/Theme1"
import HomePageWorkComponent from "../components/homePageComponents/HomePageWorkComponent";
import HomePageProjectsComponent from "../components/homePageComponents/HomePageProjectsComponent";
import ALlogo from "../assets/ALlogo2.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import ALlogo2 from "../assets/ALlogo.jpg"


function HomePage() {
    const navigate = useNavigate();

    // Responsive
    const isMobile = useMediaQuery(Theme1.breakpoints.down('tablet'));

    // Copy to clipboard
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText("alvarolimon.ram@gmail.com");
        } 
        catch(err) {
            console.error("Error:",err)
        }
    };

    const handleOpenSb = () => {
        setOpenSnackbar(true);
        handleCopy();
    }

    const handleCloseSb = (reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenSnackbar(false);
    }

    const boxContainerStyles = {
        ...(isMobile && {
            display:'flex',
            flexDirection:'column-reverse',
            gap:5,
            height:'100%',
            width: '100%',
            marginTop: 0,
            marginBottom: 10,
        }),
        ...(!isMobile && {
            display:'flex',
            height: 250,
            width: '100%',
            alignText: 'left',
            marginTop: 10,
            marginBottom: 10,
        })
    }

    const gridContainerStyles = {
        ...(isMobile && {
            width: '100%',
            
        }),
        ...(!isMobile && {
            width: '65%',
            alignText: 'left',
            columnGap:2,
            paddingRight:2,
            flexDirection:'column',
            justifyContent:'center'
        })
    }

    const gridItemStyles = {
        ...(isMobile && {
            display: 'flex',
            justifyContent: 'center',
            textAlign:'center'
        }),
        ...(!isMobile && {
            display: 'flex',
            justifyContent: 'left',
            textAlign:'left',

        }),
    }

    const avatarStyles = {
        ...(isMobile && {
            height:'70%', 
            width:'70%', 
            aspectRatio:'1', 
            borderRadius:2
        }),
        ...(!isMobile && {
            height:'100%', 
            width:'auto', 
            aspectRatio:'1', 
            borderRadius:2
        }),
    }

    // Styling
    const lv2Paper = {
        width:'100%',
        bgcolor:'rgba(26, 26, 26, 1);',
        border:'none',
        padding:2,
        marginBottom:2
    }

  return (
    <Box>
        <Box sx={{padding:2}}>
            <Box sx={{...(boxContainerStyles), display:'flex', ...(isMobile && {flexDirection:'column-reverse'})}}>
                <Grid container rowSpacing={1} direction={'column'} sx={gridContainerStyles}>
                    <Grid item sx={{...(gridItemStyles), flexDirection:'column'}}>
                        <Typography variant="h4" component="h1" fontWeight={500}>
                            Álvaro Limón
                        </Typography>
                        <Typography variant="h5" component="h2" color="primary.main">
                            Industrial Engineer
                        </Typography>
                    </Grid>
                    <Grid item sx={gridItemStyles}>
                        <Typography variant="subtitle1" color="text.secondary">
                            I like to design and develop efficient projects and solutions.
                        </Typography>
                    </Grid>
                    <Grid item sx={{...(gridItemStyles), columnGap:1, marginTop:2}}>
                        <Button variant="contained" onClick={() => {navigate('/contact')}}>Contact me</Button>
                        <Button variant="outlined" onClick={handleOpenSb}>My email</Button>
                        <Snackbar 
                            open={openSnackbar}
                            message="Copied to clipboard!"
                            onClose={() => {handleCloseSb}}
                            autoHideDuration={1500}
                            anchorOrigin={{ vertical:'top', horizontal:'right'}}
                            sx={{width:250, justifySelf:'flex-end'}}
                        />
                    </Grid>
                </Grid>
                <Box sx={{display:'flex', ...(!isMobile && {justifyContent:'flex-end'}), ...(isMobile && {justifyContent:'center'}), alignItems:'center', flex:1, aspectRatio:'1'}}>
                    <Avatar variant="square" sx={avatarStyles} src={ALlogo} alt="AL"/>
                </Box>
            </Box>
        </Box>
        <Paper sx={lv2Paper}>
            <HomePageWorkComponent/>
        </Paper>
        <Paper sx={lv2Paper}>
            <HomePageProjectsComponent/>
        </Paper>
    </Box>
  )
}

export default HomePage
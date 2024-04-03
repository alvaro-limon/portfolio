import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import { Theme1 } from '../../themes/Theme1';
import { AccountCircleOutlined, Email, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function ContactPage() {

    // Responsive
    const isMobile = useMediaQuery(Theme1.breakpoints.down('tablet'));

    // Styling
    const lv2Paper = {
        width:'100%',
        bgcolor:'rgba(26, 26, 26,1);',
        border:'none',
        padding:2,
    }

    const boxContainerStyles = {
        ...(isMobile && {
            marginTop: 0,
            marginBottom: 10,
            padding:2
        }),
        ...(!isMobile && {
            marginTop: 10,
            marginBottom: 10,
            padding:2
        })
    }

    const lv3Paper = {
        width:'100%',
        bgcolor:'rgba(26, 26, 26,0.5);',
        border:'none',
        padding:2,
    }

    const gridItemStyles = {
        ...(isMobile && {
            display: 'flex',
            flexDirection: 'row',
        }),
        ...(!isMobile && {
            display: 'flex',
            justifyContent: 'left',
        }),
    }

  return (
    <Box>
        <Grid container rowSpacing={1} direction={'column'} sx={boxContainerStyles}>
            <Grid item marginBottom={2}>
                <Box sx={{width:'100%', display:'flex', alignItems:'center', columnGap:1 }}> 
                    <AccountCircleOutlined sx={{color:'text.secondary'}}/>
                    <Typography variant='subtitle1' color={'text.secondary'} lineHeight={1}>Contact</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h4" fontWeight={500}>
                    Let's work together.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" color="text.secondary">
                    Feel free to contact me regarding my work, projects, or even just to connect!
                </Typography>
            </Grid>
        </Grid>
        <Paper sx={lv2Paper}>
            <Box width={'100%'}>
                <Grid container rowSpacing={2} direction={'column'} sx={{flexGrow:1}}>
                    <Grid item>
                        <Link to={"//www.linkedin.com/in/alvarolimon"} target="_blank" rel="noopener noreferrer">
                            <Paper sx={lv3Paper}>
                                <Grid container direction={'row'} rowSpacing={1} justifyContent={'space-between'}>
                                    <Grid item sx={gridItemStyles}><Typography variant='subtitle1' fontWeight={600}>Contact me on&nbsp;</Typography><Typography variant='subtitle1' fontWeight={600} color={'primary.main'}>LinkedIn</Typography></Grid>
                                    <Grid item><LinkedIn/></Grid>
                                </Grid>
                            </Paper>
                        </Link>                    
                    </Grid>
                    <Grid item>
                        <Link to={"mailto:alvarolimon.ram@gmail.com"}>
                            <Paper sx={lv3Paper}>
                                <Grid container direction={'row'} rowSpacing={1} justifyContent={'space-between'}>
                                    <Grid item sx={gridItemStyles}><Typography variant='subtitle1' fontWeight={600}>Contact me on&nbsp;</Typography><Typography variant='subtitle1' fontWeight={600} color={'primary.main'}>Gmail</Typography></Grid>
                                    <Grid item><Email/></Grid>
                                </Grid>
                            </Paper>
                        </Link>                      
                    </Grid>
                    
                </Grid>
            </Box>
        </Paper>
    </Box>
  )
}

export default ContactPage
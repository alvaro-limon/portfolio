import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import { Theme1 } from '../../themes/Theme1';
import { WorkOutline } from '@mui/icons-material';
import WorkPageGetComponent from './WorkPageGetComponent';

function WorkPage() {

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

  return (
    <Box>
        <Grid container rowSpacing={1} direction={'column'} sx={boxContainerStyles}>
            <Grid item marginBottom={2}>
                <Box sx={{width:'100%', display:'flex', alignItems:'center', columnGap:1 }}> 
                    <WorkOutline sx={{color:'text.secondary'}}/>
                    <Typography variant='subtitle1' color={'text.secondary'} lineHeight={1}>Work</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h4" fontWeight={500}>
                    My work
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" color="text.secondary">
                    This is my portfolio, some of the companies I've worked for and some of the projects I have developed.
                </Typography>
            </Grid>
        </Grid>
        <Paper sx={lv2Paper}>
            <WorkPageGetComponent/> 
        </Paper>
    </Box>
  )
}

export default WorkPage
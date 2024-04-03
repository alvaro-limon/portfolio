import { Box, Grid, Paper, Typography, useMediaQuery } from '@mui/material'
import { Theme1 } from '../../themes/Theme1';
import { SchoolOutlined } from '@mui/icons-material';
import ProjectPageGetComponent from './ProjectPageGetComponent';

function ProjectsPage() {

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
                    <SchoolOutlined sx={{color:'text.secondary'}}/>
                    <Typography variant='subtitle1' color={'text.secondary'} lineHeight={1}>Projects</Typography>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h4" fontWeight={500}>
                    My projects
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1" color="text.secondary">
                    These are some of the projects I have worked on to learn, personally or academically.
                </Typography>
            </Grid>
        </Grid>
        <Paper sx={lv2Paper}>
            <ProjectPageGetComponent/>
        </Paper>
    </Box>
  )
}

export default ProjectsPage
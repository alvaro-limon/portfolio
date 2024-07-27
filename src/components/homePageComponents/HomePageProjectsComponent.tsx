import { Box, Button, Typography } from '@mui/material'
import { ArrowForwardOutlined, SchoolOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import GetExperienceDescriptions from '../getExperiencesComponent/GetExperienceDescriptions'

function HomePageProjectsComponent() {
    
    const goToButtonStyles = {
      justifySelf:'flex-end', 
      color:'text.secondary', 
      borderColor:'text.secondary',
      display:'flex',
      alignItems:'center',
      columnGap:1,
    } 

  return (
    <Box width={'100%'}>
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', columnGap:1, marginBottom:2}}>
            <Box sx={{display:'flex', alignItems:'center', columnGap:1}}> 
                <SchoolOutlined sx={{color:'text.secondary'}}/>
                <Typography variant='subtitle1' color={'text.secondary'} lineHeight={1}>Projects</Typography>
            </Box>
            <Button variant='outlined' sx={goToButtonStyles} component={Link} to="/portfolio/projects">
                View
                <ArrowForwardOutlined sx={{color:'text.secondary'}}/>
            </Button>
        </Box>
        <GetExperienceDescriptions type='projects'/>
    </Box>
  )
}

export default HomePageProjectsComponent
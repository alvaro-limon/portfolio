import { Box, Button, Typography } from '@mui/material'
import { ArrowForwardOutlined, WorkOutline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import GetExperienceDescriptions from '../getExperiencesComponent/GetExperienceDescriptions'

function HomePageWorkComponent() {
    const navigate = useNavigate();
    
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
                <WorkOutline sx={{color:'text.secondary'}}/>
                <Typography variant='subtitle1' color={'text.secondary'} lineHeight={1}>Work</Typography>
            </Box>
            <Button variant='outlined' sx={goToButtonStyles} onClick={() => {navigate('/work')}}>
                View
                <ArrowForwardOutlined sx={{color:'text.secondary'}}/>
            </Button>
        </Box>
        <GetExperienceDescriptions type='work' num={3}/>
    </Box>
  )
}

export default HomePageWorkComponent
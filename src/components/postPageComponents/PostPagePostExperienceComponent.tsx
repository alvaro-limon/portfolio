import { Paper } from '@mui/material'
import PostExperienceComponent from '../postExperiencesComponent/PostExperienceComponent'

function PostPagePostExperienceComponent() {
    
    // Styling
    const lv2Paper = {
        width:'100%',
        bgcolor:'#202020',
        border:'none',
        padding:2,
    }

  return (
    <Paper sx={lv2Paper}>
        <PostExperienceComponent/>
    </Paper>
  )
}

export default PostPagePostExperienceComponent
import { Box, Grid, Paper, Typography } from '@mui/material'
import { /*useContext,*/ useEffect, useState } from 'react'
//import { ExperiencesContext } from '../../providers/experiencesProvider/ExperiencesProvider';
import DeleteExperiencesComponent from '../deleteExperiencesComponent/DeleteExperiencesComponent';

interface Experience {
    id: number;
    type: string;
    title: string;
    company: string;
    startdate: string;
    enddate: string;
    location: string;
    description: string;
    body: string;
    skills: string;
}   

function GetExperienceComponent({type, num} : {type:string, num?:number}) {

    const [experiences, setExperiences] = useState<Experience[]>();

    // Context variables
    //const {experiencesContextValue, setExperiencesContextValue} = useContext(ExperiencesContext);

    // isDeleting variables
    const [isDeleting, setIsDeleting] = useState(false);
    const isDeletingGroup = {isDeleting, setIsDeleting};

    async function getExperiences() {
        const response = await fetch('api/Experiences');
        const data = await response.json()
        const filteredData = data.filter((exp: { type: string; }) => exp.type === type);
        if (num) {
            setExperiences(filteredData.slice(0,num));
        }
        else {
            setExperiences(filteredData);
        }
        
    }

    useEffect(() => {
        getExperiences();

        // Update the context
        /*
        if (experiencesContextValue || isDeleting) {
            setExperiencesContextValue(false);
            setIsDeleting(false);
        }
        */
    }, [/*experiencesContextValue, setExperiencesContextValue, isDeleting*/]);

    // Styling
    const lv3Paper = {
        width:'100%',
        bgcolor:'#292929',
        border:'none',
        padding:2,
    }


    const contents = () => {
        if (experiences) {
            return (
                <Box sx={{width:'100%'}}>
                    <Grid container rowSpacing={2} direction={'column'} sx={{flexGrow:1}}>
                        {experiences.map((exp) => (
                            <Grid key={exp.id} item>
                                <Paper sx={lv3Paper}>
                                    <Grid container direction={'column'} rowSpacing={1}>
                                        <Grid item><Typography variant='subtitle2' fontWeight={600}>{exp.title}</Typography></Grid>
                                        <Grid item><Typography variant='body2' color={'rgba(255, 255, 255, 0.70)'}>{exp.description}</Typography></Grid>
                                        <DeleteExperiencesComponent id={exp.id} isDeletingGroup={isDeletingGroup}/>
                                    </Grid>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            );
        }
        else {
            return (
                <Box>
                    <p>No experiences found.</p>
                </Box>
            )
        }
    }

  return (
    <Box>
        {contents()}
    </Box>
  )
}

export default GetExperienceComponent
import { Box, Button, Grid, TextField } from '@mui/material'
import React, { /*useContext,*/ useState } from 'react'
//import { ExperiencesContext } from '../../providers/experiencesProvider/ExperiencesProvider';

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

function PostExperienceComponent() {

    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [startdate, setStartdate] = useState('');
    const [enddate, setEnddate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [skills, setSkills] = useState('');

    // Context variables
    //const {experiencesContextValue, setExperiencesContextValue} = useContext(ExperiencesContext);

    async function postExperience() {
        const newExperience: Experience = {
            id: 0,
            type: type,
            title: title,
            company: company,
            startdate: startdate,
            enddate: enddate,
            location: location,
            description: description,
            body: body,
            skills: skills,
        }

        await fetch('api/Experiences', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExperience)
        })
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        await postExperience();

        // Updating context
        /*
        if (!experiencesContextValue) {
            setExperiencesContextValue(true);
        }
        */
    }

    // Styling
    const gridItemStyles = {
        width:'100%'
    }

    const textFieldStyles = {
        width: '100%',
        background:'#292929',
        color:'#292929'
    }

  return (
    <Box sx={{display:'flex', justifyContent:'center'}}>
        <Grid  container rowSpacing={1} direction={'column'}>
            <Grid item sx={gridItemStyles}>
                <TextField label={"Title"} variant='filled' onChange={(e) => setTitle(e.target.value)} value={title} sx={textFieldStyles}></TextField>   
            </Grid>
            <Grid item sx={gridItemStyles}>
                <TextField label={"Type"} variant='filled' onChange={(e) => setType(e.target.value)} value={type} sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item sx={gridItemStyles}>
                <TextField label={"Company"} variant='filled' onChange={(e) => setCompany(e.target.value)} value={company} sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item sx={gridItemStyles}>
                <TextField label={"StartDate"} variant='filled' onChange={(e) => setStartdate(e.target.value)} value={startdate} sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item sx={gridItemStyles}>
                <TextField label={"EndDate"} variant='filled' onChange={(e) => setEnddate(e.target.value)} value={enddate} sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item sx={gridItemStyles}>
                <TextField label={"Location"} variant='filled' onChange={(e) => setLocation(e.target.value)} value={location} sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item>
                <TextField label={"Description"} variant='filled' multiline rows={4} onChange={(e) => setDescription(e.target.value)} value={description}  sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item>
                <TextField label={"Body"} variant='filled' multiline rows={8} onChange={(e) => setBody(e.target.value)} value={body}  sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item>
                <TextField label={"Skills"} variant='filled' multiline rows={2} onChange={(e) => setSkills(e.target.value)} value={skills}  sx={textFieldStyles}></TextField>
            </Grid>
            <Grid item sx={{textAlign:'right'}}>
                <Button variant='contained' type="submit" onClick={handleSubmit}>click me</Button>
            </Grid>
            <Grid item sx={{textAlign:'right'}}>
                <Button variant='contained' component='label'>
                    UPLOAD FILE
                    <input type="file" hidden multiple/>
                </Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default PostExperienceComponent
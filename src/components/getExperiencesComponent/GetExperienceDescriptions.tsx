import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Theme1 } from "../../themes/Theme1";
import ExperienceData from "../../assets/Experiences";

interface Experience {
    Id: number;
    Type: string;
    Title: string;
    Company: string;
    StartDate: string;
    EndDate: string;
    Location: string;
    Description: string;
    Body: string;
    Skills: string;
  }  


function GetExperienceDescriptions({type, num} : {type:string, num?:number}) {

    const [experiences, setExperiences] = useState<Experience[]>();

    /*
    async function getExperiences() {
        try {
            const response = await fetch('api/Experiences');
            const data = await response.json()
            const filteredData = data.filter((exp: { type: string; }) => exp.type === type);
            setExperiences(filteredData);
        }
        catch (err) {
            console.log(err)
        }
    }
    */

    function getExperiences() {
        try {
            const data = ExperienceData;
            const filteredData = data.filter((exp: { Type: string; }) => exp.Type === type);
            setExperiences(filteredData);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getExperiences();
    }, [])

    // Responsive
    const isMobile = useMediaQuery(Theme1.breakpoints.down('tablet'));

    // Styling
    const lv3Paper = {
        width:'100%',
        bgcolor:'rgba(26, 26, 26, 0.5);',
        border:'none',
        padding:2,
    }

    const gridItemStyles = {
        ...(isMobile && {
            display: 'flex',
            flexDirection: 'column',
        }),
        ...(!isMobile && {
            display: 'flex',
            justifyContent: 'left',
        }),
    }

  return (
    <Box width={'100%'}>
        <Grid container rowSpacing={2} direction={'column'} sx={{flexGrow:1}}>
            {experiences?.slice().reverse().slice(0,num).map((exp) => (
                <Grid key={exp.Id} item>
                    <Paper sx={lv3Paper}>
                        <Grid container direction={'column'} rowSpacing={1}>
                            <Grid item sx={gridItemStyles}><Typography variant='subtitle1' fontWeight={600}>{exp.Title},&nbsp;</Typography><Typography variant='subtitle1' fontWeight={600} color={'primary.main'}>{exp.Company}</Typography></Grid>
                            <Grid item><Typography variant='subtitle2' fontWeight={400} color={'text.secondary'}>{exp.StartDate} - {exp.EndDate}</Typography></Grid>
                            <Grid item><Typography variant='subtitle2' fontWeight={400}>{exp.Location}</Typography></Grid>
                            <Grid item><Typography variant='body2' color={'rgba(255, 255, 255, 0.70)'}>{exp.Description}</Typography></Grid>
                            <Grid item marginTop={1}>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            ))}

        </Grid>
    </Box>
  )
}

export default GetExperienceDescriptions
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { AccountCircleOutlined, HomeOutlined, SchoolOutlined, WorkOutline } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function BottomNavigationComponent() {
    const location = useLocation();
    const currentPath = location.pathname;

    const [value, setValue] = useState('/');

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    useEffect(() => {
        setValue(currentPath);
    },[currentPath])

    // Responsive
    //const isMobile = useMediaQuery(Theme1.breakpoints.down('tablet'));

    const sxNavItems = {
        outline:'none',
        '& .MuiBottomNavigationAction-label': {
            color: 'text.secondary',
        },
        '& .MuiSvgIcon-root': {
            color: 'text.secondary',
        },
        '& .Mui-selected': {
            outline:'none',
        }
    }

  return (
    <Paper>
        <BottomNavigation sx={{width:'100%', bgcolor:'transparent'}} value={value} onChange={() => {handleChange}}>
            <BottomNavigationAction 
                label="Home"
                value="/"
                icon={<HomeOutlined/>}
                sx={sxNavItems}
                
                component={Link}
                to={'/'}
            />
            <BottomNavigationAction 
                label="Work"
                value="/work"
                icon={<WorkOutline/>}
                sx={sxNavItems}

                component={Link}
                to={'/work'}
            />
            <BottomNavigationAction 
                label="Projects"
                value="/projects"
                icon={<SchoolOutlined/>}
                sx={sxNavItems}

                component={Link}
                to={'/projects'}
            />
            <BottomNavigationAction 
                label="Contact"
                value="/contact"
                icon={<AccountCircleOutlined/>}
                sx={sxNavItems}

                component={Link}
                to={'/contact'}
            />
        </BottomNavigation>
    </Paper>
  )
}

export default BottomNavigationComponent
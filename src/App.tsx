import { Container, CssBaseline, Paper, ThemeProvider, useMediaQuery } from '@mui/material';
import './App.css';
//import { ExperiencesContext } from './providers/experiencesProvider/ExperiencesProvider'
import { Theme1 } from './themes/Theme1'
import BottomNavigationComponent from './components/bottomNavigationComponent/BottomNavigationComponent';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WorkPage from './components/workPageComponents/WorkPage';
import ProjectsPage from './components/projectsPageComponents/ProjectsPage';
import ContactPage from './components/contactPageComponents/ContactPage';
import PostPagePostExperienceComponent from './components/postPageComponents/PostPagePostExperienceComponent';

function App() {
    // Variables to detect change in database
    //const [experiencesContextValue, setExperiencesContextValue] = useState(false);
    //const experiencesContextValueGroup = {experiencesContextValue, setExperiencesContextValue};

    // Responsive
    const isMobile = useMediaQuery(Theme1.breakpoints.down('tablet'));
    const isSmallerThanDesktop = useMediaQuery(Theme1.breakpoints.down('desktop'));

    return (
        <ThemeProvider theme={Theme1}>
            <CssBaseline/>
            <Container maxWidth="desktop" sx={{height:'100dvh', display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', bgcolor:'background.default', padding:1, rowGap:1, }}>
                <BrowserRouter>
                    <Paper sx={{height:'calc(100dvh - 80px)', width:'100%', display:'flex', flexDirection:'column', rowGap:2, padding:2, overflowY:'scroll', '&::-webkit-scrollbar':{display: 'none'}, '& scrollbar, & * scrollbar': {display: 'none'},}}>
                        <Routes>
                            <Route path='/portfolio/' element={<HomePage/>}/>
                            <Route path='/portfolio/work' element={<WorkPage/>} />
                            <Route path='/portfolio/projects' element={<ProjectsPage/>} />
                            <Route path='/portfolio/contact' element={<ContactPage/>} />     
                            <Route path='/portfolio/post' element={<PostPagePostExperienceComponent/>}/>
                        </Routes>
                    </Paper>
                    <Paper sx={{...(!isMobile && {width:'calc(1200px - 16px)'}), ...(isSmallerThanDesktop && {width:'calc(100% - 16px)'}), ...(isMobile && {width:'calc(100% - 16px)'}), justifySelf:'center', position:'fixed', bottom:0, left:'0', right:'0', zIndex:'1', margin:1}}>
                        <BottomNavigationComponent/>
                    </Paper>
                </BrowserRouter>
            </Container>    
        </ThemeProvider>
    );
}

export default App;
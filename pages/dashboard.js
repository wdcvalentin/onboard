import MainBody from '../components/layout/mainbody'
import SideBar from '../components/layout/sidebar'
import {Box} from "@material-ui/core";

export default function Dashboard() {
    return (
        <Box columnSpacing={{xs: 0, sm: 2, md: 3}} style={{display:'flex', height:'100vh'}}>
            <Box style={{width: '15%', borderRight: '2px solid #C9C9C9FF', padding:'2% 0'}}>
                <SideBar/>
            </Box>
            <Box style={{width: '80%', padding:'3%'}}>
                <MainBody/>
            </Box>
        </Box>
    )
}


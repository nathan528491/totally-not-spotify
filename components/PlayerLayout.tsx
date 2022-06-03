import {Box} from '@chakra-ui/layout'
import Sidebar from '../components/Sidebar'

export default function PlayerLayout({children}) {
    return (
        <Box width="100vw" height="100vh">
            <Box position="absolute" top="0" width="241px" left="0">
                <Sidebar />
            </Box>
            <Box marginLeft="241px" marginBottom="90px" >
                {children}
            </Box>
            <Box position="absolute" left="0" bottom="0" backgroundColor="#181818" height="90px" width="100%">
                player
            </Box>
        </Box>
    )
}
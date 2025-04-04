
import './App.css'
import { Footer } from './layouts/Footer'
import Header from './layouts/Header'
import MainLayout from './layouts/MainLayout'
import { Flex ,Box} from '@mantine/core';
function App() {
  return (
    <> 
 <Flex direction="column" h="100vh">
        <Header />
        <Box flex={1} w="100%">
          <MainLayout />
        </Box>
        <Footer />
      </Flex>
    </>
  )
}
export default App

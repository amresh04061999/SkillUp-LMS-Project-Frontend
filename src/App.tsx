import { Footer } from './layouts/Footer'
import Header from './layouts/Header'
import { Flex, Box } from '@mantine/core'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <>
      <Flex direction="column" h="100vh" style={{ overflowY: 'hidden' }}>
        <Header />
        <Box flex={1} w="100%" style={{ overflowY: 'auto' }}> 
         <MainLayout/>
        </Box>
        <Footer />
      </Flex>
    </>
  )
}
export default App

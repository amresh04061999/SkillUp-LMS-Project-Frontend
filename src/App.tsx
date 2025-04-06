
import { SignIn } from './features/auth/SignIn';
import { SignUp } from './features/auth/SignUp';
import { Footer } from './layouts/Footer'
import Header from './layouts/Header'
import { Flex ,Box} from '@mantine/core';
function App() {
  return (
    <> 
 <Flex direction="column"  h="100vh" style={{ overflowY: 'hidden' }}>
        <Header />
        <Box flex={1} w="100%" style={{ overflowY: 'auto' }} >
        <SignIn/>
        </Box>
        <Footer />
      </Flex>

    </>
  )
}
export default App

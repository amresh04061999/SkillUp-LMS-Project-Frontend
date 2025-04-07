import { Anchor, Box, Button, Flex, Grid, Input, Text } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
export const SignIn = () => {
  return (
    <>
      <Flex justify={'center'} align={'center'} h={'100%'}>
        <Box w={500} p={20} style={{ border: '2px solid gray' }}>
          <Text size="20px" fw={'bold'} py={25}>
            Login to your account
          </Text>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
              <Box component="label">
                Email Id<span style={{ color: 'red' }}>*</span>
              </Box>
              <Input placeholder="Enter Email Id" />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
              <Box component="label">
                Password<span style={{ color: 'red' }}>*</span>
              </Box>
              <Input placeholder="Enter Password" />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
              <Button
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 222 }}
                fullWidth
              >
                Login
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
              <Button
                variant="light"
                fullWidth
                leftSection={<IconBrandGoogle stroke={2} size={'18px'} />}
              >
                Continue with Google
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
              <Flex justify={'center'}>
                <Box component="label">Don't have an account? </Box>
                <Box component="label" ps={5}>
                  <Anchor> SignUp</Anchor>
                </Box>
              </Flex>
            </Grid.Col>
          </Grid>
        </Box>
      </Flex>
    </>
  )
}

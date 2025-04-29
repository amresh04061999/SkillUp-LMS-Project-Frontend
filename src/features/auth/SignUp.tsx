import {
  Anchor,
  Avatar,
  Box,
  Button,
  FileInput,
  Flex,
  Grid,
  Group,
  Input,
  Select,
  Text,
} from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<string | null>(null)
  const [userType, setUserType] = useState('Student')
  console.log(userType)

  //Open file input dialog when avatar is clicked
  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }
  const handleFilterFiledBaseOnSelected = (value: string) => {
    console.log(value)
    setUserType(value)
  }
  return (
    <Flex
      justify={'center'}
      align={'center'}
      h={'100%'}
      style={{ overflowY: 'hidden' }}
    >
      <Box
        w={600}
        p={20}
        h={'550px'}
        style={{ overflowY: 'auto', border: '2px solid gray' }}
      >
        <Text size="20px" fw={'bold'} py={10}>
          Create an account
        </Text>
        <Group>
          <Box component="label">
            Already have an account ?{' '}
            <Link to={'/login'}>
              <Anchor>SignIn</Anchor>
            </Link>
          </Box>
        </Group>
        <Group py={20}>
          <Avatar
            variant="filled"
            radius="100%"
            size="xl"
            src={image}
            onClick={handleAvatarClick}
            style={{
              cursor: 'pointer',
              border: '2px solid black',
              padding: 2,
            }}
          />
          <input
            type="file"
            accept="image/png,image/jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </Group>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              First Name<span style={{ color: 'red' }}>*</span>
            </Box>
            <Input placeholder="Enter FirstName" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              Last Name<span style={{ color: 'red' }}>*</span>
            </Box>
            <Input placeholder="Enter LastName" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              Email Id<span style={{ color: 'red' }}>*</span>
            </Box>
            <Input placeholder="Enter Email Id" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              Password<span style={{ color: 'red' }}>*</span>
            </Box>
            <Input placeholder="Enter Password" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              Phone Number<span style={{ color: 'red' }}>*</span>{' '}
            </Box>
            <Input placeholder="Enter Phone number" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
            <Box component="label">
              Select User Type<span style={{ color: 'red' }}>*</span>
            </Box>
            <Select
              value={userType}
              placeholder="Pick value"
              data={['Student', 'Instructor']}
              onChange={(value) => {
                if (value) handleFilterFiledBaseOnSelected(value)
              }}
            />
          </Grid.Col>
          {userType === 'Instructor' && (
            <>
              <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Box component="label">
                  Subject Specialization<span style={{ color: 'red' }}>*</span>
                </Box>
                <Input placeholder="Enter Subject Specialization" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Box component="label">
                  Years of Experience<span style={{ color: 'red' }}>*</span>
                </Box>
                <Input placeholder="Enter Years of Experience" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Box component="label">
                  Highest Qualification<span style={{ color: 'red' }}>*</span>
                </Box>
                <Input placeholder="Enter Highest Qualification" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                <Box component="label">Resume Upload (Optional)</Box>
                <FileInput
                  accept="image/png,image/jpeg"
                  placeholder="Upload files"
                />
              </Grid.Col>
            </>
          )}
          <Grid.Col span={{ base: 12, md: 6, lg: 12 }}>
            <Button fullWidth>Create Account</Button>
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
        </Grid>
      </Box>
    </Flex>
  )
}

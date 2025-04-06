import {
  Box,
  Burger,
  Button,
  Drawer,
  Group,
  ScrollArea,
  Image,
  Text,
  Avatar,
  Menu
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import classes from './Header.module.css'
import logoImage from '../assets/Image/logo.png'
import { IconArrowsLeftRight, IconBell, IconBrightnessUp, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconShoppingCart, IconTrash } from '@tabler/icons-react'
import { IconHeart } from '@tabler/icons-react'
import SearchBox from '../components/SearchBox'
export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group h="100%" gap={0} visibleFrom="sm">
            <Image radius="md" h={40} src={logoImage} />
            <Text size="20px" fw={'bold'} c={'#228be6'}>
              Skill-UP
            </Text>
          </Group>
          <Group><SearchBox/></Group>
          <Group visibleFrom="sm">
          <Avatar  style={{cursor:"pointer"}} variant="light" radius="sm"  src="" >
          <IconShoppingCart stroke={2}  />
          </Avatar>
          <Avatar style={{cursor:"pointer"}} variant="light" radius="sm" src="" >
          <IconHeart stroke={2} />
          </Avatar>
          <Avatar style={{cursor:"pointer"}} variant="light" radius="sm" src="" >
          <IconBell stroke={2} />
          </Avatar>
          <Avatar style={{cursor:"pointer"}} variant="light" radius="sm" src="" >
          <IconBrightnessUp stroke={2} />
          </Avatar>
            <Button  variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 222 }}>Login</Button>
            <Button  variant="gradient"
      gradient={{ from: 'indigo', to: 'cyan', deg: 222 }}>SignUp</Button>
            <Menu shadow="md" width={200}>
      <Menu.Target>
      <Avatar style={{cursor:"pointer"}} variant="light" radius="sm" src="" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto size={14} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash size={14} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>
      {/* Mobile  */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

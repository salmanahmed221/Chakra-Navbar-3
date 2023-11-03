"use client"
import { Box, Heading, Text, HStack, Button, Flex, IconButton } from "@chakra-ui/react"
import Link from "next/link"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar() {
  return (

    <Box bg="#87c0da">

      {/* Logo */}
      <Flex justify={{ lg: "space-around", sm: "space-between" }} py="10px" px={{ sm: "20px" }}>
        <Box>
          <Heading>
            Logo
          </Heading>
        </Box>

        {/* Links */}

        <Box display={{ sm: "none", md: "initial", lg: "initial" }}>
          <HStack spacing="30px" fontWeight="semibold" mt="10px">
            <Text>
              <Link href={""}>Home</Link>
            </Text>
            <Text>
              <Link href={""}>
                About
              </Link>
            </Text>
            <Text>
              <Link href={""}>
                Contact
              </Link>
            </Text>
            <Text>
              <Link href={""}>
                Info
              </Link>
            </Text>
          </HStack>
        </Box>

        {/* Button */}

        <Box display={{ sm: "none", md: "initial", lg: "initial" }}>
          <Button colorScheme="blue" px="25px" fontWeight="semibold">Apply</Button>
        </Box>

        {/* Hamburger icom */}

        <Box display={{ sm: "initial", md: "none", lg: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem >
                Home
              </MenuItem>
              <MenuItem >
                About
              </MenuItem>
              <MenuItem >
                Contact
              </MenuItem>
              <MenuItem>
                Info
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  )
}

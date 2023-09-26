import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">not found | 404</Heading>
      <Text>the page you&apos;re looking for was not found -_-</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          homepage
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound

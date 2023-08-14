import { Button, Container, Heading, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

const NotFound = () => {
  return (
    <Container h="90vh" p="16">
    
    <VStack  h={'full'} justifyContent={'center'} spacing={4}>
        <RiErrorWarningFill size={"5rem"}/>
    <Heading my="8" textAlign={'center'}>Page Not Found </Heading>
    <Link href='/'><Button colorScheme='yellow' variant={'ghost'}>Go to Home</Button></Link>
    
    </VStack>
    </Container >
  )
}

export default NotFound
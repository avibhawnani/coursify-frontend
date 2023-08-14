import { Button, Container, Heading, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

const PaymentsFail = () => {
  return (
    <Container h="90vh" p="16">
    
    <VStack  h={'full'} justifyContent={'center'} spacing={4}>
        <RiErrorWarningFill size={"5rem"}/>
    <Heading my="8" textAlign={'center'} textTransform={'uppercase'} color={"red.500"}>Error!</Heading>
    <Heading textAlign={'center'} textTransform={'uppercase'}>Payment Failed</Heading>
    <Link href='/subscribe'><Button colorScheme='yellow' variant={'ghost'}>Try Again</Button></Link>
    
    </VStack>
    </Container >
  )
}

export default PaymentsFail
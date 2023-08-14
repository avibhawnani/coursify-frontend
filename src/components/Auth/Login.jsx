import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch()
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(login(email,password));

  }
  return (
    <Container h={'95vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={16}>
            <Heading children="Welcome to Coursify"/>
            <form style={{width:"100%"}} onSubmit={submitHandler}>
                <Box my={'4'}>
                <FormLabel htmlFor='email' children="Email Address"></FormLabel>
                <Input required id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='musk@gmail.com' type='email' focusBorderColor='yellow.500'></Input>
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor='password' children="Password"></FormLabel>
                <Input required id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your keys' type='password' focusBorderColor='yellow.500'></Input>
                </Box>
                <Box>
                    <Link href="/forgetpassword"><Button fontSize={'sm'} variant={'link'}>Forget Password ?</Button></Link>
                </Box>
                <Button type='submit' colorScheme='yellow' my={'4'}>Login</Button>
                <Box my={'4'}>New User ? <Link href="/register"><Button variant={'link'} colorScheme='yellow'> Sign Up</Button></Link> here</Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Login
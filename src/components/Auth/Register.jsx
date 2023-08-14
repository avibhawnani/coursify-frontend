import { Avatar, Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actions/user'

export const fileUploadCss = {
   
        cursor:"pointer",
        marginLeft:"-5%",
        width:"110%",
        border:"none",
        height:"100%",
        color:"#ECC94B",
        backgroundColor:"white"
    
}
const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss
}
const Register = () => {
  const [name,setName] = useState('');  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [imgPrev,setImgPrev] = useState('');
  const [img,setImg] = useState('');
  const dispatch = useDispatch();

  const changeImageHandler = (e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = ()=>{
        setImgPrev(reader.result);
        setImg(file);
    }
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name",name);
    myForm.append("email",email);
    myForm.append("password",password);
    myForm.append("file",img);

    dispatch(register(myForm));
  }
  return (
    <Container h={'120vh'}>
        <VStack h={'full'} justifyContent={'center'} spacing={16}>
            <Heading children="Sign up and start learning"/>
            <form style={{width:"100%"}} onSubmit={submitHandler}>
                <Box my={'4'} display={'flex'} justifyContent={'center'}>
                    <Avatar src={imgPrev} size="2xl"/>
                </Box>
                <Box my={'4'}>
                <FormLabel htmlFor='name' children="Name"></FormLabel>
                <Input required id="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Elon Musk' type='text' focusBorderColor='yellow.500'></Input>
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor='email' children="Email Address"></FormLabel>
                <Input required id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='musk@gmail.com' type='email' focusBorderColor='yellow.500'></Input>
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor='password' children="Password"></FormLabel>
                <Input required id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your keys' type='password' focusBorderColor='yellow.500'></Input>
                </Box>

                <Box my={'4'}>
                <FormLabel htmlFor='chooseAvatar' children="Choose Avatar"></FormLabel>
                <Input required accept='image/*' id="avatar"  type='file' focusBorderColor='yellow.500' css={fileUploadStyle} onChange={changeImageHandler}></Input>
                </Box>
                
                <Button type='submit' colorScheme='yellow' my={'4'}>Sign Up</Button>
                <Box my={'4'}>Already a User ? <Link href="/login"><Button variant={'link'} colorScheme='yellow'> Log In</Button></Link> here</Box>
            </form>
        </VStack>
    </Container>
  )
}

export default Register
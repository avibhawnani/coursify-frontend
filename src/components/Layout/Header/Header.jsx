import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';


const LinkButton = ({url="/",title="Home", onClose}) => (
    <Link onClick={onClose} to={url}><Button variant={'ghost'}>{title}</Button></Link>
)


const Header = ({user,isAuthenticated=false}) => {

  const {isOpen, onOpen,onClose} = useDisclosure();
  const dispatch = useDispatch();
  
  const logOutHandle = ()=>{
    onClose();
    dispatch(logout());
    
  }
  return (
    <div>
        
        <ColorModeSwitcher/>
        <Button colorScheme='yellow' width={"12"} height={"12"} zIndex={'overlay'}
        rounded={"full"}
        position={"fixed"}
        top={6}
        left={6} 
        onClick={onOpen}>
            <RiMenu5Fill/>
        </Button>
        <Text children="COURSIFY" fontSize={"3xl"} textAlign={["center","left"]} position={"fixed"} top={"6"} left={"20"} fontWeight={"semibold"} zIndex={'overlay'} colorScheme='yellow' color={'yellow.400'}></Text>
        <Drawer placement='left' isOpen={isOpen} onClose={onClose} >
            <DrawerOverlay backdropFilter={"blur(3px)"}/>
            <DrawerContent>
                <DrawerHeader borderBottomWidth={'1px'}>Coursify</DrawerHeader>
                <DrawerBody>
                    <VStack spacing={4} alignItems={"flex-start"}>
                       <LinkButton onClose={onClose} url="/" title="Home"/>
                       <LinkButton onClose={onClose} url="/courses" title="Courses"/>
                       <LinkButton onClose={onClose} url="/request" title="Request a Course"/>
                       <LinkButton onClose={onClose} url="/contact" title="Contact Us"/>
                       <LinkButton onClose={onClose} url="/about" title="About"/>
                       
                       <HStack justifyContent={"space-evenly"} position={"absolute"} bottom={"2rem"} width={"80%"}>
                        {isAuthenticated?
                        (<>
                            <VStack>
                                <HStack>
                                <Link onClick={onClose} to={"/profile"}><Button colorScheme='yellow' variant={'ghost'}>Profile</Button></Link>
                                <Button variant={'ghost'} onClick={logOutHandle}><RiLogoutBoxLine></RiLogoutBoxLine> Logout</Button>
                                </HStack>
                                {user && user.role === "admin" && <Link onClick={onClose} to={"/admin/dashboard"}><Button colorScheme='blue' variant={"ghost"}><RiDashboardFill style={{margin:"4px"}}></RiDashboardFill> Dashboard</Button></Link>}
                            </VStack>
                        </>):
                        (<>
                            <Link onClick={onClose} to={"/login"}><Button colorScheme='yellow'>Login</Button></Link>
                            <p>OR</p>
                            <Link onClick={onClose} to={"/register"}><Button colorScheme='yellow'>Sign Up</Button></Link>

                        </>)}
                       </HStack>
                    </VStack>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
    </div>
  )
}

export default Header;


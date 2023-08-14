import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import banner from "../../assets/images/banner.svg";
import {CgGoogle, CgYoutube} from "react-icons/cg";
import {SiUdemy, SiCoursera} from "react-icons/si";
import {DiAws} from "react-icons/di";
import intro  from "../../assets/videos/clips.mp4";
const Home = () => {
  return (
    <section className='home'>
        <div className="container">
            <Stack 
             direction={["column","row"]}
             height="100%"
             justifyContent={["center","space-between"]}
             alignItems={"center"}
             spacing={["16","56"]} >

                <VStack width="full" alignItems={["center","flex-end"]} className='v-container' spacing={"5"}>
                    <Heading children="LEARN FROM THE EXPERTS." size={"2xl"}/>
                    <Text textAlign={["center","left"]} children="Learning that gets you Skills for your present (and your future)" fontSize={"xl"}/>
                    <Link to={"/courses"} ><Button size={"lg"} colorScheme='yellow'>Explore Now</Button></Link>
                </VStack>
                <Image src={banner} boxSize={"md"} objectFit={"contain"} className='banner'/>
            </Stack>
        </div>
        <Box padding={"8"} bgColor={"blackAlpha.800"}>
            <Heading textAlign={"center"} fontFamily={'body'} color={"yellow.400"} children="OUR PARTNERS"/>
            <HStack className='partnerBanner' justifyContent={"space-evenly"} marginTop={5}>
                <SiCoursera/>
                <SiUdemy/>
                <CgGoogle/> 
                <CgYoutube/>
                <DiAws/>
            
            </HStack>
        </Box>
        <div className="container-2">
            <video autoPlay
            controls controlsList='nodownload nofullscreen noremoteplayback'
            src={intro}
            disablePictureInPicture
            disableRemotePlayback
            ></video>
        </div>
    </section>
  )
}

export default Home
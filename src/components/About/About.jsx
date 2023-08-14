import { Avatar, Box, Button, Container, HStack, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import intro  from "../../assets/videos/clips.mp4";
import { RiSecurePaymentFill } from 'react-icons/ri';
const Founder = ()=>(
    <Stack direction={["column","row"]} spacing={["4","16"]} padding={'8'}>
    <VStack>
        <Avatar boxSize={["40","48"]} src='https://avatars.githubusercontent.com/u/88795320?v=4'/>
        <Text children="Co-Founder" opacity="0.7"/>
    </VStack>
    <VStack justifyContent={'center'} alignItems={["center","flex-start"]}>
        <Heading children="Avi Bhawnani" size={["md","xl"]}/>
        <Text children="Hi, I am a full stack developer and a blockchain enthusiast. Our mission is to provide quality content at reasonable prices." textAlign={["center","left"]}/>
    </VStack>
    </Stack>
)

const VideoPlayer = ()=>(
    <Box>
        <video 
            autoPlay
            muted
            controls controlsList='nodownload nofullscreen noremoteplayback'
            src={intro}
            disablePictureInPicture
            disableRemotePlayback
            ></video>
    </Box>
)
const TandC = ({termsnandC})=>(
    <Box>
        <Heading textAlign={["center","left"]} size={'md'} my={4}>Terms & Condition</Heading>
        <Box h="sm" p={4} overflowY={'scroll'}>
            <Text fontFamily={'heading'} textAlign={["center","left"]} letterSpacing={'widest'} >{termsnandC}</Text>
            <Heading my={4} size={'xs'}> Refund applicable only within 7 days.</Heading>
        </Box>
    </Box>
)
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'} marginTop={4}>
    <Heading children="About Us" textAlign={["center","left"]}/>
    <Founder/>
    <Stack m={8} direction={['column','row']} alignItems={'center'}>
    <Text fontFamily={'cursive'}  textAlign={["center","left"]} m={8}>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</Text>
    <Link href='/subscribe'><Button variant={'ghost'} colorScheme='yellow'>Checkout our Plans</Button></Link>
    </Stack>
    <VideoPlayer></VideoPlayer>
    <TandC termsnandC = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"/>
    <HStack my={4} padding={'4'}>
        <RiSecurePaymentFill/>
        <Heading size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}>Payment is secured by Razorpay</Heading>
    </HStack>
    </Container>
  )
}

export default About
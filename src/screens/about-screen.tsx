import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Heading
} from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Navbar from '../components/navbar'
import Masthead from '../components/masthead'
const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about_masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4} flexDirection={'column'}>
          <Heading>Team Members</Heading>
          <HStack space={10} flex={1} justifyContent={'center'}>
            <Image
              source={require('../assets/varun.png')}
              borderRadius="full"
              resizeMode="cover"
              w={110}
              h={110}
              alt="author"
            />
            <Image
              source={require('../assets/akshat.png')}
              borderRadius="full"
              resizeMode="cover"
              w={110}
              h={110}
              alt="author"
            />
          </HStack>
          <HStack space={10} flex={1} justifyContent={'center'}>
            <Image
              source={require('../assets/himanshu.png')}
              borderRadius="full"
              resizeMode="cover"
              w={110}
              h={110}
              alt="author"
            />
            <Image
              source={require('../assets/ananya.png')}
              borderRadius="full"
              resizeMode="cover"
              w={110}
              h={110}
              alt="author"
            />
          </HStack>

          <VStack flex={1} justifyContent={'center'}>
            <Text fontSize={20}>Varun Kedia</Text>
            <Text fontSize={20}>Akshat Narayan Gupta</Text>
            <Text fontSize={20}>Himanshu Shekhar Pandey</Text>
            <Text fontSize={20}>Ananya Kumar</Text>
          </VStack>
          <Text fontSize="md" w="full" fontWeight={'extrabold'}>
            Final Year Project by Team 8 AEC
          </Text>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen

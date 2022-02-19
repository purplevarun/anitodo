import React from 'react'
import { VStack, useColorModeValue, Heading } from 'native-base'
import AnimatedColorBox from '../components/animated-color-box'
import Masthead from '../components/masthead'
import NavBar from '../components/navbar'

export default function BinScreen() {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
    >
      <Masthead
        title="Hello World!"
        image={require('../assets/main_masthead.png')}
      >
        <NavBar />
      </Masthead>
      <VStack flex={1} mt={10} ml={5} mr={5}>
        <Heading alignSelf={'center'}>Your Deleted Tasks</Heading>
      </VStack>
    </AnimatedColorBox>
  )
}

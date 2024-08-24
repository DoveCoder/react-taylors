import { Button, Flex, Stack, Text, useBreakpointValue, VStack} from "@chakra-ui/react";

//export type HomeHeroProps = Pick<CommonHeroProps, "heroImg">

const HomeHero = () => {
  return (
    <Flex
      w={'full'}
      h={'40vh'}
      backgroundImage={
        '/images/heroImg.jpg'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            Beginners welcome come join us for self defense and fun
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'#088395'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: '#35A29F' }}
            >
              Sign Up
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default HomeHero;

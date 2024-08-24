import {Box, Flex} from "@chakra-ui/react";
import HomeHero from "./components/Hero/HomeHero";
import { ReactNode } from "react";
import {ChildProp} from "./lib/types.ts";

const OffWhiteContainer = (props: ChildProp) => (
  <Box width='full' pb={16} background="whitesmoke" {...props} />
)

const ContentBox = (props: ChildProp) => (
  <Box py={4} px={{ base: 4, lg: 8 }} {...props} />
)

function App() {
  return (
    <>
      <Box w="full">
        <HomeHero />
        <OffWhiteContainer>
          <ContentBox>
            <Flex>

            </Flex>
          </ContentBox>
        </OffWhiteContainer>
      </Box>
    </>
  );
}

export default App;

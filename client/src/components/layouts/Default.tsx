import React from 'react'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Badge,
    Box,
    Circle,
    Code,
    Flex,
    Grid,
    GridItem,
    HStack,
    Spacer,
    StatDownArrow,
    StatUpArrow,
    Text,
    VStack,
} from '@chakra-ui/react'
import NavHeader from '../NavHeader'
import bg from '../../assets/bg.png'
import {
    BsArrowDownCircle,
    BsCamera,
    BsCameraVideo,
    BsMic,
    BsPhone,
    BsRecord,
} from 'react-icons/bs'
import { ReactComponent as Blob } from '../../assets/blob.svg'
type LayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = ({ children }: LayoutProps) => (
    // <Box minHeight="100vh" bgImage={bg} bgPosition="center" bgRepeat="no-repeat" width={'100%'}>
    //     <NavHeader />

    //     <>{children}</>
    // </Box>
    <>
        <HStack
            bgImage={bg}
            bgPosition="center"
            bgRepeat="no-repeat"
            width={'100%'}
            minHeight={'100vh'}
            position={'fixed'}
            p={5}
        >
            <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(6, 1fr)" gap={4}>
                <GridItem colSpan={1} rowSpan={1}>
                    <HStack
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={'20vw'}
                        minHeight={'100vh'}
                    >
                        <Accordion allowToggle>
                            <AccordionItem borderWidth={'0px'}>
                                <AccordionButton borderWidth={'0px'}>
                                    <VStack flex={1} outline={'0px'}>
                                        <Badge
                                            size="lg"
                                            fontSize={'1.2em'}
                                            variant="outline"
                                            color={'white'}
                                        >
                                            Mila.Health
                                        </Badge>
                                        {/* <BsArrowDownCircle color={'white'} /> */}
                                    </VStack>
                                </AccordionButton>

                                <AccordionPanel textAlign={'center'} pb={4} borderWidth={'0px'}>
                                    Hi! Welcome to Mila.Health, a project spinning out of Imperial
                                    College London <br />
                                    <br />
                                    This is a projected 2041 AI Healthcare System for All. We
                                    leverage Federated Learning and Big Data to develop a life
                                    saving system where everyone owns their own data.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </HStack>
                </GridItem>
                <GridItem colSpan={2} rowSpan={1}>
                    <HStack
                        alignItems={'center'}
                        justifyContent={'center'}
                        maxWidth={'40vw'}
                        minHeight={'100vh'}
                    >
                        <Flex
                            bgColor={'whiteAlpha.300'}
                            borderRadius={'50px'}
                            p={10}
                            width={'25vw'}
                            height={'40vw'}
                        >
                            <Flex flexDirection={'column'}>
                                <Code mb={3} colorScheme={'red'}>
                                    {'>'} Personal Phone
                                </Code>
                                <Box
                                    width={'12vw'}
                                    bgColor={'primary'}
                                    height={'20px'}
                                    borderRadius={'5px'}
                                    mb={3}
                                />
                                <Box
                                    width={'8vw'}
                                    bgColor={'blue'}
                                    height={'20px'}
                                    borderRadius={'5px'}
                                    mb={3}
                                />
                                <Box
                                    width={'4vw'}
                                    bgColor={'pink'}
                                    height={'20px'}
                                    borderRadius={'5px'}
                                    mb={3}
                                />
                            </Flex>
                        </Flex>
                    </HStack>
                </GridItem>
                <GridItem colSpan={3} rowSpan={1}>
                    <HStack
                        alignItems={'center'}
                        justifyContent={'center'}
                        maxWidth={'40vw'}
                        minHeight={'100vh'}
                    >
                        <Flex
                            bgColor={'whiteAlpha.300'}
                            borderRadius={'50px'}
                            p={10}
                            width={'40vw'}
                            height={'40vw'}
                        >
                            <Flex
                                flexDirection={'row'}
                                width={'200px'}
                                justifyContent={'space-between'}
                                position={'absolute'}
                            >
                                <Box pt={'2.5px'}>
                                    <BsRecord color="red" size={'20px'} />
                                </Box>
                                <Text fontWeight={'600'}>LIVE</Text>
                                <Text> Vitals Recording...</Text>
                            </Flex>
                            <Flex
                                flexDirection={'row'}
                                width={'130px'}
                                p={2}
                                justifyContent={'space-between'}
                                mt={6}
                                position={'absolute'}
                            >
                                <BsCameraVideo color="red.200" size={'20px'} />
                                <BsPhone color="red.200" size={'20px'} />
                                <BsMic color="red.200" size={'20px'} />
                                {/* <Caemra color="red.200" size={'20px'} /> */}
                            </Flex>

                            <Box paddingLeft={'15vw'} paddingBottom={'2vw'}>
                                <Blob width={'20vw'} />
                            </Box>
                        </Flex>
                    </HStack>
                </GridItem>
            </Grid>
            {/* <NavHeader /> */}
            {/* <Box bgColor={'white'} opacity={0.2} width={'20vw'}></Box>
            <Box bgColor={'yellow'} opacity={0.2} width={'20vw'}></Box> */}
        </HStack>
    </>
)

export default DefaultLayout

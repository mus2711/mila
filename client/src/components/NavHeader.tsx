import React from 'react'
import { Badge, Flex, Text, VStack } from '@chakra-ui/react'

const NavHeader = () => (
    <Flex mx={10} my={10} width={'170px'} alignItems={'center'} justifyContent={'center'}>
        {/* <Text fontSize={'25px'} fontWeight={'600'}>
            Mila.Health
        </Text> */}
        <Badge size="lg" fontSize={'1.2em'} variant="outline" color={'white'}>
            Mila.Health
        </Badge>
    </Flex>
)

export default NavHeader

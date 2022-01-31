import React from 'react'
import './App.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import DefaultLayout from './components/layouts/Default'
import theme from './theme'

const defaultTheme = extendTheme(theme)

const App = () => {
    return (
        <ChakraProvider theme={defaultTheme}>
            <DefaultLayout>
                <></>
            </DefaultLayout>
        </ChakraProvider>
    )
}

export default App

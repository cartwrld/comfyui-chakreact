import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";
import {Box, Center, Flex} from "@chakra-ui/react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <Flex w={'100vw'} h={'100vh'} justifyContent={'center'} alignContent={'center'} >
                <Flex justifyContent={'center'} alignContent={'center'} w={'96%'} p={2} bg={'white'} mt={'1.6%'}
                      rounded={'25px'} maxH={'93vh'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                    <Flex justifyContent={'center'} alignContent={'center'} bg={'gray.900'} rounded={'18px'} w={'100%'}
                          maxH={'92vh'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'} >
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Providers>
        </body>
        </html>
    )
}

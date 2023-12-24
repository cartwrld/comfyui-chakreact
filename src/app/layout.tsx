import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
// import './globals.css'
import {Providers} from "@/app/providers";
import {
    Flex,
} from "@chakra-ui/react";

import React from "react";
export const metadata: Metadata = {
    title: 'chakreactUI',
    description: 'Simplified interface for Comfy UI',
}

export default function RootLayout({children,}: { children: React.ReactNode}) {

    return (
        <html lang="en">
        <body>
        <Providers>
            <Flex w={'100vw'} h={'100vh'} justifyContent={'center'} alignContent={'center'} >
                <Flex justifyContent={'center'} alignContent={'center'} w={'99%'} p={2} bg={'white'} mt={'0.7%'}
                      rounded={'25px'} maxH={'97.4vh'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                    <Flex justifyContent={'center'} alignContent={'center'} bg={'gray.500'} rounded={'18px'} w={'100%'}
                          maxH={'96.3vh'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'} >

                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Providers>
        </body>
        </html>
    )
}

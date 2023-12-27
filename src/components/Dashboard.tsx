'use client'

import {Button, Center, Divider, Flex, Heading} from "@chakra-ui/react";
import React, {Component, useState} from "react";
import {BiMenu} from "react-icons/bi";
import Image from "next/image";
import {FaHistory} from "react-icons/fa";
import {FaCode, FaImages} from 'react-icons/fa6'
import {useRouter} from 'next/navigation';
import styles from '../app/page.module.css'
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {AiTwotoneExperiment} from "react-icons/ai";
import {ColorBuddy} from "@/utils/ColorBuddy";

const cb = new ColorBuddy()


type DashboardState = {
    isShrunk: boolean;
}

type DashboardProps = {
    currentPage: string;
}

// @ts-ignore
export default function Dashboard(currentPage: string) {

    const [isShrunk, setIsShrunk] = useState(true)
    const router = useRouter()

    function handleToggleAnimation(): void {
        setIsShrunk(!isShrunk);
    }


    const navigate = (path: string) => {
        if (currentPage !== path) {
            router.push(`/${path}`);
        }
    };

    const Divider2 = () => (<><Divider/><Divider/></>)
    const Divider6 = () => (<><Divider2/><Divider2/><Divider2/></>)


    return (
        <Flex className={isShrunk ? styles.expand : styles.shrink}
              flexDir={'column'} bg={'gray.500'} alignItems={'center'}
              roundedLeft={'20px'}
              roundedBottomStart={'15px'}
              shadow={'1px 0 10px rgba(0,0,0,0.1)'}>
            <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.600'} w={'100%'} roundedTopLeft={'16px'}>
                <Image src={'/images/cwlogo_final_transparent_blk.png'} alt={'cw_logo'} width={200} height={200}/>
            </Flex>
            <Divider/>
            <Button onClick={handleToggleAnimation} mb={0} rounded={0} bg={'gray.600'}
                    ps={7}
                    width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                <Flex className={isShrunk ? styles.flipLeft : styles.flipRight}>
                    <IoIosArrowBack fontSize={'2.5em'}/>
                </Flex>

                <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                        ms={4} pb={1} w={'70%'}>
                    <Heading fontSize={'1.6em'} w={'100%'}>Menu</Heading>
                </Center>

            </Button>

            <Divider6/>

            {/*<Button onClick={() => navigate('generate')} mb={0} rounded={0} bg={'gray.500'} ps={8}*/}
            {/*        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>*/}
            {/*    <Flex pt={2} pb={2}>*/}
            {/*        <FaImages fontSize={'2.1em'} me={2}/>*/}
            {/*    </Flex>*/}
            {/*    <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}*/}
            {/*            ms={4} pb={1} w={'70%'}>*/}
            {/*        <Heading fontSize={'1.6em'} w={'100%'}>Generate</Heading>*/}
            {/*    </Center>*/}
            {/*</Button>*/}
            {DashboardBTN('generate', 'Generate')}
            <Divider2/>
            {DashboardBTN('history', 'History')}
            <Divider2/>
            {DashboardBTN('testing', 'Testing')}
            <Divider2/>
        </Flex>
    )


    function DashboardBTN(route: string, title: string) {
        return (
            <Button onClick={() => navigate(route)} mb={0} rounded={0} bg={'#586476'} ps={8}
                    width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                <Flex pt={2} pb={2}>
                    {route === 'generate'
                        ? (
                            <FaImages fontSize={'2.1em'} me={2}/>
                        ) : route === 'history'
                            ? (<FaHistory fontSize={'2.1em'} me={2}/>)
                            : route === 'testing'
                                ? (<AiTwotoneExperiment fontSize={'2.1em'} me={2}/>)
                                : (<Center>error</Center>)
                    }
                </Flex>
                <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                        ms={4} pb={1} w={'70%'}>
                    <Heading fontSize={'1.6em'} w={'100%'}>{title}</Heading>
                </Center>
            </Button>
        )
    }


}


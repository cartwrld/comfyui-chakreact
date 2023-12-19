import {
    Button, Center,
    Flex,
    Heading,
    Stack,
} from "@chakra-ui/react";
import React, {Component} from "react";
import {BiMenu} from "react-icons/bi";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import {router} from "next/client";
import Image from "next/image";
import {FaHistory, FaImage, FaImages} from "react-icons/fa";


type DashboardState = {
    isOpen: boolean;

}

type DashboardProps = {
    onDashboardChange: (newCKPT: string) => void;
    currentPage: string;
}

export default class Dashboard extends Component<DashboardProps, DashboardState> {


    handleGenerateClick(): void {
        if (this.props.currentPage !== 'home') router.push('/');
    }

    handleHistoryClick() {
        if (this.props.currentPage !== 'history') router.push('/history');
    }

    handleLogoClick() {
        router.push('/');
    }

    handleOpenAnimation() {

    }

    handleCloseAnimation() {

    }

    render() {

        return (
            <Flex flexDir={'column'} bg={'gray.400'} roundedLeft={'15px'} p={5} justifyContent={'start'}
                  alignItems={'center'}>
                <Button onClick={this.handleLogoClick} m={2} rounded={'10px'} bg={'gray.500'} width={'fit-content'}
                        height={'fit-content'}>
                    <Image src={'/images/cwlogo_final_transparent.png'} alt={'logo'} width={175} height={175}/>
                </Button>
                <Button m={2} onClick={this.handleActionAnimation} rounded={'10px'}>
                    <BiMenu fontSize={'2em'}/>
                    <Flex justifyContent={'space-around'} alignItems={'center'} p={4}>
                        <Heading color={'ghostwhite'} fontSize={'1.7em'}>
                            CartWrld
                        </Heading>
                    </Flex>

                </Button>
                <Flex flexDir={'column'} w={'100%'}>

                    <Button onClick={this.handleGenerateClick} mb={2} rounded={'10px'}
                            width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                        <Flex justifyContent={'start'} alignItems={'center'} w={'100%'}>
                            <FaImages fontSize={'2.1em' } me={2}/>
                            <Center ms={4} pb={1} w={'83%'}>
                                <Heading fontSize={'1.6em'} w={'100%'} >Generate</Heading>
                            </Center>
                        </Flex>
                    </Button>
                    <Button onClick={this.handleHistoryClick} mb={2} rounded={'10px'}
                            width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                        <Flex justifyContent={'start'} alignItems={'center'} w={'100%'}>
                        <FaHistory fontSize={'2.1em' } me={2}/>
                            <Center ms={4} pb={1} w={'83%'}>
                                <Heading fontSize={'1.6em'} w={'100%'} >History</Heading>
                            </Center>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        )
    }
}

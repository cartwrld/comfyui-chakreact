import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import React, {Component} from "react";
import {BiMenu} from "react-icons/bi";
import Image from "next/image";
import {FaHistory, FaImages} from "react-icons/fa";
import Router from 'next/router';
import styles from '../app/page.module.css'


type DashboardState = {
    isShrunk: boolean;
}

type DashboardProps = {
    currentPage: string;
}

// @ts-ignore
export default class DashboardOG extends Component<DashboardProps, DashboardState> {

    constructor(props: DashboardProps) {
        super(props);

        this.state = {
            isShrunk: false,
        };
    }

    handleToggleAnimation = () => {
        this.setState({isShrunk: !this.state.isShrunk});
    }

    handleLogoClick = () => {
        Router.push('/');
    }
    handleGenerateClick = () => {
        if (this.props.currentPage !== 'home') Router.push('/');
    }


    handleHistoryClick = () => {
        if (this.props.currentPage !== 'history') Router.push('/history');
    }
    handleTestingClick = () => {
        if (this.props.currentPage !== 'testing') Router.push('/');
    }

    render() {

        const { isShrunk } = this.state

        return (
            <Flex className={isShrunk ? styles.shrink : styles.expand} flexDir={'column'} bg={'gray.500'} roundedLeft={'15px'} p={5} justifyContent={'start'} alignItems={'center'} color={'gray.900'}>
                <Button onClick={this.handleLogoClick} m={2} rounded={'10px'} bg={'gray.500'} width={'fit-content'}
                        height={'fit-content'}>
                    <Image src={'/images/cwlogo_final_transparent.png'} alt={'logo'} width={175} height={175}/>
                </Button>
                <Button m={2} onClick={this.handleToggleAnimation} rounded={'10px'}>

                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <BiMenu fontSize={'2.1em'} />
                    </Flex>
                    <Flex justifyContent={'space-around'} alignItems={'center'} p={4} flexShrink={2}>
                        <Heading fontSize={'1.7em'}>
                            Menu
                        </Heading>
                    </Flex>

                </Button>
                <Flex flexDir={'column'} w={'100%'}>

                    <Button onClick={this.handleGenerateClick} mb={2} rounded={'10px'}
                            width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                        <Flex justifyContent={'start'} alignItems={'center'} w={'100%'}>
                            <FaImages fontSize={'2.1em'} me={2}/>
                            <Center ms={4} pb={1} w={'83%'}>
                                <Heading fontSize={'1.6em'} w={'100%'}>Generate</Heading>
                            </Center>
                        </Flex>
                    </Button>
                    <Button onClick={this.handleHistoryClick} mb={2} rounded={'10px'}
                            width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                        <Flex justifyContent={'start'} alignItems={'center'} w={'100%'}>
                            <FaHistory fontSize={'2.1em'} me={2}/>
                            <Center ms={4} pb={1} w={'83%'}>
                                <Heading fontSize={'1.6em'} w={'100%'}>History</Heading>
                            </Center>
                        </Flex>
                    </Button>
                    <Button onClick={this.handleTestingClick} mb={2} rounded={'10px'}
                            width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                        <Flex justifyContent={'start'} alignItems={'center'} w={'100%'}>
                            <FaHistory fontSize={'2.1em'} me={2}/>
                            <Center ms={4} pb={1} w={'83%'}>
                                <Heading fontSize={'1.6em'} w={'100%'}>Testing</Heading>
                            </Center>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        )
    }


}

import {Button, Center, Divider, Flex, Heading} from "@chakra-ui/react";
import React, {Component} from "react";
import {BiMenu} from "react-icons/bi";
import Image from "next/image";
import {FaHistory} from "react-icons/fa";
import {FaCode, FaImages} from 'react-icons/fa6'
import Router from 'next/router';
import styles from '../app/page.module.css'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";


type DashboardState = {
    isShrunk: boolean;
}

type DashboardProps = {
    currentPage: string;
}

// @ts-ignore
export default class Dashboard extends Component<DashboardProps, DashboardState> {

    constructor(props: DashboardProps) {
        super(props);

        this.state = {
            isShrunk: true,
        };
    }

    handleToggleAnimation = () => {
        this.setState({isShrunk: !this.state.isShrunk});
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

        const {isShrunk} = this.state

        return (
            <Flex className={isShrunk ? styles.expand : styles.shrink}
                  flexDir={'column'} bg={'gray.400'} alignItems={'center'}
                  roundedLeft={'20px'}
                  roundedBottomStart={'15px'}
                  shadow={'1px 0 10px rgba(0,0,0,0.1)'}>
                <Flex justifyContent={'center'} alignItems={'center'} bg={'gray.600'} w={'100%'} roundedTopLeft={'16px'}>
                    <Image src={'/images/cwlogo_final_transparent_blk.png'} alt={'cw_logo'} width={171} height={171}/>
                </Flex>
                <Divider/>
                <Button onClick={this.handleToggleAnimation} mb={0} rounded={0}  bg={'gray.600'}
                        ps={7}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <Flex className={isShrunk ? styles.flipLeft : styles.flipRight}>
                        <IoIosArrowBack fontSize={'2.5em'} />
                    </Flex>

                    <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                            ms={4} pb={1} w={'70%'}>
                        <Heading fontSize={'1.6em'} w={'100%'}>Menu</Heading>
                    </Center>

                </Button>

                <Divider6/>

                <Button onClick={this.handleGenerateClick} mb={0} rounded={0} bg={'gray.500'} ps={8}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <Flex pt={2} pb={2}>
                        <FaImages fontSize={'2.1em'} me={2} />
                    </Flex>
                    <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                            ms={4} pb={1} w={'70%'}>
                        <Heading fontSize={'1.6em'} w={'100%'}>Generate</Heading>
                    </Center>
                </Button>
                <Divider2/>

                <Button onClick={this.handleHistoryClick} mb={0} rounded={0} bg={'gray.500'} ps={8}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <Flex pt={2} pb={2}>
                        <FaHistory fontSize={'2.1em'} me={2} />
                    </Flex>
                    <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                            ms={4} pb={1} w={'70%'}>
                        <Heading fontSize={'1.6em'} w={'100%'}>History</Heading>
                    </Center>

                </Button>
                <Divider2/>
                <Button onClick={this.handleTestingClick} mb={0} rounded={0} bg={'gray.500'} ps={8}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <Flex pt={2} pb={2}>
                        < FaCode fontSize={'2.1em'} me={2} />
                    </Flex>
                    <Center className={isShrunk ? styles.shrinkAnimation : styles.expandAnimation}
                            ms={4} pb={1} w={'70%'}>
                        <Heading fontSize={'1.6em'} w={'100%'}>Testing</Heading>
                    </Center>
                </Button>
                <Divider2/>
            </Flex>
        )
    }
}


function Divider2() {
    return (
        <>
            <Divider/>
            <Divider/>
        </>
    )
}

function Divider6() {
    return (
        <>
            <Divider2/>
            <Divider2/>
        </>
    )
}




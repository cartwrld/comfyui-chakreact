import {Button, Center, Divider, Flex, Heading} from "@chakra-ui/react";
import React, {Component} from "react";
import {BiMenu} from "react-icons/bi";
import Image from "next/image";
import {FaHistory } from "react-icons/fa";
import {FaCode, FaImages} from 'react-icons/fa6'
import Router from 'next/router';
import styles from '../app/page.module.css'


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
            isShrunk: false,
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

        // const { isShrunk } = this.state

        return (
            <Flex flexDir={'column'} bg={'gray.500'} roundedTopLeft={'20px'}>
                <Button onClick={this.handleToggleAnimation} mb={0} rounded={0} roundedTopLeft={'16px'} bg={'gray.500'}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <BiMenu fontSize={'2em'}/>
                </Button>
                <Divider/>
                <Button onClick={this.handleGenerateClick} mb={0} rounded={0} bg={'gray.500'}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <FaImages fontSize={'2.1em'} me={2}/>
                </Button>
                <Divider/>
                <Button onClick={this.handleHistoryClick} mb={0} rounded={0} bg={'gray.500'}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    <FaHistory fontSize={'2.1em'} me={2}/>
                </Button>
                <Divider/>
                <Button onClick={this.handleTestingClick} mb={0} rounded={0} bg={'gray.500'}
                        width={'100%'} height={'fit-content'} py={3} justifyContent={'start'}>
                    < FaCode fontSize={'2.1em'} me={2}/>
                </Button>
                <Divider/>
            </Flex>
        )
    }
}







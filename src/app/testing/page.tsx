'use client'

import styles from '../page.module.css'
import {
    Box,

    Flex,

} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import {getHistory} from '@/utils/ComfyUtils';
import {ImageCard} from "@/components/ImageCard";
import {BiPlus} from "react-icons/bi";
import NavDrawer from "@/components/NavDrawer";
import DashboardOG from "@/components/DashboardOG";
import Dashboard from "@/components/Dashboard";


export default function Testing() {

    return (
        <>
            {/*<NavDrawer></NavDrawer>*/}
            <Dashboard currentPage={'testing'}/>
            <main className={styles.main}>

                <Box p={10} m={0} bg={'blueviolet'}>

                </Box>
            </main>
        </>
    );
}


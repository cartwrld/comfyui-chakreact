'use client'

import styles from '../page.module.css'
import {

    Flex,

} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import {getHistory} from '@/utils/ComfyUtils';
import {ImageCard} from "@/components/ImageCard";
import {BiPlus} from "react-icons/bi";
import NavDrawer from "@/components/NavDrawer";
import DashboardOG from "@/components/DashboardOG";


export default function History() {

    return (
        <>
            <DashboardOG currentPage={'history'}/>
            <main className={styles.main}>

                <Flex w={'100%'}>
                    <ImageCard/>
                </Flex>
            </main>
        </>
    );
}


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
import Dashboard from "@/components/Dashboard";



export default function History() {

    return (
        <>
        <Dashboard currentPage={'history'}/>
        <main className={styles.main}>

            <Flex flexDir={'row'} justifyContent={'space-around'} w={'98%'}>
                <ImageCard/>
            </Flex>
        </main>
        </>
    );
}


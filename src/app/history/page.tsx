'use client'

import styles from '../page.module.css'
import { Box, Center, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getHistory } from '@/utils/ComfyUtils';
import {ImageCard} from "@/components/ImageCard";



export default function History() {

    return (
        <main className={styles.main}>
            <Flex flexDir={'row'} justifyContent={'space-around'} w={'98%'} >
                <ImageCard  />
            </Flex>
        </main>
    );
}


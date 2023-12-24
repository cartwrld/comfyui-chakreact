'use client'

import styles from './page.module.css'
import {Center, Flex} from "@chakra-ui/react";
import {KSampler} from "@/components/ksampler/KSampler";
import {GeneratedImage} from "@/components/ksampler/GeneratedImage";
import {BaseShell} from "@/components/ksampler/BaseShell";
import React, {useState} from "react";
import {auto} from "@popperjs/core";
import NavDrawer from "@/components/NavDrawer";



export default function Home() {



    return (
        <>
            <NavDrawer></NavDrawer>
        <main className={styles.main}>


            <Flex flexDir={'row'} justifyContent={'space-around'} w={'98%'} alignItems={'center'}>

            </Flex>
        </main>
        </>
    );
}


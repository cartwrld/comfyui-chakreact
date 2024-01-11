'use client'

import styles from './page.module.css'
import {Box, Button, Center, Container, Divider, Flex, Heading, RadioGroup, Stack} from "@chakra-ui/react";
import {KSampler} from "@/components/ksampler/KSampler";
import {GeneratedImage} from "@/components/ksampler/GeneratedImage";
import {BaseShell} from "@/components/ksampler/BaseShell";
import React, {useState} from "react";
import {auto} from "@popperjs/core";
import NavDrawer from "@/components/NavDrawer";
import {FaAnglesLeft, FaAnglesRight} from "react-icons/fa6";
import {PartMachineRelations} from "@/components/proj/PartMachineRelations";
import MachineSelector from "@/components/proj/MachineSelector";

export default function Home() {



    return (
        <>
            <NavDrawer></NavDrawer>
        <main className={styles.main}>
            <Flex flexDir={'row'} justifyContent={'center'} w={'98%'} alignItems={'center'}>
                <MachineSelector />
            </Flex>
        </main>
        </>
    );
}



function retrieveExistingMachinesFromDB() {

}
function retrieveAllMachinesFromDB() {

}

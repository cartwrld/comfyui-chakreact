'use client'

import styles from '../page.module.css'
import {Center, Flex} from "@chakra-ui/react";
import {KSampler} from "@/components/ksampler/KSampler";
import {GeneratedImage} from "@/components/ksampler/GeneratedImage";
import {BaseShell} from "@/components/ksampler/BaseShell";
import React, {useState} from "react";
import {auto} from "@popperjs/core";
import DashboardOG from "@/components/DashboardOG";
import NavDrawer from "@/components/NavDrawer";



export default function Generate() {

    const [generatedImageUrl, setGeneratedImageUrl] = useState('https://i.imgur.com/nuwmvhQ.png'); // Initial placeholder image
    const [genImageWidth, setGenImageWidth] = useState(768); // Initial placeholder image
    const [genImageHeight, setGenImageHeight] = useState(768); // Initial placeholder image
    const [isLoading, setIsLoading] = useState(false); // Initial placeholder image

    const handleUpdateGeneratedImg = (url:string, isLoading: boolean): void  => {
        setGeneratedImageUrl(url); // Update the state with the new image URL
        setIsLoading(isLoading);
    };

    const handlePreGen = (width: number, height: number, isLoading: boolean): void => {
        setGenImageWidth(width);
        setGenImageHeight(height);
        setIsLoading(isLoading)
        console.log('==========')
        console.log(isLoading)
        console.log('==========')
    }

    return (
        <>
            <NavDrawer></NavDrawer>
        <main className={styles.main}>


            <Flex flexDir={'row'} justifyContent={'space-around'} w={'98%'} alignItems={'center'}>
                <BaseShell p={0} w={'auto'} h={'auto'}>
                    <KSampler onPreGeneration={handlePreGen} onGeneration={handleUpdateGeneratedImg}/>
                </BaseShell>
                <BaseShell p={5} w={'auto'} h={'auto'}>
                    <GeneratedImage isLoading={isLoading} imageUrl={generatedImageUrl} width={genImageWidth} height={genImageHeight} />
                </BaseShell>
            </Flex>
        </main>
        </>
    );
}


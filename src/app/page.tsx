'use client'

import styles from './page.module.css'
import {Center, Flex} from "@chakra-ui/react";
import {KSampler} from "@/components/KSampler";
import {GeneratedImage} from "@/components/GeneratedImage";
import {BaseShell} from "@/components/BaseShell";
import React, {useState} from "react";
import {auto} from "@popperjs/core";
import Dashboard from "@/components/Dashboard";
import NavDrawer from "@/components/NavDrawer";



export default function Home() {

    const [generatedImageUrl, setGeneratedImageUrl] = useState('https://i.imgur.com/nuwmvhQ.png'); // Initial placeholder image
    const [genImageWidth, setGenImageWidth] = useState(768); // Initial placeholder image
    const [genImageHeight, setGenImageHeight] = useState(768); // Initial placeholder image
    const [isLoading, setIsLoading] = useState(false); // Initial placeholder image

    const handleUpdateGeneratedImg = (url:string, width:number, height:number, isLoading:boolean): void  => {
        setGeneratedImageUrl(url); // Update the state with the new image URL
        setGenImageWidth(width);
        setGenImageHeight(height);
        setIsLoading(isLoading)

    };

    return (
        <>
            <NavDrawer></NavDrawer>
        <main className={styles.main}>


            <Flex flexDir={'row'} justifyContent={'space-around'} w={'98%'} alignItems={'center'}>
                <BaseShell p={0} w={'auto'}>
                    <KSampler onGeneration={handleUpdateGeneratedImg}/>
                </BaseShell>
                <BaseShell p={5} w={'auto'}>
                    <GeneratedImage isLoading={isLoading} imageUrl={generatedImageUrl} width={genImageWidth} height={genImageHeight} />
                </BaseShell>
            </Flex>
        </main>
        </>
    );
}


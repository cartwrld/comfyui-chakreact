'use client'

import styles from './page.module.css'
import {Center, Flex} from "@chakra-ui/react";
import {KSampler} from "@/components/KSampler";
import {GeneratedImage} from "@/components/GeneratedImage";
import {BaseShell} from "@/components/BaseShell";
import {useState} from "react";



export default function Home() {

    const [generatedImageUrl, setGeneratedImageUrl] = useState('https://i.imgur.com/nuwmvhQ.png'); // Initial placeholder image

    const handleUpdateGeneratedImg = (url:string): void  => {
        setGeneratedImageUrl(url); // Update the state with the new image URL
    };

    return (
        <main className={styles.main}>
            <Flex flexDir={'column'}>
                <BaseShell padding={5}>
                    <GeneratedImage imageUrl={generatedImageUrl} />
                </BaseShell>
                <BaseShell padding={0}>
                    {/* Pass the callback to the KSampler */}
                    <KSampler onGeneration={handleUpdateGeneratedImg}/>
                </BaseShell>
            </Flex>
        </main>
    );
}


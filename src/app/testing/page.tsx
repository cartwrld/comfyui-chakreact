'use client'

import styles from '../page.module.css'
import {
    Box,
    Button,
    Center,

    Flex, Heading,
    HStack, Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid, Tag,
    useDisclosure,

} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {getDBHistory} from '@/utils/ComfyUtils';
import Dashboard from "@/components/Dashboard";
import Workflow from "@/utils/Workflow";
import Image from "next/image";
import {BiMinus} from "react-icons/bi";
import {
    AiOutlineFieldNumber,
    AiOutlineGooglePlus,
    AiOutlinePlus,
    AiOutlineQuestionCircle,
    AiOutlineRadarChart
} from "react-icons/ai";
import {FcPositiveDynamic} from "react-icons/fc";
import {FaPlus, FaMinus} from "react-icons/fa6";

let collection: Workflow[] = []
const API_URL = `http://localhost:3004/images`


export default function Testing() {
    const [workflows, setWorkflows] = useState<Workflow[]>([]);
    const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

    useEffect(() => {
        handleInitFetch();
    }, []);

    function handleImageClick(workflow: Workflow) {
        setSelectedWorkflow(workflow);
    }

    function closeModal() {
        setSelectedWorkflow(null);
    }

    return (
        <>
            <Flex w={'100%'} p={0} m={0} bg={'gray.500'} rounded={'18px'}>
                <Dashboard currentPage={'testing'}/>
                <main className={styles.main}>
                    {workflows.map((wf, index) => getWFImageCard(wf, index, handleImageClick))}
                </main>
            </Flex>

            {selectedWorkflow && (

                <Modal isOpen={Boolean(selectedWorkflow)} onClose={closeModal} isCentered size={'xl'}>
                    <ModalOverlay/>
                    <ModalContent minW={'50vw'} h={'50vh'} fontSize={'1.5em'}>
                        <ModalHeader bg="blue.100">Workflow Details</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Flex direction="column" gap="4">
                                <Center fontSize="xl" fontWeight="bold">
                                    {selectedWorkflow?.ckpt} - {selectedWorkflow?.version}
                                </Center>
                                <Center>{selectedWorkflow?.prefix}</Center>

                                <SimpleGrid columns={2} spacing={4}>
                                    <Box bg={'lightgreen'} rounded={10} justifyContent={'center'} alignItems={'center'}>
                                        <Flex justifyContent={'center'} flexDir={'column'} gap="2">

                                            <Flex justifyContent={'space-around'} alignContent={'center'} w={'65%'} py={1}>
                                                <Center>
                                                    <Heading color={'whitesmoke'} fontWeight={'semibold'} fontSize={'1em'} >Positive</Heading>
                                                </Center>
                                                <Center mt={1}>
                                                    <FaPlus fontSize={'1.3em'} color={'whitesmoke'}/>
                                                </Center>
                                            </Flex>
                                            <Center p={10}>{selectedWorkflow?.pos_prompt}</Center>
                                        </Flex>
                                    </Box>
                                    <Box bg={'#ee9090'} rounded={10}>
                                        <Flex justifyContent={'center'} flexDir={'column'}  gap="2">

                                            <Flex justifyContent={'space-around'} alignContent={'center'} w={'65%'} py={1}>
                                                <Center>
                                                    <Heading color={'whitesmoke'} fontWeight={'semibold'} fontSize={'1em'} >Negative</Heading>
                                                </Center>
                                                <Center mt={2}>
                                                    <FaMinus fontSize={'1.3em'} color={'whitesmoke'}/>
                                                </Center>
                                            </Flex>
                                            <Center>{selectedWorkflow?.neg_prompt}</Center>
                                        </Flex>
                                    </Box>

                                </SimpleGrid>

                                <Flex align="center" gap="2">
                                    <AiOutlineRadarChart/> {/* Example icon for dimensions */}
                                    <Center>{selectedWorkflow?.width} x {selectedWorkflow?.height}</Center>
                                </Flex>

                                <HStack spacing={4}>
                                    <Tag>{selectedWorkflow?.sampler}</Tag>
                                    <Tag>{selectedWorkflow?.scheduler}</Tag>
                                </HStack>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    );

    function getWFImageCard(wf: Workflow, index: number, onClick: (workflow: Workflow) => void) {
        return (
            <Button w={'fit-content'} h={'fit-content'} p={0} m={10} key={index}
                    onClick={() => onClick(wf)}>
                <Flex p={0} justifyContent={'center'} alignContent={'center'} m={0}>
                    <Center bg={'gray.200'} rounded={'8px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}
                            height={'fit-content'} p={3}>
                        <Image key={index} src={`${API_URL}/${wf.pathname}`} alt={'img'} width={512} height={512}/>


                    </Center>
                </Flex>
            </Button>
        );
    }


    async function handleInitFetch() {
        const dbHist = await getDBHistory();
        const newWorkflows = dbHist.map(wf => {
            const newWF = new Workflow(wf.ckpt, wf.pos_prompt, wf.neg_prompt, wf.seed, wf.steps, wf.cfg,
                wf.sampler, wf.scheduler, wf.width, wf.height, wf.version);
            newWF.setPathName(wf.pathname);
            return newWF;
        });
        setWorkflows(newWorkflows);
    }
}


async function handleImageClick() {
    console.log('clicked')

}








'use client'

import styles from '../page.module.css'
import {
    Box, Button, ButtonGroup, Center, Flex, Heading, HStack, Icon, Input, Modal, ModalBody, ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Stack, Tag, useDisclosure,
} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {getDBHistory, getHistory, getHistoryByOrientation} from '@/utils/ComfyUtils';
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


    async function retrieveOrientation(orientation: string) {
        try {
            let orientationJSON = await getHistoryByOrientation(orientation); // Assuming getHistory makes a fetch call and returns JSON
            console.log(orientationJSON)
            const orientationWFs = []
            for (let key in orientationJSON) {
                if (orientationJSON.hasOwnProperty(key)) { // This checks that the key is a property of the object, not from the prototype chain
                    orientationWFs.push(orientationJSON[key])
                }
            }
            setWorkflows(orientationWFs)
        } catch
            (error) {
            console.error('Error fetching history:', error);
        }
    }


    return (
        <>
            <Flex w={'100%'} p={0} m={0} bg={'gray.500'} rounded={'18px'}>
                <Dashboard currentPage={'testing'}/>
                <main className={styles.main}>
                    <Flex bg={'gray.700'} w={'100%'} p={10} roundedTopRight={'15px'}>
                        <Flex minH={'13vh'} bg={'gray.700'} roundedTopRight={'15px'} justifyContent={'center'}
                              alignItems={'center'}>
                            <ButtonGroup>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    onClick={() => retrieveOrientation('square')}>Square</Button>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    me={1}
                                    onClick={() => retrieveOrientation('portrait')}>Portrait</Button>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    me={1}
                                    onClick={() => retrieveOrientation('landscape')}>Landscape</Button>
                            </ButtonGroup>
                        </Flex>
                    </Flex>
                    <Flex minH={'75vh'}>
                        {workflows.map((wf, index) => getWFImageCard(wf, index, handleImageClick))}
                    </Flex>
                </main>
            </Flex>

            {selectedWorkflow && (


                <Modal isOpen={Boolean(selectedWorkflow)} onClose={closeModal} isCentered size={'xl'}>
                    <ModalOverlay/>
                    <ModalContent minW={'50vw'} maxW={'60vw'} h={'fit-content'} fontSize={'1.5em'} borderRadius={'15px'}>
                        <ModalHeader bg="gray.400" roundedTop={'15px'}>Workflow Details</ModalHeader>
                        <Flex flexDir={'row'} flexWrap={'nowrap'} p={5}>
                            <Flex justifyContent={'center'} alignItems={'center'} p={2} rounded={'7px'} shadow={'0px 2px 5px rgba(0,0,0,0.2)'}>
                                   <Image src={`${API_URL}/${selectedWorkflow.pathname}`} alt={`${selectedWorkflow.prefix}`}
                                             width={selectedWorkflow.width / 2} height={selectedWorkflow.height / 2}/>
                            </Flex>
                            <Flex flexDir={'column'} >
                                <ModalCloseButton/>
                                <ModalBody >
                                    <Flex direction='column' gap='4'>
                                        <Flex justifyContent={'space-around'} alignContent={'center'}>
                                            <Heading fontSize={'1em'} fontWeight={'semibold'}>Checkpoint</Heading>
                                            <Center fontSize='xl'>
                                                {selectedWorkflow?.ckpt} - {selectedWorkflow?.version}
                                            </Center>
                                        </Flex>

                                        <Center>{selectedWorkflow?.prefix}</Center>
                                        <SimpleGrid columns={2} spacing={4} color={'gray.900'}>
                                            <Flex bg={'gray.200'} rounded={10} justifyContent={'center'}
                                                  alignItems={'center'} >
                                                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}
                                                      gap="2" >
                                                    <Flex justifyContent={'space-around'} alignContent={'center'}
                                                          w={'65%'}
                                                          py={1}>
                                                        <Center>
                                                            <Heading fontWeight={'semibold'}
                                                                     fontSize={'1em'}>Positive Prompt</Heading>
                                                        </Center>
                                                        <Center mt={1}>
                                                            <FaPlus fontSize={'1em'}/>
                                                        </Center>
                                                    </Flex>
                                                    <Center p={10} bg={'whitesmoke'} roundedBottom={'10px'}>{selectedWorkflow?.pos_prompt}</Center>
                                                </Flex>
                                            </Flex>
                                            <Box bg={'#ee9090'} rounded={10}>
                                                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}
                                                      gap="2">

                                                    <Flex justifyContent={'space-around'} alignContent={'center'}
                                                          w={'65%'}
                                                          pt={3} pb={2}>
                                                        <Center>
                                                            <Heading fontWeight={'semibold'}
                                                                     fontSize={'1em'}>Negative Prompt</Heading>
                                                        </Center>
                                                        <Center mt={2}>
                                                            <FaMinus fontSize={'1.3em'}/>
                                                        </Center>
                                                    </Flex>
                                                    <Center bg={'whitesmoke'}>{selectedWorkflow?.neg_prompt}</Center>
                                                </Flex>
                                            </Box>

                                        </SimpleGrid>

                                        <Flex align="center" gap="2">
                                            <AiOutlineRadarChart/> {/* Example icon for dimensions */}
                                            <Center>{selectedWorkflow?.width} x {selectedWorkflow?.height}</Center>
                                        </Flex>

                                        <HStack spacing={4}>
                                            <Tag fontSize={'0.7em'} p={1} px={2}>{selectedWorkflow?.sampler}</Tag>
                                            <Tag>{selectedWorkflow?.scheduler}</Tag>
                                        </HStack>
                                    </Flex>
                                </ModalBody>
                            </Flex>
                        </Flex>
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








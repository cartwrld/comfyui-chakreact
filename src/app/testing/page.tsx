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
import {FaPlus, FaMinus, FaListUl} from "react-icons/fa6";
import {BsFillGridFill, BsGrid3X3GapFill} from "react-icons/bs";

let collection: Workflow[] = []
const API_URL = `http://localhost:3004/images`


export default function Testing() {
    const [workflows, setWorkflows] = useState<Workflow[]>([]);
    const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);
    const [selectedLayout, setSelectedLayout] = useState<string>('grid-lg');

    useEffect(() => {
        handleInitFetch();
    }, []);

    function handleImageClick(workflow: Workflow) {
        setSelectedWorkflow(workflow);
    }

    function closeModal() {
        setSelectedWorkflow(null);
    }

    async function adjustImageLayout(layout: string) {
        setSelectedLayout(layout)
    }


    async function retrieveOrientation(orientation?: string) {
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
                                    onClick={() => retrieveOrientation('all')}>Square</Button>
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
                        <Flex minH={'13vh'} bg={'gray.700'} roundedTopRight={'15px'} justifyContent={'center'}
                              alignItems={'center'}>
                            <ButtonGroup>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    onClick={() => adjustImageLayout('list')}><FaListUl fontSize={'1.5em'}/></Button>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    onClick={() => adjustImageLayout('grid-sm')}><BsFillGridFill fontSize={'1.5em'}/>
                                </Button>
                                <Button
                                    bg={'gray.300'}
                                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                                    onClick={() => adjustImageLayout('grid-lg')}><BsGrid3X3GapFill fontSize={'1.7em'}/>
                                </Button>

                            </ButtonGroup>
                        </Flex>
                    </Flex>
                    <Flex minH={'75vh'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}
                          overflowX={'hidden'} overflowY={'hidden'} pe={5} w={'100%'}>
                        <Flex maxH={'75vh'} overflowX={'hidden'} w={'100%'} overflowY={'scroll'} justifyContent={'center'}
                              flexDir={selectedLayout === 'list' ? 'column' : 'row'}
                              alignItems={'center'} flexWrap={'wrap'}
                              sx={{
                                  '&::-webkit-scrollbar': { // This block of code needs to be here in order for browsers other than firefox to display the scrollbar
                                      width: '16px', marginTop: '10px', borderRightRadius: '8px',
                                  }, '&::-webkit-scrollbar-thumb': {
                                      backgroundColor: `gray.300`, marginTop: '10px', borderRadius: '8px',
                                  }, '&::-webkit-scrollbar-track': {
                                      marginTop: '30px',
                                      paddingTop: '0px',
                                      backgroundColor: `gray.700`,
                                      borderRadius: '8px'
                                  }
                              }}>
                            {workflows.map((wf, index) => getWFImageCard(wf, index, handleImageClick))}
                        </Flex>
                    </Flex>
                </main>
            </Flex>

            {selectedWorkflow && (


                <Modal isOpen={Boolean(selectedWorkflow)} onClose={closeModal} isCentered size={'xl'}>
                    <ModalOverlay/>
                    <ModalContent minW={'50vw'} maxW={'60vw'} h={'fit-content'} fontSize={'1.5em'}
                                  borderRadius={'15px'}>
                        <ModalHeader bg="gray.400" roundedTop={'15px'}>Workflow Details</ModalHeader>
                        <Flex flexDir={'row'} flexWrap={'nowrap'} p={5}>
                            <Flex justifyContent={'center'} alignItems={'center'} p={2} rounded={'7px'}
                                  shadow={'0px 2px 5px rgba(0,0,0,0.2)'}>
                                <Image src={`${API_URL}/${selectedWorkflow.pathname}`}
                                       alt={`${selectedWorkflow.prefix}`}
                                       width={selectedWorkflow.width / 2} height={selectedWorkflow.height / 2}/>
                            </Flex>
                            <Flex flexDir={'column'}>
                                <ModalCloseButton/>
                                <ModalBody>
                                    <Flex direction='column' gap='4'>
                                        <SimpleGrid columns={2} spacing={4} color={'gray.900'}>
                                            <Flex bg={'gray.200'} rounded={10} justifyContent={'center'}
                                                  alignItems={'center'}
                                                  shadow={'rgba(60, 64, 67, 0.1) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 5px 1px;'}>
                                                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}
                                                      gap="2">
                                                    <Flex justifyContent={'space-around'} alignContent={'center'}
                                                          w={'65%'}
                                                          py={1}>
                                                            <Heading fontWeight={'semibold'} fontSize={'1em'} pt={1}>
                                                                Positive Prompt
                                                            </Heading>
                                                    </Flex>
                                                    <Center p={10} bg={'whitesmoke'} fontSize={'0.8em'}
                                                            roundedBottom={'10px'}>{selectedWorkflow?.pos_prompt}</Center>

                                                </Flex>
                                            </Flex>
                                            <Flex bg={'gray.200'} rounded={10} justifyContent={'center'}
                                                  alignItems={'center'}
                                                  shadow={'rgba(60, 64, 67, 0.1) 0px 1px 5px 0px, rgba(60, 64, 67, 0.15) 0px 1px 5px 1px;'}>
                                                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'}
                                                      gap="2" w={'100%'}>
                                                    <Flex justifyContent={'space-around'} alignContent={'center'}
                                                          w={'100%'}
                                                          py={1}>
                                                        <Heading fontWeight={'semibold'} fontSize={'1em'} pt={1}>
                                                            Negative Prompt
                                                        </Heading>
                                                    </Flex>
                                                    <Center p={10} bg={'whitesmoke'} fontSize={'0.8em'}
                                                            roundedBottom={'10px'} minW={'100%'}>{selectedWorkflow?.neg_prompt}</Center>
                                                </Flex>
                                            </Flex>

                                        </SimpleGrid>
                                        <Flex justifyContent={'space-around'} alignContent={'center'}>
                                            <Heading fontSize={'1em'} fontWeight={'semibold'}>Checkpoint</Heading>
                                            <Center fontSize='xl'>
                                                {selectedWorkflow?.ckpt} - {selectedWorkflow?.version}
                                            </Center>
                                        </Flex>

                                        <Center>{selectedWorkflow?.prefix}</Center>
                                        <Flex align="center" gap="2">
                                            <AiOutlineRadarChart/> {/* Example icon for dimensions */}
                                            <Center>{selectedWorkflow?.width} x {selectedWorkflow?.height}</Center>
                                        </Flex>
                                        {PosNegPrompt('Positive', selectedWorkflow?.pos_prompt)}
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

    function PosNegPrompt(type: string, prompt?: string) {
        return (
            <Flex flexDir={'column'} bg={'gray.200'} rounded={'10px'} shadow={'rgba(0, 0, 0, 0.15) 0px 1px 4px'}>
                <Center fontWeight={'semibold'} p={2}>{type} Prompt</Center>
                <Center bg={'whitesmoke'} roundedBottom={'10px'}>{prompt}</Center>
            </Flex>
        );
    }

    function getWFImageCard(wf: Workflow, index: number, onClick: (workflow: Workflow) => void) {
        const smfactor = 2;
        const lgfactor = 3;

        return (
            <Button w={'fit-content'} h={'fit-content'} p={0} m={10} key={index}
                    onClick={() => onClick(wf)}>
                {
                    selectedLayout === 'list'
                    ? (
                            <Flex p={0} flexDir={'row'} bg={'darkred'} justifyContent={'center'} alignItems={'center'} m={0} >
                                <Flex maxH={'128px'}>
                                    <Image key={index} src={`${API_URL}/${wf.pathname}`} alt={'img'}
                                           width={128} height={128}/>
                                    <Center>{wf.prefix}</Center>
                                </Flex>
                            </Flex>

                            ) : (
                        <Flex p={0} justifyContent={'center'} alignItems={'center'} m={0}>
                            <Center bg={'gray.200'} rounded={'8px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}
                                    height={'fit-content'} p={3}>
                                {
                                    selectedLayout === 'grid-sm'
                                        ? (
                                            <Image key={index} src={`${API_URL}/${wf.pathname}`} alt={'img'}
                                                   width={wf.width / smfactor} height={wf.height / smfactor}/>
                                        ) : (
                                            <Image key={index} src={`${API_URL}/${wf.pathname}`} alt={'img'}
                                                   width={wf.width / lgfactor} height={wf.height / lgfactor}/>
                                        )
                                }

                            </Center>
                        </Flex>
                    )
                }

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








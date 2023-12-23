import React, {Component, ReactNode} from "react";
import {Box, Button, ButtonGroup, Center, Flex, Heading} from "@chakra-ui/react";
import {GeneratedImage} from "@/components/ksampler/GeneratedImage";
import {KSampler} from "@/components/ksampler/KSampler";
import {getHistory} from "@/utils/ComfyUtils";
import Image from "next/image";
import {type} from "os";

type CardHolderState = {
    paths: string[]
}

const API_URL = `http://localhost:3004/images`

export class ImageCard extends Component<{}, CardHolderState> {

    constructor(props: any) {
        super(props);

        this.state = {
            paths: [],
        };
    }


    async retrieveHistory() {
        try {
            let historyJSON = await getHistory();
            historyJSON = historyJSON.replaceAll('"', '')
            historyJSON = historyJSON.replaceAll('[', '')
            historyJSON = historyJSON.replaceAll(']', '')
            const paths = historyJSON.split(',')

            this.setState({paths: paths})
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    }

    async retrieveSquare() {
        try {
            let squareJSON: any = await getHistory('square'); // Assuming getHistory makes a fetch call and returns JSON

            const squarePaths = []

            for (let key in squareJSON) {
                if (squareJSON.hasOwnProperty(key)) { // This checks that the key is a property of the object, not from the prototype chain
                    squarePaths.push(squareJSON[key])
                }
            }
            this.setState({paths: squarePaths})
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    }

    async retrievePortrait() {
        try {
            let portraitJSON: any = await getHistory('portrait'); // Assuming getHistory makes a fetch call and returns JSON

            const portraitPaths = []

            for (let key in portraitJSON) {
                if (portraitJSON.hasOwnProperty(key)) { // This checks that the key is a property of the object, not from the prototype chain
                    portraitPaths.push(portraitJSON[key])
                }
            }
            this.setState({paths: portraitPaths})
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    }

    async retrieveLandscape() {
        try {
            let landscapeJSON: any = await getHistory('landscape'); // Assuming getHistory makes a fetch call and returns JSON

            const landscapePaths = []

            for (let key in landscapeJSON) {
                if (landscapeJSON.hasOwnProperty(key)) { // This checks that the key is a property of the object, not from the prototype chain
                    landscapePaths.push(landscapeJSON[key])
                }
            }
            this.setState({paths: landscapePaths})
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    }


    componentDidMount() {
        this.retrieveHistory(); // Call retrieveHistory when the component mounts
    }

    render() {
        const {paths} = this.state

        return (
            <Flex flexDir={'column'} minW={'100%'} mt={0} justifyContent={'start'}>

                <Flex minH={'13vh'} bg={'gray.700'} roundedTopRight={'15px'} justifyContent={'center'}
                      alignItems={'center'}>
                    <ButtonGroup>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                            onClick={() => this.retrieveHistory()}>All</Button>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                            onClick={() => this.retrieveSquare()}>Square</Button>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                            me={1}
                            onClick={() => this.retrievePortrait()}>Portrait</Button>
                        <Button
                            bg={'gray.300'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                            me={1}
                            onClick={() => this.retrieveLandscape()}>Landscape</Button>
                    </ButtonGroup>
                </Flex>
                <Flex flexDir={'column'} justifyContent={'center'} overflow={'hidden'} w={'100%'}>

                    {/*<Flex flexDir={'column'} justifyContent={'center'} >*/}
                    <Flex flexWrap={'wrap'} bg={'none'} maxH={'81vh'} minH={'81vh'} me={5}
                          justifyContent={'space-around'}
                          overflowX={'hidden'} overflowY={'scroll'}
                          sx={{
                              '&::-webkit-scrollbar': { // This block of code needs to be here in order for browsers other than firefox to display the scrollbar
                                  width: '16px', marginTop: '10px', borderRightRadius: '8px',
                              }, '&::-webkit-scrollbar-thumb': {
                                  backgroundColor: `gray.300`, marginTop: '10px', borderRadius: '8px',
                              }, '&::-webkit-scrollbar-track': {
                                  marginTop: '30px', paddingTop: '0px', backgroundColor: `gray.700`, borderRadius: '8px'
                              }
                          }}>
                        {
                            paths.map((url, index) => (
                                getHistoryImageCard(url, index)
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        )
    }
}

function getHistoryImageCard(url: string, index: number) {
    return (
        <Button w={'fit-content'} h={'fit-content'} p={0} m={10} key={index}>

            <Flex p={0} justifyContent={'center'} alignContent={'center'} m={0}>
                <Center bg={'gray.200'} rounded={'8px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}
                        height={'fit-content'} p={3}>
                    <Image key={index} src={`${API_URL}/${url}`} alt={`image-${index}`} width={512} height={512}/>
                </Center>
            </Flex>
        </Button>
    )
}

function formatPaths(history: string): string[] {
    let str: string = history;
    str = str.replaceAll('"', '')
    str = str.replaceAll('[', '')
    str = str.replaceAll(']', '')
    return str.split(',')
}

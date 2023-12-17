'use client'

import {
    Box, Button, Center, Flex, Heading, Input, Slider, SliderFilledTrack, SliderThumb,
    SliderTrack, Textarea
} from "@chakra-ui/react";
import {FaFilePen, FaRegTrashCan} from "react-icons/fa6";
import Workflow from "@/utils/Workflow";
import execGeneration from '@/utils/ComfyUtils'
import {Component, useEffect, useState} from "react";
import {MdGraphicEq} from "react-icons/md";
import {CustomSlider} from "@/components/CustomSlider";
import {Resolution} from "@/components/Resolution";


const wf = new Workflow(
    'photograph of a young woman standing in the rain, beautiful, long hair, looking at camera',
    20,
    5.5,
    1024,
    1024,
    true);

type KSamplerState = {
    prompt: string;
    steps: number;
    cfg: number;
    width: number;
    height: number;
    onGeneration: (imageUrl: string) => void;
};


export class KSampler extends Component<{onGeneration : (path: string) => void}, KSamplerState> {
    state: KSamplerState = {
        prompt: '',
        steps: 20,
        cfg: 6,
        width: 1024,
        height: 1024,
    };

    handlePromptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({prompt: event.target.value});
        console.log(this.state.prompt)
    }


    handleResolutionChange = (width: number, height: number): void => {
        this.setState({ width, height });
        return;
    }
    handleStepsChange = (newSteps: number) => {
        console.log("New Slider Value:", newSteps);
        this.setState({ steps: newSteps });
    }
    handleCFGChange = (newCFG: number) => {
        console.log("New Slider Value:", newCFG);
        this.setState({ cfg: newCFG });
    }


    async handleGenerateClick() {
        console.log('generation button clicked')

        const wf = new Workflow(
            this.state.prompt.toString(),
            this.state.steps,
            this.state.cfg,
            this.state.width,
            this.state.height,
            true // assuming sdxl is always true for this example
        );

        if (this.state.prompt.toString() === '') wf.setPrompt('empty');

        try {
            const imagePath = await execGeneration(wf);
            console.log('Generated image path:', imagePath);
            this.props.onGeneration(imagePath)
        } catch (error) {
            // Handle the error, e.g., show an error message to the user
            console.error('Error generating image:', error);
        }

    }

    render() {
        return (
            <>
                <Flex w={'99%'} my={'12px'} bg={'gray.300'} flexDir={'row'} rounded={'7px'} p={2} mb={'4px'}>
                    <Flex w={'100%'} justifyContent={'space-around'} color={'ghostwhite'} flexDir={'column'}
                          rounded={'6px'}>
                        <CustomSlider title='Steps' min={0} max={40} step={1} value={20} onValueChange={this.handleStepsChange}/>
                        <CustomSlider title='CFG' min={3.0} max={9.0} step={0.5} value={6.0} onValueChange={this.handleCFGChange}/>
                        <Resolution width={1024} height={1024} onResolutionChange={this.handleResolutionChange}></Resolution>
                    </Flex>
                    <Flex flexDir={'column'} py={0} w={'100%'} justifyContent={'space-around'} px={0} ms={3}
                          bg={'gray.100'} rounded={'10px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                        <Textarea
                            value={this.state.prompt}
                            onChange={this.handlePromptChange}
                            h={'100%'} border={'none'} p={3} resize={'none'} rounded={'10px'}>

                        </Textarea>
                    </Flex>
                </Flex>
                <Box bg={'gray.300'} rounded={'10px'} w={'100%'} px={3} mt={1} mb={3}>
                    <Button onClick={() => this.handleGenerateClick()} w={'100%'} h={'100%'}
                            boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'} rounded={'7px'} py={3}>
                        Generate
                    </Button>
                </Box>

            </>
        );
    }
}






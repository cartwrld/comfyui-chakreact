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
import {Seed} from "@/components/Seed";
import {Prompts} from "@/components/Prompts";
import {CKPTLoader} from "@/components/CKPTLoader";




type KSamplerState = {
    pos_prompt: string;
    neg_prompt: string;
    steps: number;
    cfg: number;
    width: number;
    height: number;
    onGeneration: (imageUrl: string, width: number, height: number) => void;
    seed: number;
};


export class KSampler extends Component<{onGeneration : (path: string, width: number, height: number) => void}, KSamplerState> {
    state: KSamplerState = {
        pos_prompt: '',
        neg_prompt: '',
        steps: 20,
        cfg: 6,
        width: 1024,
        height: 1024,
        seed: 1234567890
    };

    handlePosPromptChange = (pos: string) => {
        this.setState({ pos_prompt: pos });
        console.log(this.state.pos_prompt)
    }
    handleNegPromptChange = (neg: string) => {
        this.setState({ neg_prompt: neg });
        console.log(this.state.neg_prompt)
    }


    handleResolutionChange = (width: number, height: number): void => {
        this.setState({ width, height });
        console.log(`New Resolution Value: ${width} x ${height}`);
        return;
    }
    handleStepsChange = (newSteps: number) => {
        console.log("New Step Value:", newSteps);
        this.setState({ steps: newSteps });
    }
    handleCFGChange = (newCFG: number) => {
        console.log("New CFG Value:", newCFG);
        this.setState({ cfg: newCFG });
    }
    handleSeedChange = (newSeed: number) => {
        console.log("New Seed Value:", newSeed);
        this.setState({ seed: newSeed });
    }


    async handleGenerateClick() {
        console.log('generation button clicked')

        const wf = new Workflow(
            this.state.pos_prompt.toString(),
            this.state.neg_prompt.toString(),
            this.state.steps,
            this.state.cfg,
            this.state.width,
            this.state.height,
            true, // assuming sdxl is always true for this example
            this.state.seed
        );

        if (this.state.pos_prompt.toString() === '') wf.setPrompt('empty');

        try {
            const imagePath = await execGeneration(wf);
            console.log('Generated image path:', imagePath);
            this.props.onGeneration(imagePath, this.state.width, this.state.height)
        } catch (error) {
            // Handle the error, e.g., show an error message to the user
            console.error('Error generating image:', error);
        }

    }

    render() {
        return (
            <>
                <Flex w={'99%'} my={'12px'} bg={'gray.300'} flexDir={'row'} rounded={'7px'} p={2} mb={'4px'}>
                    <Flex w={'100%'} justifyContent={'space-around'}  flexDir={'column'} rounded={'6px'}>
                        <CKPTLoader/>
                        <Seed title={'Seed'} min={0} max={99999999999} value={1234567890} onValueChange={this.handleSeedChange}/>
                        <CustomSlider title='Steps' min={0} max={40} step={1} value={20} onValueChange={this.handleStepsChange}/>
                        <CustomSlider title='CFG' min={3.0} max={9.0} step={0.5} value={6.0} onValueChange={this.handleCFGChange}/>
                        <Resolution width={1024} height={1024} onResolutionChange={this.handleResolutionChange}></Resolution>

                    </Flex>
                    <Prompts title={'Prompts'} onPosChange={this.handlePosPromptChange} onNegChange={this.handleNegPromptChange} />
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






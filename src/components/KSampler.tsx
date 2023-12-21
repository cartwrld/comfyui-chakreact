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
import {Checkpoint} from "@/components/Checkpoint";
import {SamplerScheduler} from "@/components/SamplerScheduler";
import {AiFillCloud, AiOutlineLoading} from "react-icons/ai";
import { FcPicture } from "react-icons/fc";
import { MdOutlineCollections } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImSpinner6 } from "react-icons/im";
import { VersionRG } from "@/components/VersionRG";





type KSamplerState = {
    pos_prompt: string;
    neg_prompt: string;
    steps: number;
    cfg: number;
    width: number;
    height: number;
    seed: number;
    sampler: string;
    scheduler: string;
    ckpt: string;
    onGeneration: (imageUrl: string, width: number, height: number) => void;
    isLoading: boolean;
    version: string;
};


export class KSampler extends Component<{onGeneration : (path: string, width: number, height: number, isLoading: boolean) => void}, KSamplerState> {
    // @ts-ignore
    state: KSamplerState = {
        pos_prompt: '',
        neg_prompt: '',
        steps: 20,
        cfg: 6,
        width: 1024,
        height: 1024,
        seed: 1234567890,
        sampler: 'euler',
        scheduler: 'karras',
        ckpt: 'dynavision_v0557.safetensors',
        isLoading: false,
        version: 'SDXL'
    };

    handlePosPromptChange = (pos: string) => { this.setState({ pos_prompt: pos }) }
    handleNegPromptChange = (neg: string) => { this.setState({ neg_prompt: neg }) }
    handleSamplerChange = (newSampler: string) => { this.setState({ sampler: newSampler }) }
    handleSchedulerChange = (newScheduler: string) => { this.setState({ scheduler: newScheduler })}
    handleCKPTChange = (newCKPT: string) => { this.setState({ ckpt: newCKPT })}
    handleResolutionChange = (width: number, height: number): void => { this.setState({ width, height }); return }
    handleStepsChange = (newSteps: number) => { this.setState({ steps: newSteps }) }
    handleCFGChange = (newCFG: number) => { this.setState({ cfg: newCFG }) }
    handleSeedChange = (newSeed: number) => { this.setState({ seed: newSeed }) }
    handleVersionChange = (newVersion: string) => {
        this.setState({version: newVersion})

        // if (this.state.version === 'TURBO') {
        //     this.setState({
        //         ckpt: 'sdxl_turbo_v1.safetensors',
        //         steps: 3,
        //         cfg: 1.2,
        //         sampler: 'euler',
        //         width: 512,
        //         height: 512,
        //     })
        // }
    }


    async handleGenerateClick() {
        console.log('generation button clicked')

        this.setState({isLoading: true})

        const wf = new Workflow(
            this.state.ckpt,
            this.state.pos_prompt.toString(),
            this.state.neg_prompt.toString(),
            this.state.seed,
            this.state.steps,
            this.state.cfg,
            this.state.sampler,
            this.state.scheduler,
            this.state.width,
            this.state.height,
            this.state.version // assuming sdxl is always true for this example
        );

        if (this.state.pos_prompt.toString() === '') wf.setPrompt('empty');

        try {
            const imagePath = await execGeneration(wf);
            console.log('Generated image path:', imagePath);

            this.props.onGeneration(imagePath, this.state.width, this.state.height, this.state.isLoading)
            this.setState({isLoading: false})
        } catch (error) {
            // Handle the error, e.g., show an error message to the user
            console.error('Error generating image:', error);
        }

    }

    render() {

        const { isLoading } = this.state

        return (
            <>
                <Flex w={'99%'} my={'12px'} bg={'gray.300'} flexDir={'row'} rounded={'7px'} p={2} mb={'4px'}>
                    <Flex w={'100%'} justifyContent={'space-around'}  flexDir={'column'} rounded={'6px'}>
                        <VersionRG onVersionChange={this.handleVersionChange} />
                        <Checkpoint onCKPTChange={this.handleCKPTChange} />
                        <SamplerScheduler
                            onSamplerChange={this.handleSamplerChange}
                            onSchedulerChange={this.handleSchedulerChange} />
                        <Seed onSeedChange={this.handleSeedChange} />
                        <CustomSlider
                            title={'Steps'}
                            min={0} max={40} step={1} value={20}
                            onValueChange={this.handleStepsChange} />
                        <CustomSlider
                            title={'CFG'}
                            min={3.0} max={9.0} step={0.5} value={6.0}
                            onValueChange={this.handleCFGChange} />
                        <Resolution width={1024} height={1024} onResolutionChange={this.handleResolutionChange} />

                    </Flex>
                    <Prompts
                        title={'Prompts'}
                        onPosChange={this.handlePosPromptChange}
                        onNegChange={this.handleNegPromptChange} />
                </Flex>
                <Box bg={'gray.300'} rounded={'10px'} w={'100%'} px={3} mt={1} mb={3}>
                    <Button onClick={() => this.handleGenerateClick()} w={'100%'} h={'100%'}
                            boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'} rounded={'7px'} py={3}>
                        {
                            isLoading
                                ? (<ImSpinner6 fontSize={'24px'} style={{ animation: 'rotate 2s linear infinite' }}/>)
                                : ( <Center fontSize={'1.25em'}>Generate</Center>)
                        }
                    </Button>
                </Box>

            </>
        );
    }
}






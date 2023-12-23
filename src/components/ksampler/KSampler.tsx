'use client'

import { Box, Button, Center, Flex } from "@chakra-ui/react";
import Workflow from "@/utils/Workflow";
import execGeneration from '@/utils/ComfyUtils'
import {Component} from "react";
import {CustomSlider} from "@/components/ksampler/CustomSlider";
import {Resolution} from "@/components/ksampler/Resolution";
import {Seed} from "@/components/ksampler/Seed";
import {Prompts} from "@/components/ksampler/Prompts";
import {Checkpoint} from "@/components/ksampler/Checkpoint";
import {SamplerScheduler} from "@/components/ksampler/SamplerScheduler";
import {AiFillCloud, AiOutlineLoading} from "react-icons/ai";
import { FcPicture } from "react-icons/fc";
import { MdOutlineCollections } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FaSpinner } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImSpinner6 } from "react-icons/im";
import { VersionRG } from "@/components/ksampler/VersionRG";






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
    onPreGeneration: ( width: number, height: number, isLoading: boolean) => void;
    onGeneration: (imageUrl: string, isLoading: boolean) => void;
    isLoading: boolean;
    version: string;
};


export class KSampler extends Component<{
    onPreGeneration : (width: number, height: number, isLoading: boolean) => void,
    onGeneration : (path: string, isLoading: boolean) => void
}, KSamplerState> {
    // @ts-ignore
    state: KSamplerState = {
        pos_prompt: '',
        neg_prompt: '',
        steps: 20,
        cfg: 6,
        width: 1024,
        height: 1024,
        seed: Math.floor(Math.random() * 1844674407370955),
        sampler: 'euler',
        scheduler: 'karras',
        ckpt: 'dynavision_v0557.safetensors',
        isLoading: false,
        version: 'SDXL'
    };


    handleIsLoadingChange = (loading: boolean) => { this.setState({ isLoading: loading }) }
    handlePosPromptChange = (pos: string) => { this.setState({ pos_prompt: pos }) }
    handleNegPromptChange = (neg: string) => { this.setState({ neg_prompt: neg }) }
    handleSamplerChange = (newSampler: string) => { this.setState({ sampler: newSampler }) }
    handleSchedulerChange = (newScheduler: string) => { this.setState({ scheduler: newScheduler })}
    handleCKPTChange = (newCKPT: string) => { this.setState({ ckpt: newCKPT })}
    handleResolutionChange = (width: number, height: number): void => { this.setState({ width, height }); return }
    handleStepsChange = (newSteps: number) => { this.setState({ steps: newSteps }) }
    handleCFGChange = (newCFG: number) => { this.setState({ cfg: newCFG }) }
    handleSeedChange = (newSeed: number) => { this.setState({ seed: newSeed }) }
    handleVersionChange = (newVersion: string) => { this.setState({version: newVersion})    }


    async handleGenerateClick() {

        const {isLoading, ckpt, pos_prompt, neg_prompt, seed, steps, cfg, sampler, scheduler, width, height, version} = this.state

        console.log('generation button clicked')

        const wf = new Workflow(
            ckpt,
            pos_prompt.toString(),
            neg_prompt.toString(),
            seed,
            steps,
            cfg,
            sampler,
            scheduler,
            width,
            height,
            version

        );

        if (this.state.pos_prompt.toString() === '') wf.setPrompt('empty');

        try {
            this.handleIsLoadingChange(!isLoading)

            console.log('----------')
            console.log(isLoading)
            console.log('----------')

            this.props.onPreGeneration(width, height, true)

            const imagePath = await execGeneration(wf);

            this.props.onGeneration(imagePath, false)
            this.setState({isLoading: false})
            this.handleSeedChange(Math.floor(Math.random() * 1844674407370955))

        } catch (error) {
            console.error('Error generating image:', error);
        }

    }

    render() {

        const { isLoading, seed } = this.state
        return (
            <>
                <Flex w={'99%'} my={'12px'} bg={'gray.300'} flexDir={'row'} rounded={'7px'} p={2} mb={'4px'}>
                    <Flex w={'100%'} justifyContent={'space-around'}  flexDir={'column'} rounded={'6px'}>
                        <VersionRG onVersionChange={this.handleVersionChange} />
                        <Checkpoint onCKPTChange={this.handleCKPTChange} />
                        <SamplerScheduler
                            onSamplerChange={this.handleSamplerChange}
                            onSchedulerChange={this.handleSchedulerChange} />
                        <Seed value={seed} onSeedChange={this.handleSeedChange} />
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






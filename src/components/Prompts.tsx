import React, { Component } from "react";
import {
    Box, Button,
    Center,
    Flex,
    Heading, Input, Textarea,
} from "@chakra-ui/react";
import { FaRandom } from "react-icons/fa";

type PromptState = {
    posprompt: string;
    negprompt: string;
};
type PromptProps = {
    title: string;
    onPosChange: (posprompt: string) => void;
    onNegChange: (negprompt: string) => void;
};



export class Prompts extends Component<PromptProps, PromptState> {
    constructor(props: PromptProps) {
        super(props);

        this.state = {
            posprompt: '',
            negprompt: ''
        };


    }

    handlePosPromptChange = (pos:any) => {
        this.setState({ posprompt: pos});
        // Call the onValueChange prop with the new value
        this.props.onPosChange(pos);
    };
    handleNegPromptChange = (neg:any) => {
        this.setState({ negprompt: neg});
        // Call the onValueChange prop with the new value
        this.props.onNegChange(neg);
    };

    render() {
        const { title } = this.props; // Destructuring props for easier access
        const { posprompt, negprompt } = this.state; // Destructuring state for easier access

        return (
            <Flex
                flexDir={'column'}
                justifyContent={'space-center'}
                w={'100%'}
                bg={'gray.100'}
                px={5}
                py={2}
                pb={'15px'}
                ms={3}
                rounded={'10px'}
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Center w={'100%'} pb={2}>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>{title}</Heading>
                </Center>
                <Flex h={'100%'} justifyContent={'space-between'} alignItems={'center'} flexDir={'column'}>
                    <Flex flexDir={'column'} py={0} w={'100%'} justifyContent={'space-around'} px={0} ms={0}
                          bg={'gray.200'} rounded={'10px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 3px;'} h={'60%'}>
                        <Textarea
                            value={this.state.posprompt}
                            onChange={(e) => this.handlePosPromptChange(e.target.value)}
                            color={'gray.900'} placeholder={'ex. photograph, girl standing in the rain, blonde hair, etc.'}
                            bg={'#f4f9ff'}
                            h={'100%'} border={'none'} p={3} resize={'none'} rounded={'10px'}>
                            {posprompt}
                        </Textarea>
                    </Flex>
                    <Flex flexDir={'column'} py={0} w={'100%'} justifyContent={'space-around'} px={0} ms={0}
                          bg={'gray.100'} rounded={'10px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 3px'}
                        h={'37%'}>
                        <Textarea
                            value={this.state.negprompt}
                            onChange={(e) => this.handleNegPromptChange(e.target.value + '')}
                            color={'gray.900'} placeholder={'ex. bad hands, bad eyes, extra limbs, etc.'}
                            bg={'#f4f9ff'}
                            h={'100%'} border={'none'} p={3} resize={'none'} rounded={'10px'}>
                            {negprompt}
                        </Textarea>
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}

import React, {Component, ReactNode} from "react";
import { Center, Flex } from "@chakra-ui/react";
import {GeneratedImage} from "@/components/ksampler/GeneratedImage";
import {KSampler} from "@/components/ksampler/KSampler";


type BaseShellProps = {
    p: number | string;
    w: number | string;
    h: number | string;
    children: ReactNode
};
export class BaseShell extends Component<BaseShellProps> {
    render() {
        return (
            <Flex bg='gray.50' p={3} rounded={'20px'} my={0} mb={0} w={this.props.w} h={this.props.h}>
                <Center p={this.props.p} width={'100%'} flexDir={'column'} rounded={'10px'} boxShadow={'inner'} bg={'gray.300'}>
                    {this.props.children}
                </Center>
            </Flex>
        );
    }
}

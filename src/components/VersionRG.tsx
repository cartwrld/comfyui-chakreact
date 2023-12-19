import React, { Component } from "react";
import {Button, Center, Flex, Heading, Input, Radio, RadioGroup, Stack} from "@chakra-ui/react";
import { FaRandom } from "react-icons/fa";

type VersionState = {
    versionValue: string;
};
type VersionProps = {
    onVersionChange: (newVersion: string) => void;
};

export class VersionRG extends Component<VersionProps, VersionState> {
    constructor(props: VersionProps) {
        super(props);

        this.state = {
            versionValue: 'SDXL',
        };

    }

    handleVersionChange = (val: string) => {
        this.setState({ versionValue: val });

        this.props.onVersionChange(val);
    };

    renderButton(value: string) {
        const {versionValue} = this.state;
        return (
            <Button
                colorScheme={versionValue === value ? 'blue' : 'gray'}
                variant={versionValue === value ? 'solid' : 'outline'}
                onClick={() => this.handleVersionChange(value)}
            >
                {value}
            </Button>
        );
    }


    render() {

        const { versionValue } = this.state; // Destructuring state for easier access


        return (
            <Flex
                flexDir={'column'}
                justifyContent={'space-around'}
                w={'100%'}
                bg={'gray.100'}
                px={5}
                py={2}
                pb={'10px'}
                mb={3}
                rounded={'10px'}
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Center w={'100%'}>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Version</Heading>
                </Center>
                <Center pb={2}>

                    <RadioGroup onChange={this.handleVersionChange} value={versionValue}>
                        <Stack direction="row">
                            {this.renderButton('SDXL')}
                            {this.renderButton('SD 1.5')}
                            {this.renderButton('TURBO')}
                        </Stack>
                    </RadioGroup>

                </Center>
            </Flex>
        );
    }
}


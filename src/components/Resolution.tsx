import {Component} from "react";
import {Center, Flex, Heading, Input} from "@chakra-ui/react";

type ResolutionState = {
    width: number;
    height: number;
};
type ResoultionProps = {
    width: number;
    height: number;
    onResolutionChange: (width: number, height: number) => void;
};

export class Resolution extends Component<ResoultionProps, ResolutionState> {
    constructor(props: ResoultionProps) {
        super(props);
        // Set the initial state
        this.state = {
            width: 1024,
            height: 1024,

        };
    }



    handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = Number(event.target.value);
        this.setState({ width: newWidth });
        // @ts-ignore
        this.props.onResolutionChange(newWidth, this.state.height);
    };

    handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newHeight = Number(event.target.value);
        this.setState({ height: newHeight });
        // @ts-ignore
        this.props.onResolutionChange(this.state.width, newHeight);
    };

    render() {
        const {width, height} = this.state; // Destructuring state for easier access

        return (
                <Flex
                    flexDir={'row'}
                    justifyContent={'space-around'}
                    bg={'gray.100'}
                    w={'100%'}
                    p={6}
                    rounded={'10px'}
                    boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                    <Flex w={'100%'} justifyContent={'space-around'} px={5} flexDir={'column'}
                          rounded={'10px'}>
                        <Center w={'100%'}>
                            <Heading fontSize={'1.6em'} pb={2} px={5} color={'gray.700'}>Width</Heading>
                        </Center>
                        <Center>
                            <Input
                                type="number"
                                value={width}
                                onChange={this.handleWidthChange}
                                textAlign={'center'} fontWeight={'semibold'} fontSize={'1.2em'}
                                color={'black'} bg={'#f4f9ff'} shadow={'inset rgba(0, 0, 0, 0.15) 0px 0px 2px'}>
                            </Input>
                        </Center>
                    </Flex>
                    <Center fontWeight={'semibold'} color={'gray.700'} fontSize={'1.5em'} mt={7}>
                        x
                    </Center>
                    <Flex w={'100%'} justifyContent={'space-around'} px={5} flexDir={'column'}
                          bg={'gray.100'} rounded={'10px'}>
                        <Center w={'100%'}>
                            <Heading fontSize={'1.6em'} pb={2} px={5} color={'gray.700'}>Height</Heading>
                        </Center>
                        <Center>
                            <Input
                                type="number"
                                value={height}
                                onChange={this.handleHeightChange}
                                textAlign={'center'} fontWeight={'semibold'} fontSize={'1.2em'}
                                color={'black'} bg={'#f4f9ff'} shadow={'inset rgba(0, 0, 0, 0.15) 0px 0px 2px'}>
                            </Input>
                        </Center>
                    </Flex>
                </Flex>
        )
    }
}


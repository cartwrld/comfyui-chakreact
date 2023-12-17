import {Component, useState} from "react";
import {Box, Center, Flex, Heading, Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";


type CustomSliderState = {
    value: number;
};
type CustomSliderProps = {
    title: string;
    min: number;
    max: number;
    step: number;
    value: number;
    onValueChange: (newValue: number) => void;
};

export class CustomSlider extends Component<CustomSliderProps, CustomSliderState> {

    constructor(props: CustomSliderProps) {
        super(props);

        this.state = {
            value: props.value,
        };
    }

    handleSliderChange = (val: number) => {
        this.setState({ value: val });
        // Call the onValueChange prop with the new value
        this.props.onValueChange(val);
    }

    render() {
        const { title, min, max, step } = this.props; // Destructuring props for easier access
        const { value } = this.state; // Destructuring state for easier access

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
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>{title}</Heading>
                </Center>
                <Center>
                    <Slider minW={'100%'} rounded={'100%'}
                            aria-label='step-slider'
                            value={this.state.value}
                            step={step}
                            min={min}
                            max={max}
                            onChange={(val) => {
                                console.log(val);
                                this.handleSliderChange(val);
                            }}>
                        <SliderTrack bg='gray.300' p={1} rounded={'100px'}>
                            <SliderFilledTrack bg='gray.600' p={1}/>
                        </SliderTrack>
                        <SliderThumb boxSize={8}>
                            <Box fontWeight={'bold'} color={'gray.800'}>{value}</Box>
                        </SliderThumb>
                    </Slider>
                </Center>
            </Flex>
        )
    }
}

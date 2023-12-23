import React, { Component } from "react";
import { Button, Center, Flex, Heading, Input } from "@chakra-ui/react";
import { FaRandom } from "react-icons/fa";

type SeedState = {
    seedValue: number;
};
type SeedProps = {
    value: number
    onSeedChange: (newValue: number) => void;
};

export class Seed extends Component<SeedProps, SeedState> {
    constructor(props: SeedProps) {
        super(props);

        this.state = {
            seedValue: this.props.value,
        };

        // this.genRandomNum = this.genRandomNum.bind(this);
    }

    handleSeedChange = (val: number) => {
        this.setState({ seedValue: val });
        // Call the onValueChange prop with the new value
        this.props.onSeedChange(val);
    };

    genRandomNum() {
        // Generate a random number and update the state
        const randomNum = Math.floor(Math.random() * 1844674407370955); // Adjust the range as needed
        this.setState({ seedValue: randomNum });
    }

    render() {

        const { seedValue } = this.state; // Destructuring state for easier access
        const { value } = this.props; // Destructuring state for easier access

        return (
            <Flex
                flexDir={'column'} justifyContent={'space-around'}
                w={'100%'} bg={'gray.100'} px={5} py={2} pb={'10px'} mb={3}
                rounded={'10px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Center w={'100%'}>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Seed</Heading>
                </Center>
                <Center pb={2}>
                    <Button bg={'gray.100'} />
                    <Input
                        color={'gray.900'} bg={'#f6f8fc'} shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                        fontWeight={'semibold'} fontSize={'1.2em'} textAlign={'center'}
                        value={value} onChange={(e) => this.handleSeedChange(Number(e.target.value))}/>
                    <Button onClick={this.genRandomNum}><FaRandom/></Button>
                </Center>
            </Flex>
        );
    }
}

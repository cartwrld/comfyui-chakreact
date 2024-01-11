import * as React from 'react';
import {
    Box,
    VStack,
    Checkbox,
    Button,
    Heading,
    useTheme,
    CheckboxGroup,
    Stack, Flex, Switch, Center, Spacer, Input, Divider,
} from '@chakra-ui/react';
import {useState} from "react";

const MachineSelector = () => {
    const {colors} = useTheme();
    const [selectedMachines, setSelectedMachines] = useState<string[]>([]);
    const [selMachPricing, setSelectedMachinePricing] = useState<string[]>([])

    const handleToggle = (machine: string) => {

            console.log(`${machine} : toggled ${isMachineSelected(machine) ? 'off' : 'on'}`)

        setSelectedMachines((prevSelectedMachines) =>
            prevSelectedMachines.includes(machine)
                ? prevSelectedMachines.filter((m) => m !== machine)
                : [...prevSelectedMachines, machine],
        );
    };

    const isMachineSelected = (machine: string): boolean => {
        return selectedMachines.includes(machine)
    }

    const handleSubmit = () => {

        console.log(selectedMachines);
    };

    return (
        <Flex flexDir={'column'}>
            <Center bg={'gray.800'} width={'200'} flexDir={'column'} rounded={'15px'} boxShadow={'inner'}>
                <Flex bg={'gray.800'} w={'100%'} roundedTop={'lg'}>
                    <Box p='4' roundedTop={'15px'} bg={''}>
                        <Heading size='md' color={'gray.50'}>Machines for <em>partname</em></Heading>
                    </Box>
                </Flex>
            </Center>
            <Box borderWidth="1px" borderBottomRadius="lg" overflow="hidden" p={4} bg={'white'}>
                <Flex>
                    <VStack alignItems="flex-start">
                        {['CNC', 'Edge Banding', 'Planer', 'Painting', 'Grinder', 'Assembly'].map((machine) => (
                           <Box  key={machine}>
                            <Flex key={machine}>
                                <Box minW={'200'} minH={'2em'} fontSize={'1.3em'} fontWeight={'semibold'}>{machine}</Box>
                                {
                                    isMachineSelected(machine)
                                    ? <Input type={'number'} w={'75px'} placeholder={'0.0'} />
                                        : <Box w={'4.6em'} py={2}></Box>
                                }
                                <Flex justifyContent={'center'} alignItems={'center'} ms={5}>

                                <Switch
                                    size={'lg'}
                                    key={machine}
                                    value={machine}
                                    isChecked={selectedMachines.includes(machine)}
                                    onChange={() => handleToggle(machine)}
                                >
                                </Switch>
                                </Flex>
                            </Flex>
                            <Divider/>
                           </Box>
                        ))}
                    </VStack>
                </Flex>
                <Stack direction="row" spacing={4} mt={4} justifyContent="center">
                    <Button colorScheme="red" variant="outline" onClick={() => setSelectedMachines([])}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue" onClick={handleSubmit}>
                        Apply
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
};

export default MachineSelector;

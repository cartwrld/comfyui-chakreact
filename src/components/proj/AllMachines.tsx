import React, { useState } from 'react';
import {Box, Button, ButtonGroup, Flex, Heading} from '@chakra-ui/react';
import {FaPencilAlt} from "react-icons/fa";

interface MachineButtonProps {
    value: string;
    selectedValue: string;
    onClick: (value: string) => void;
}

function AllMachineButton({ value, selectedValue, onClick }: MachineButtonProps) {
    return (
        <Button
            textAlign={'start'} shadow={'0 0 5px rgba(0,0,0,0.1)'}
            w={'20em'} px={2} m={0} ms={2} my={1} py={4} h={'3em'}
            variant={selectedValue === value ? 'solid' : 'outline'}
            colorScheme={selectedValue === value ? 'blue' : 'gray'}
            onClick={() => onClick(value)}
        >
            <Box w={'100%'} textAlign={'start'}>{value}</Box>
        </Button>
    );
}

function AllMachines() {
    const [selectedValue, setSelectedValue] = useState('');

    // Define your array of machine values


    const machineList = [
        'CNC', 'Edge Banding', 'Assembly', 'Lathe', 'Grinder', 'Painting'
    ]
    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} bg={'gray.500'} w={'28%'} m={2} rounded={7}>
            <Heading fontSize={'1.5em'} p={1} pb={2}>All Machines</Heading>
            <ButtonGroup flexDir={'column'} bg={'white'} p={0} m={0} h={'100%'} w={'100%'} roundedBottom={7} className={'existingBG'}>
            {machineList.map((value) => (
                <AllMachineButton
                    key={value}
                    value={value}
                    selectedValue={selectedValue}
                    onClick={handleChange}
                />
            ))}
        </ButtonGroup>
        </Flex>

    );
}

export default AllMachines;



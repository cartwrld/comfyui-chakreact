import React, {Component} from "react";
import {Box, Button, Center, Divider, Flex, Heading, Select} from "@chakra-ui/react";
import ExistingMachines from "@/components/proj/ExistingMachines";
import {FaAnglesLeft, FaAnglesRight} from "react-icons/fa6";
import AllMachines from "@/components/proj/AllMachines";

type PartMachineRelState = {
    existingMachines: string[];
    allMachines: string[];
}

type PartMachineRelProps = {
    onRelationChange: (newRelation: string[]) => void;
    existingMachines: string[];
    allMachines: string[];
}

export class PartMachineRelations extends Component<PartMachineRelProps, PartMachineRelState> {

    constructor(props: PartMachineRelProps) {
        super(props);

        this.state = {
            existingMachines: this.props.existingMachines,
            allMachines: this.props.allMachines
        };

    }



    handleExistingMachineChange = (val: string[]) => {
        this.setState({ existingMachines: val });
        // Call the onValueChange prop with the new value
        this.props.onRelationChange(val);
    };

    render() {



        return (
            <Flex bg={'gray.400'} justifyContent={'center'} w={'50%'} flexDir={'column'}>
                <Box w={'100%'}>
                    <Heading>Machines for <em>partname</em></Heading>
                </Box>
                <Divider py={2} filter={'invert(1)'}/>
                <Flex h={'400px'} >
                    {/*<Box bg={'red'}>d</Box>*/}
                    <ExistingMachines />
                    <Flex flexDir={'column'}>
                        <Button my={1} ps={1} onClick={handleAddMachine}><FaAnglesLeft/><Box ms={2}>Add Machine</Box></Button>
                        <Button my={1} ps={1} onClick={handleDeleteMachine}><Box ps={3} me={2}>Delete Machine</Box><FaAnglesRight/></Button>
                    </Flex>
                    <AllMachines/>
                </Flex>
            </Flex>
        )
    }

}

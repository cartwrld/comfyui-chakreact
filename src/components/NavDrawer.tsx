import {
    Box,
    Button,
    Drawer, DrawerBody,
    DrawerCloseButton,
    DrawerContent, DrawerFooter,
    DrawerHeader,
    DrawerOverlay, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import {BiMenu, BiPlus} from "react-icons/bi";
import Link from "next/link";

export default function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleGenerateClick() {

    }
    function handleHistoryClick() {

    }


    return (
        <>
            <Button m={2} onClick={onOpen} rounded={'10px'} bg={'gray.500'}>
                <BiMenu fontSize={'2em'}/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        ComfyUI-Chakreact
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack>
                            <Link href="/" passHref>
                            <Button onClick={handleGenerateClick}>Generate</Button>
                            </Link>
                            <Link href="/history" passHref>
                            <Button onClick={handleHistoryClick}>History</Button>
                            </Link>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

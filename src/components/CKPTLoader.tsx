import {Component} from "react";
import {Box, Center, Flex, Heading, Select, SelectField} from "@chakra-ui/react";
import {red} from "next/dist/lib/picocolors";


const ckptlist = [
    '3dToonDiffusionXL_v10.safetensors',
    'altxl_v50.safetensors',
    'ambienceSDXL_a1.safetensors',
    'bluePencilXL_v100.safetensors',
    'dreamshaperXL102.safetensors',
    'dynavision_0411.safetensors',
    'dynavision_0534.safetensors',
    'envymegamixxl01_v10.safetensors',
    'icedcoffeexl_V11.safetensors',
    'juggernautXL_version3.safetensors',
    'juggernautXL_version4NSFW.safetensors',
    'juggernautXL_version6Rundiffusion.safetensors',
    'lahcutecartoonSDXL.safetensors',
    'lahmysteriousSDXL_v30.safetensors',
    'mbbxlUltimate_v10RC.safetensors',
    'modernDisneyXL_v11.safetensors',
    'newrealityxl_v11.safetensors',
    'nijiSDXLV3.safetensors',
    'pixarStyleModel_v10.safetensors',
    'pixelwave_04.safetensors',
    'progenitorXL_baseV11.safetensors',
    'realcartoonPixar_v2.safetensors',
    'realcartoonXL_v4.safetensors',
    'realityvisionSDXL_v10.safetensors',
    'realvisxlV20_v20Bakedvae.safetensors',
    'reproductionSDXL_v87.safetensors',
    'rundiffusionXL_beta.safetensors',
    'sdvn7Realartxl_beta2.safetensors',
    'SDXL-PsyAI-v4.safetensors',
    'sdxlFaetastic_v10.safetensors',
    'sdxlMergeheaven_prototypeM5.safetensors',
    'sdxlNijiV51_sdxlNijiV51.safetensors',
    'sd_xl_base_1.0.safetensors',
    'sd_xl_refiner_1.0.safetensors',
    'sd_xl_turbo_1.0_fp16.safetensors',
    'socababesXL_vae05.safetensors',
    'starlightXL_v3.safetensors',
]

export class CKPTLoader extends Component {

    render() {
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
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Sampler</Heading>
                </Center>
                <Center>
            <Select placeholder="Select option" fontWeight={'semibold'} color={'gray.900'} bg={'#f4f9ff'} shadow={'inset rgba(0, 0, 0, 0.15) 0px 0px 2px'}>
                {
                    ckptlist.map((ckpt, index) => (
                        // <Box key={index} bg={'red'}>
                            <option key={index} value={ckpt}>{ckpt}</option>
                        // </Box>
                    ))
                }
            </Select>
                </Center>
            </Flex>
        )
    }

}

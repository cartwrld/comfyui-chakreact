import {Component} from "react";
import { Center, Flex, Heading, Select } from "@chakra-ui/react";


const ckptlistXL = [
    'altxl_v50.safetensors',
    'ambienceSDXL_a1.safetensors',
    'animatediff_blossom.json',
    'bluepencilXL_v100.safetensors',
    'disneystyle_v10.safetensors',
    'dreamshaperXL_v102.safetensors',
    'dynavision_v0411.safetensors',
    'dynavision_v0534.safetensors',
    'dynavision_v0557.safetensors',
    'envymegamixXL_v10.safetensors',
    'faetasticXL_v10.safetensors',
    'helloworldXL_v20.safetensors',
    'icedcoffeex_v11.safetensors',
    'juggernautXL_nsfw_v4.safetensors',
    'juggernautXL_RD_v6.safetensors',
    'juggernautXL_RD_v7.safetensors',
    'juggernautXL_v3.safetensors',
    'lahcutecartoonXL_v10.safetensors',
    'lahmysteriousXL_v30.safetensors',
    'mergeheavenXL_prototypeM5.safetensors',
    'moderndisneyXL_v11.safetensors',
    'newrealityXL_v11.safetensors',
    'nijiXL_v3.safetensors',
    'nijiXL_v51.safetensors',
    'pixelwaveXL_v04.safetensors',
    'progenitorXL_base_v11.safetensors',
    'protovisionXL_HF3D_v0660.safetensors',
    'psyAIXL_v4.safetensors',
    'realcartoonXL_Pixar_v2.safetensors',
    'realcartoonXL_realistic_v7.safetensors',
    'realcartoonXL_v4.safetensors',
    'realcartoonXL_v5.safetensors',
    'realityvisionSDXL_v10.safetensors',
    'realvisx4XL_v20.safetensors',
    'reproductionXL_v87.safetensors',
    'rundiffusionXL_beta.safetensors',
    'samaritan3DXL_v40.safetensors',
    'sdvn7XL_beta2.safetensors',
    'sdxl_base_1.0.safetensors',
    'sdxl_lcm.safetensors',
    'sdxl_refiner_v1.safetensors',
    'sdxl_turbo_v1.safetensors',
    'shikianimexl_v10novae.safetensors',
    'socababesXL_v05.safetensors',
    'starlightXL_v3.safetensors',
    'toondiffusion3DXL_v10.safetensors',
    'universestable_analogphoto_v70.safetensors',
    'unstableDiffusers_HW_v8.safetensors',
    'zavychromaxl_v10.safetensors'
]

let str = `

3DAnimationDiffusion_v10.safetensors
3DAnimationDiffusion_v10.sha256
3DMixCharacter_Realism_v20.safetensors
A7B3_v10.safetensors
AbsoluteReality_v181.safetensors
Anime3DMix_1.safetensors
Animerge_v22.safetensors
Aniverse_thx_v14.safetensors
Anything_v3.ckpt
Architectural_v31.safetensors
ArthemyComics_v50.safetensors
ArtUniverse_v80.safetensors
AZovyaRPGArtistTools_v3.safetensors
Babes_v20.safetensors
BeautifulRealistic_v7.safetensors
Beautyfool_v20.safetensors
BetterDisneyPixar_v10.safetensors
BrainDance_v071.safetensors
chilloutmix_v10.safetensors
CleanLinearMix_final.safetensors
Colorful_v31.safetensors
DarkSushi_v40.safetensors
DreamShaper_v8.safetensors
DungeonsAndDiffusion_v3.safetensors
EpicPanty_v1.safetensors
EpicPhotogasm_xPlusPlus_v1.safetensors
EpicPhotogasm_y_v1.safetensors
EpicRealism_natural_v1.safetensors
EpicRealism_pe_v5.safetensors
Faetastic_v2.safetensors
FantasticMix_k1_v1.safetensors
FrottagePatterns_v1.ckpt
GhostMix_v20.safetensors
GoliathPerson_DND_v1.ckpt
HelloYoung25d_v10.safetensors
IncredibleWorld_v40.safetensors
KeybitSpace_v07.safetensors
MajicMix_Realistic_v7.safetensors
MeinaMix_v110.safetensors
MeinaMix_v8.safetensors
MeinaMix_Pastel_v6.safetensors
YorozaStyle_NightSky_v1.safetensors
OmegaCentauri_AlphaMain_v1.safetensors
PerfectDeliberate_v10.safetensors
PerfectDeliberate_v40.safetensors
Pope25_v14.safetensors
RC_3d_v8.safetensors
RC_Anime_v5.safetensors
RC_Pixar_v2.safetensors
StableYogi_Realism_v10.safetensors
RealisticVision_v51.safetensors
RevAnimated_v122.safetensors
Samaritan3dCartoon_v3.safetensors
SVDN3_RealArt_v1.safetensors
sd_1.5.safetensors
Silicon29_v1.safetensors
SilverMoonMix_v13.safetensors
Soapmix28D_v10.safetensors
ThisIsReal_v50.safetensors
TinyPlanets_v1.ckpt
UniverseStable_AnalogPhoto_v70.safetensors
VirileAnimation_v10.safetensors
VirileFantasy_v11.safetensors
ZavyComics_b1_v1.safetensors
ZavyMix_v10.safetensors
Zero_v1.safetensors


`




type CKPTState = {
    ckptValue: string;
}

type CKPTProps = {
    onCKPTChange: (newCKPT: string) => void;
}

export class Checkpoint extends Component<CKPTProps, CKPTState> {

    constructor(props: CKPTProps) {
        super(props);

        this.state = {
            ckptValue: 'dynavision_v0557.safetensors',
        };

    }

    handleCKPTChange = (val: string) => {
        this.setState({ ckptValue: val });
        // Call the onValueChange prop with the new value
        this.props.onCKPTChange(val);
    };

    render() {

        const { ckptValue } = this.state

        return (
            <Flex
                flexDir={'column'} justifyContent={'space-around'}
                w={'100%'} bg={'gray.100'} rounded={'10px'}
                px={5} py={2} pb={'15px'} mb={3}
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'} overflow={'none'}>
                <Center w={'100%'}>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Checkpoint</Heading>
                </Center>
                <Center>
            <Select onChange={(e) => this.handleCKPTChange(e.target.value)} value={ckptValue}
                fontWeight={'semibold'} color={'gray.900'} bg={'#f6f8fc'}
                    shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'}
                    sx={{
                        '&::-webkit-scrollbar': { // This block of code needs to be here in order for browsers other than firefox to display the scrollbar
                            width: '16px', marginTop: '10px', borderRightRadius: '8px',
                        }, '&::-webkit-scrollbar-thumb': {
                            backgroundColor: `gray.400`, marginTop: '10px', borderRadius: '8px',
                        }, '&::-webkit-scrollbar-track': {
                            paddingTop: '10px', backgroundColor: `gray.700`, borderRadius: '8px'
                        }}}>
                {
                    ckptlistXL.map((ckpt, index) => (<option key={index} value={ckpt}
                                                        style={{
                                                            backgroundColor: '#f4f9ff', // Example style
                                                        }}>{ckpt}</option>))}
            </Select>
                </Center>
            </Flex>
        )
    }

}

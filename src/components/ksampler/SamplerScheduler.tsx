import {Component} from "react";
import {Center, Flex, Heading, Select} from "@chakra-ui/react";


const samplerlist = [
    'euler', 'euler_ancestral', 'huen', 'huenpp2', 'dpm_2', 'dpm_2_ancestral',
    'dpmpp_2m', 'dpmpp_2m_sde', 'dpmpp_2m_sde_gpu', 'dpmpp_3m_sde',
    'dpmpp_3m_sde_gpu', 'ddpm', 'lcm', 'ddim',

]
const schedulerlist = [
    'normal', 'karras', 'exponential', 'sgm_uniform', 'simple', 'ddim_uniform'
]

type SamplerState = {
    samplerValue: string;
    schedulerValue: string;

}

type SamplerProps = {

    onSamplerChange: (newSampler: string) => void;
    onSchedulerChange: (newScheduler: string) => void;

}

export class SamplerScheduler extends Component<SamplerProps, SamplerState> {

    constructor(props: SamplerProps) {
        super(props);

        this.state = {
            samplerValue: 'euler',
            schedulerValue: 'karras'
        };

    }

    handleSamplerChange = (val: string) => {
        this.setState({samplerValue: val});
        // Call the onValueChange prop with the new value
        this.props.onSamplerChange(val);
    };
    handleSchedulerChange = (val: string) => {
        this.setState({ schedulerValue: val });
        // Call the onValueChange prop with the new value
        this.props.onSchedulerChange(val);
    };

    render() {

        const {samplerValue, schedulerValue} = this.state

        return (
            <Flex
                flexDir={'column'}
                justifyContent={'space-around'}
                w={'100%'}
                bg={'gray.100'}
                px={5}
                py={2}
                pb={4}
                mb={3}
                rounded={'10px'}
                boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Flex justifyContent={'space-around'}>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Sampler</Heading>
                    <Heading fontSize={'1.7em'} py={2} px={5} color={'gray.700'}>Scheduler</Heading>
                </Flex>

                <Flex justifyContent={'space-around'}>
                    <Select onChange={(e) => this.handleSamplerChange(e.target.value)}
                            value={samplerValue} fontWeight={'semibold'} color={'gray.900'} bg={'#f6f8fc'}
                            shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'} me={1}
                            sx={{
                                '&::-webkit-scrollbar': { // This block of code needs to be here in order for browsers other than firefox to display the scrollbar
                                    width: '16px', marginTop: '10px', borderRightRadius: '8px',
                                }, '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: `gray.600`, marginTop: '10px', borderRadius: '8px',
                                }, '&::-webkit-scrollbar-track': {
                                    paddingTop: '10px', backgroundColor: `gray.200`
                                }}}
                    >
                        {samplerlist.map((sampler, index) => (<option key={index} value={sampler}>{sampler}</option>))}
                    </Select>
                    <Select onChange={(e) => this.handleSchedulerChange(e.target.value)}
                            value={schedulerValue} fontWeight={'semibold'} color={'gray.900'} bg={'#f6f8fc'}
                            shadow={'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.05) 0px 1px 2px;'} ms={1}
                    >
                        {schedulerlist.map((scheduler, index) => (<option key={index} value={scheduler}>{scheduler}</option>))}
                    </Select>
                </Flex>
            </Flex>
        )
    }

}

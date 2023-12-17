import React, {Component} from "react";
import {Center} from "@chakra-ui/react";
import Image from "next/image";

type GeneratedImageProps = {
    imageUrl: string
    width: number;
    height: number;
}
const API_URL = `http://localhost:3004`
export class GeneratedImage extends Component<GeneratedImageProps> {
    render() {
        const { imageUrl, width, height } = this.props; // Get the imageUrl from props
        console.log(imageUrl)
        return (
            <Center bg={'white'} p={3} rounded={'8px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                <Center bg={'white'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
                    <Image
                        src={`${API_URL}/${imageUrl}`} // Use imageUrl from props
                        alt="Generated Image"
                        width={width}
                        height={height}
                        unoptimized={true}
                    />
                </Center>
            </Center>
        )
    }
}
// Note the changes:

// export class GeneratedImage extends Component<{imageUrl : string}, GenImgState> {
//     state = {
//         imageUrl: 'https://i.imgur.com/CtkIAQO.png', // Start with a placeholder image
//         loading: true, // To indicate that the image is being generated
//     };
//
//     render() {
//         const { imageUrl } = this.props; // Get the imageUrl from props
//
//         return (
//             <Center bg={'white'} p={3} rounded={'8px'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
//                 <Center bg={'white'} boxShadow={'rgba(0, 0, 0, 0.15) 0px 2px 8px'}>
//                     <Image
//                         src={imageUrl} // Use imageUrl from props
//                         alt={'Generated Image'}
//                         width={512}
//                         height={512}
//                         unoptimized={true}
//                     />
//                 </Center>
//             </Center>
//         );
//     }
// }

// Make sure to add propTypes or TypeScript types to validate the props.


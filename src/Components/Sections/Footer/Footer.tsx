import { Box, Divider, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

interface LinksProp {
    icon: IconType;
    path: string
}

export default function Footer() {
    function SocialLinkLayout(props: LinksProp) {
        return (
            <Box>
                <Link to={props.path}>
                    <Stack justify="center" align="center" height="40px" width="40px" borderRadius="full" bgColor="#46423B">
                        <Icon as={props.icon} />
                    </Stack>
                </Link>
            </Box>
        )
    }
    return (
        <Box height={280} bg="#35322D">
            <footer>
                <Stack justify="center" align="center" p="30px 0px">
                    <Stack align="center" justify="center">
                        <Heading color="#FFB03B">SwiftServices</Heading>
                        <Text color="white">Whether you need logistics support, errands run, or a refreshing clean, our team of dedicated professionals is just a chat away.</Text>
                    </Stack>
                    <HStack mt={7} color="white" gap={5} fontSize={20}>
                        <SocialLinkLayout path="#" icon={BsTwitterX} />
                        <SocialLinkLayout path="#" icon={BsFacebook} />
                        <SocialLinkLayout path="#" icon={BsInstagram} />
                        <SocialLinkLayout path="#" icon={BsLinkedin} />
                    </HStack>
                    <Divider p="10px 0px" />
                    <Stack align="center">
                        <Text color="white">Footer credits and or / links goes here</Text>
                    </Stack>
                </Stack>
            </footer>
        </Box>
    )
}
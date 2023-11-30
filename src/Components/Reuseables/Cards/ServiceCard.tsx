import { Box, Stack, HStack, Image, Heading, Text } from "@chakra-ui/react";
import FoodImage from "../../../assets/raspberries.jpg"

export default function ServiceCard() {
    return (
        <Box minW={600} padding={10} minH="300px" boxShadow="5px 1px 30px -14px rgba(58,49,49,0.75)">
            <HStack gap={10}>
                <Image height="300px" objectFit="contain" width="350px" src={FoodImage} />
                <Stack>
                    <Heading fontSize={22}>Your text goes here you know what I am saying</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa natus, magni numquam nulla commodi quaerat fugiat quam enim ipsa molestias nesciunt voluptatum iure recusandae, nemo veritatis excepturi quia. Aut?</Text>
                </Stack>
            </HStack>
        </Box>
    )
}
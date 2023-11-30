import { Box, Heading, Stack } from "@chakra-ui/react";
import HeroSlider from "../../Sections/Slider/HeroSlider";
import ServiceCard from "../../Reuseables/Cards/ServiceCard";

export default function Homepage() {
    return (
        <Box>
            <HeroSlider />
            <section>
                <Heading padding="50px 0px" textAlign="center" color="#FFB03B">Services</Heading>
                <Stack margin="50px 20px" gap={10}>
                    <ServiceCard />
                    <ServiceCard />
                </Stack>
            </section>
        </Box>
    )
}
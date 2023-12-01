import { Box, Heading, Stack, Flex, Tabs, TabList, Tab, HStack, TabPanel, TabPanels, Accordion, AccordionIcon, AccordionButton, AccordionItem, AccordionPanel, Spacer, Text, Icon, Center, } from "@chakra-ui/react";
import HeroSlider from "../../Sections/Slider/HeroSlider";
import ServiceCard from "../../Reuseables/Cards/ServiceCard";
import RestaurantsCard from "../../Reuseables/Cards/FoodMenuCard";
import { BsCartPlusFill } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import ListItemComp from "../../Sections/listItems";
import DemoPic from "../../../assets/raspberries.jpg"



export default function Homepage() {
    return (
        <Box backgroundImage={DemoPic}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundAttachment="fixed"
            minW="98vw"
            minHeight="100vh"
        >
            <Box backgroundColor="rgba(255, 255, 255, 0.8)">
                <HeroSlider />
                <section style={{ background: "white" }}>
                    <Box bg="white">
                        <Heading padding="50px 0px" textAlign="center" color="#FFB03B">Services</Heading>
                        <Stack margin="50px 20px" gap={10}>
                            <ServiceCard />
                            <ServiceCard />
                        </Stack>
                    </Box>
                </section>
                <section style={{ background: "white", marginTop: "-50px" }}>
                    <Box p="50px 0px 20px 0px" bg="white">
                        <Flex align="center" justify='center'>
                            <Accordion borderRadius={8} border="1px #CECECE solid" w="85vw" defaultIndex={[1]} allowMultiple>
                                <AccordionItem>
                                    <h2>
                                        <AccordionButton>
                                            <Center gap={1} display="flex" flex='1' textAlign='center'>
                                                <Icon fontSize={30} as={HiPlusCircle} />
                                                <Heading textAlign="center" fontSize={30}>Request Service</Heading>
                                            </Center>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        <Tabs>
                                            <TabList>
                                                <Tab>Pickup & delivery</Tab>
                                                <Tab>Cleaning</Tab>
                                                <Tab>Task Delegation</Tab>
                                            </TabList>
                                            <TabPanels>
                                                <TabPanel>
                                                    Pickup and delivery form goes here
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Coming Soon!</p>
                                                </TabPanel>
                                                <TabPanel>
                                                    <p>Coming Soon!</p>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Flex>
                    </Box>
                </section>
                <Spacer bg="white" height={100} />

                <section>
                    <Box padding="50px 0px">
                        <Box>
                            <Heading textAlign="center">Partnered Restaurants</Heading>
                            <Text textAlign="center">Browse and order spetacular dishes from certified Restaurants</Text>
                        </Box>
                        <HStack p={10} gap={10} justify="center">
                            <RestaurantsCard imageUrl="/src/assets/raspberries.jpg" menuLink="/market" />
                            <RestaurantsCard imageUrl="/src/assets/raspberries.jpg" menuLink="/market" />
                            <RestaurantsCard imageUrl="/src/assets/raspberries.jpg" menuLink="/market" />
                        </HStack>
                    </Box>
                </section>

                <section>
                    <Box p="20px 0px" bg="white">
                        <HStack align="start" justify='space-evenly' wrap="wrap">
                            <ListItemComp icon={<Icon as={BsCartPlusFill} />} lineOne="No. 7, yelwa Bauchi" heading="Location" />
                            <ListItemComp icon={<Icon as={BsCartPlusFill} />} lineOne="Saturday - Sunday" lineTwo="6:00 AM - 6:00 PM" heading="Open Hours" />
                            <ListItemComp icon={<Icon as={BsCartPlusFill} />} lineOne="help@swiftservice.com - Sunday" lineTwo="contact@swiftservice.com" heading="Email" />
                            <ListItemComp icon={<Icon as={BsCartPlusFill} />} lineOne="+2349024551324" lineTwo="+2348067884638" heading="Call" />
                        </HStack>
                    </Box>
                </section>
            </Box>
        </Box>
    )
}
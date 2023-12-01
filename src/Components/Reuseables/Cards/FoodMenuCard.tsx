import { Button, Stack, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface RestuarantsCardProps {
    imageUrl: string;
    menuLink: string
}

export default function RestaurantsCard(props: RestuarantsCardProps) {
    return (
        <Stack justify='center' align="center" w="420px">
            <Image width="416px" alt="" src={props.imageUrl} />
            <Stack borderRadius={8} mt={-5} justify="center" align="center" width="90%" bg="white" padding="20px 0px">
                <Link to={props.menuLink}>
                    <Button _hover={{ color: "white", bg: "#FFA386"}} color="white" bg="#FF5722" height="60px" width={"200px"}>Browse Menu</Button>
                </Link>
            </Stack>
            <Spacer height={20} />
        </Stack>
    )
}
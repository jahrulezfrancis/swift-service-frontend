import { Box, Spacer } from "@chakra-ui/react";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";
import NavItemsRenderers from "./NavItemsRenderers";

export default function MobileNav() {
    return (
        <Box>
            <NavContainer children={
                <Box>
                    <Link to="/">Swift Service</Link>
                    <Spacer />
                    <NavItemsRenderers direction="column" />
                </Box>
            } />
        </Box>
    )
}
import { Box, Spacer } from "@chakra-ui/react";
import NavContainer from "./NavContainer";
import { Link } from "react-router-dom";
import NavItemsRenderers from "./NavItemsRenderers";

export default function DesktopNav() {
    return (
        <Box>
            <NavContainer children={
                <>
                    <Link to="/">Swift Service</Link>
                    <Spacer />
                    <NavItemsRenderers direction="row" />
                </>
            } />
        </Box>
    )
}
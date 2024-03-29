import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function NavContainer({ children }: { children: ReactNode }) {
    return (
        <Box>
            <Flex padding={7}>
                {children}
            </Flex>
        </Box>
    )
}
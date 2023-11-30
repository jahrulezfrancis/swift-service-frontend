import { Box, List, Heading, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Listprops {
    heading: string;
    lineOne: string;
    lineTwo?: string;
    icon: ReactNode;
}

export default function ListItemComp(props: Listprops) {
    return (
        <Box>
            <Box>
                {props.icon}
            </Box>
            <List>
                <Heading fontSize={30} >{props.heading}</Heading>
                <ListItem>{props.lineOne}</ListItem>
                <ListItem>{props.lineTwo}</ListItem>
            </List>
        </Box>
    )
}
import { Navlinks } from "./navlinks";
import { Link } from "react-router-dom";
import { Stack } from "@chakra-ui/react";

export default function NavItemsRenderers({ direction }: { direction: 'row' | 'column' | undefined }) {
    return (
        <Stack direction={direction} gap={5}>
            {Navlinks.map((item) => (
                <Link target={item.title === "Github" ? "_blank" : ""} key={item.id} to={item.url}>
                    {item.title}
                </Link>
            ))}
        </Stack>
    );
}
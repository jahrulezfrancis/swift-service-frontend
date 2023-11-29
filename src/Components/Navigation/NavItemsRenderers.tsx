import { Navlinks } from "./navlinks";

export default function NavItemsRenderers({ direction }: { direction: 'row' | 'column' | undefined }) {
    return (
        <Stack direction={direction} gap={5}>
            {Navlinks.map((item) => (
                <Link textDecoration='none' target={item.title === "Github" ? "_blank" : ""} fontSize={20} key={item.id} href={item.url}>
                    {item.title}
                </Link>
            ))}
        </Stack>
    );
}
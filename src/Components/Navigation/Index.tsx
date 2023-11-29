import { useMediaQuery } from "@chakra-ui/react"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"



export default function NavIndex() {
    const [isMobileDevice] = useMediaQuery('(max-width: 624px)')

    return (
        <div>
            {isMobileDevice ? <MobileNav /> : <DesktopNav />}
        </div>
    )
}
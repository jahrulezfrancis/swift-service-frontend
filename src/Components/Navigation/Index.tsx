import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function NavIndex() {
    const isMobileDevice = true
    return (
        <div>
            {isMobileDevice ? <MobileNav /> : <DesktopNav />}
        </div>
    )
}
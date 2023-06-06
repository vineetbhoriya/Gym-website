import logo from "@/assets/logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link"
import { SelectedPage } from "@/shared/type"
import useMediaQuery from "@/hooks/useMediaQuery"
import {useState} from "react"
import ActionButton from "@/shared/ActionButtonActionButton"


type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}
export default function Navbar({ selectedPage, setSelectedPage }: Props) {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <nav>
            <div className={`${flexBetween} w-full border mx-auto p-5`}>
                <div className={`${flexBetween} mx-auto`}>
                    <div className={`${flexBetween} gap-16`}>
                        {/* left side  */}
                        <img src={logo} alt="" />

                        {/*Right side   */}

                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button 
                                className="rounded-full bg-secondary-500 p-2 w-full"
                                onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
                                <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

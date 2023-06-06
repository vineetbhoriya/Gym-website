import logo from "@/assets/logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "./Link"
import { SelectedPage } from "@/shared/type"
import useMediaQuery from "@/hooks/useMediaQuery"
import { useState } from "react"
import ActionButton from "@/shared/ActionButtonActionButton"


type Props = {
    isTopOfPage:boolean
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void
}
export default function Navbar({isTopOfPage, selectedPage, setSelectedPage }: Props) {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const navbarbackgroup = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
    return (
        <nav>
            <div className={`${navbarbackgroup} ${flexBetween} w-full border mx-auto p-5`}>
                <div className={`${flexBetween} mx-auto`}>
                    <div className={`${flexBetween} gap-[15rem]`}>
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
            {/* Mobile menu model */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
                            <XMarkIcon className="h-6 w-6 text-gray-400 " />
                        </button>
                    </div>
                    {/* menu items */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl ">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    )
}


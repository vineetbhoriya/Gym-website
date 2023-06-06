import logo from "@/assets/Logo.png"

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={logo} alt="logo image" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima pariatur, animi libero, magnam architecto ex dicta quod rem porro quia voluptatem sunt laboriosam illum doloremque incidunt? Sed, quibusdam assumenda.</p>
                <p>Evogym All Rights Reserverd</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa Orci Senctus</p>
                <p className="my-5">Et gravida id e etaim</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact us</h4>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur</p>
                <p>5454 +55454+5454c</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer
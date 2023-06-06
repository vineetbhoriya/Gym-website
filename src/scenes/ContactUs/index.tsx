import { SelectedPage } from "@/shared/type"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/Htext"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white `
    
    const { register, trigger, formState: { errors }, } = useForm();
    const onSubmit = async (e: any) => {
        const isVaild = await trigger();
        if (!isVaild) {
            e.preventDefault();
        }
    }
    return (
        <section id="contactus" className="mx-auto pt-24 w-5/6 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                <motion.div className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span>
                    </HText>
                    <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi modi, voluptatem eos hic officiis fugit, nisi aut consequuntur culpa, quisquam est dignissimos! Esse in totam quae, exercitationem repellendus illum nostrum?</p>
                </motion.div>
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div className="mt-10 basis-3/5 md:mt--0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form method="post" action="https://formsubmit.co/vineetbhoriya@email.com" target="_blank"
                            onSubmit={onSubmit}>

                            <input type="text" className={inputStyle} placeholder="Name" {...register("name", {
                                required: true,
                                maxLength: 100,
                            })} />
                            {errors.name && (
                                <p className="mt-1 text-primary-500 ">
                                    {errors.name.type === "required" && "This field is required"}
                                    {errors.name.type === "macLength" && "MaxLength is 100 Charater"}
                                </p>
                            )}
                            <input type="text" className={inputStyle} placeholder="EMAIL" {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                            {errors.email && (
                                <p className="mt-1 text-primary-500 ">
                                    {errors.email.type === "required" && "This field is required"}
                                    {errors.email.type === "pattern" && "Invaild email id "}
                                </p>
                            )}
                            <textarea className={inputStyle}
                                rows={4}
                                cols={50}
                                placeholder="MeSSAGE" {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })} />
                            {errors.message && (
                                <p className="mt-1 text-primary-500 ">
                                    {errors.message.type === "required" && "This field is required"}
                                    {errors.message.type === "macLength" && "MaxLength is 2000 Charater"}
                                </p>
                            )}
                            <button name="SUBMIT" type="button" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">SUBMIT</button>
                        </form>
                    </motion.div>
                    <motion.div className="relative mt-16 basis-2/5 md:mt-0"
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay:0.2, duration: 0.5 }}
                     variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1, x: 0 },
                     }}>
                        <div className="md:before:content-evolvetext w-full before:absolute before:bottom-20 before:right-10 before:z[-1] ">
                            <img src={ContactUsPageGraphic} className="w-full" alt="ContactUsPageGraphic" />
                        </div>
                    </motion.div>
                </div>

            </motion.div>
        </section>
    )
}

export default ContactUs
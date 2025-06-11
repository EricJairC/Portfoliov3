import { motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center py-8">
                <div className="relative flex flex-col items-center justify-center">
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="texto font-forta z-10"
                    >
                        ERIC
                    </motion.p>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="img-zoro z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2"
                        src="./img/zoropng1.png"
                    />
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="texto font-forta z-10"
                    >
                        JAIR
                    </motion.p>
                </div>
                <div className="contenedor-descripcion flex flex-col items-center -mt-12">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                        className="separador font-forta"
                    >
                        ✦
                    </motion.p>
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="descripcion font-forta text-center max-w-[600px]"
                    >
                        Ingeniero en informática con pasión por el desarrollo web y la creación de experiencias digitales únicas.
                    </motion.p>
                </div>
            </div>
        </>
    )
}

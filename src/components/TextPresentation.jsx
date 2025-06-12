import { motion } from 'framer-motion'
import RotatingText from '../TextAnimations/RotatingText/RotatingText'

export default function TextPresentation() {
    return (
        <>
            <div className="contenedor-nombre relative right-[0%] gap-[0.2rem] top-[4%] flex flex-col w-auto items-start z-[2]">
                <div className='line-1'>
                    <motion.h1
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                            delay: 0.1
                        }}
                        className="big-text big-text__hey font-forta"
                    >
                        Hola
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: "50%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                            delay: 0.25
                        }}
                        className="big-text big-text__yo font-forta text-9xl"
                    >
                        Soy
                    </motion.h2>
                </div>
                <div className='line-2'>
                    <motion.h2
                        initial={{ opacity: 0, x: "50%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                            delay: 0.4
                        }}
                        className="big-text big-text__eric font-forta text-9xl"
                    >
                        Eric
                    </motion.h2>
                </div>
                <div className="relative flex flex-row w-[80%] items-center frase">
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                            delay: 0.55
                        }}
                        className="flex flex-col gap-[0.2rem] text-frase"
                    >
                        <p className="small-text font-forta">Más</p>
                        <p className="small-text font-forta">Que</p>
                        <p className="small-text font-forta">Código</p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: "180%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    delay: 0.7
                }}
                className='texto-rotativo h-[45px]'
            >
                <p>Fullstack developer</p>
                <RotatingText
                    texts={['creativo', 'innovador', 'ingenioso']}
                    mainClassName="text-white overflow-hidden justify-center rounded-lg "
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden "
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
            </motion.div>
        </>
    )
}
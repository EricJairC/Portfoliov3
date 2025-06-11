import MetaBalls from '../Animations/MetaBalls/MetaBalls'
import { motion } from 'framer-motion'

export default function DescriptionSkills() {
    return (
        <div className='flex justify-between w-[80%] h-[50vh] mx-auto'>
            <div className="text-left container-text-left my-auto w-1/3 flex items-center justify-center">
                <motion.h3
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 1 }}
                    className='font-forta text-center text-fullstack'
                >
                    Fullstack
                </motion.h3>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 1 }}
                className='flex items-center justify-center w-1/3 h-full'
            >
                <div className="container-element relative w-full h-full flex items-center justify-center">
                    <div className="w-[90%] aspect-square max-w-full max-h-full flex items-center justify-center">
                        <MetaBalls
                            color="#ffffff"
                            cursorBallColor="#ffffff"
                            cursorBallSize={2}
                            ballCount={15}
                            animationSize={25}
                            enableMouseInteraction={true}
                            enableTransparency={true}
                            hoverSmoothness={0.05}
                            clumpFactor={1}
                            speed={0.3}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                </div>
            </motion.div>
            <div className="text-right container-text-right my-auto w-1/3 flex items-center justify-center">
                <motion.h3
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 1 }}
                    className='font-forta text-center text-fullstack'
                >
                    Engineer
                </motion.h3>
            </div>
        </div>
    )
}
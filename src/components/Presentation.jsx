import { Suspense, lazy } from "react";
import icono from '/img/icono.png'
import TextPresentation from './TextPresentation'
import Spinner from "./Spinner";

const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Presentation() {
    return (
        <section className="relative flex flex-col justify-between items-center mt-[2.5em] p-0 w-full max-w-[88vw] h-screen max-h-[100vh]">
            <div className="relative flex flex-row justify-between items-start pt-[3em] w-full h-auto">
                <img className='logo' src={icono} alt="" />
                <div className="contenedor-3d">
                    <Suspense fallback={
                        <div className="w-full h-full flex items-center justify-center">
                            <Spinner/>
                        </div>
                    }>
                        <Spline className='absolute inset-0 m-auto w-full h-full' scene="https://prod.spline.design/ilZLrG9Z-hfjmOb2/scene.splinecode" />
                    </Suspense>
                </div>
                <TextPresentation/>
            </div>
        </section>
    )
}
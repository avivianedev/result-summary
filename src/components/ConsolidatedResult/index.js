import { useEffect, useState } from "react"

export default function ConsolidateResult({ scoreFinal }) {
    //const [scoreFinalProps, SetscoreFinalProps] = useState(0)
    //
    //useEffect(() => {
    //    SetscoreFinalProps(scoreFinal)
    //}, [])

    return (
        <div className=" bg-bg_blue_principal lgl:w-[40%] w-[100%] 
            flex flex-col items-center justify-center h-[500px] 
            overflow-hidden border-transparent rounded-b-[10%] lgl:rounded-2xl gap-10 px-4">
            <h1 className="text-2xl text-title_text_matte">Your Result</h1>
            <div className="w-[180px] h-[180px] border-transparent rounded-full 
                bg-gradient-to-b from-bg_gradient_blue to-bg_blue_principal
                flex flex-col items-center justify-center gap-2">
                <span id="number" className="font-bold text-white text-7xl"></span>
                <h5 className={`text-title_text_matte`}>of 100</h5>
            </div>
            <div className='flex flex-col gap-2 px-4 text-center'>
                <h2 className={`text-3xl font-semibold text-title_text`}>Great</h2>
                <p className={`text-xl text-center text-title_text_matte`}>You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}
import Image from "next/image";
import { useEffect, useState } from "react";
//import Reaction from '../../../public/assets/images/icon-reaction.svg'
//import Memory from '../../../public/assets/images/icon-memory.svg'
//import Verbal from '../../../public/assets/images/icon-verbal.svg'
//import Visual from '../../../public/assets/images/icon-visual.svg'

export default function BoxSummary({ category, score, icon, colorText, classname }) {

    return (
        <div className={`flex justify-between px-4 py-4 w-[90%] rounded-md ${classname} gap-3`}>
            <div className="flex gap-3">
                <Image
                    src={`/assets/images/${icon}`}
                    alt={category}
                    color="#e5767e"
                    width={15}
                    height={15}

                />
                <span className={`text-${colorText} font-semibold`}>{category}</span>
            </div>
            <div>
                <span className="font-semibold text-text_result">{score} <span className="text-text_result_matte">/ 100</span></span>
            </div>
        </div>
    )
}
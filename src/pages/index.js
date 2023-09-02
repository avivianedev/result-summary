import ConsolidateResult from "@/components/ConsolidatedResult";
import Summary from "@/components/Summary";
import data from '../data/data.json';
import { useState } from "react";

export default function Home() {

  const [scoreTot, SetScoreTot] = useState(0)
  const [btnAtived, SetBtnAtived] = useState(false)

  const Calculate = () => {
    const score = data.map(score => score.score)
    const scoreTotal = score.reduce((total, preco) => total + preco, 0)
    const scoreFinal = Math.round(scoreTotal / score.length)
    SetScoreTot(scoreFinal)
    SetBtnAtived(!btnAtived)
    return scoreFinal
  }

  const zeroScoreTot = () => {
    SetScoreTot(0)
    SetBtnAtived(!btnAtived)
  }
  return (
    <main>
      <div className="flex flex-col items-center lgl:h-screen w-[100%] font-bodyFont lgl:w-[100%]">
        <div className="items-center justify-center h-screen gap-3 lgl:flex">
          <ConsolidateResult
            scoreFinal={scoreTot}
          />
          <Summary
            onclick={Calculate}
            zeroScore={zeroScoreTot}
            statebtn={btnAtived}
          />
        </div>

      </div>
    </main>
  )
}

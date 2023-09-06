import ConsolidateResult from "@/components/ConsolidatedResult";
import Summary from "@/components/Summary";
import data from '../data/data.json';
import { useState } from "react";

export default function Home() {

  const [scoreTot, SetScoreTot] = useState(0)
  const [btnAtived, SetBtnAtived] = useState(false)

  const Calculate = () => {
    const number = document.getElementById('number')
    const score = data.map(score => score.score)
    const scoreTotal = score.reduce((total, preco) => total + preco, 0)
    const scoreFinal = Math.round(scoreTotal / score.length)

    for (let i = 0; i <= scoreFinal; i++) {
      setTimeout(function (nr) {
        number.innerHTML = nr
      }, i * 1000 / scoreFinal, i);
    }
    //SetScoreTot(scoreFinal)
    SetBtnAtived(!btnAtived)
    //return scoreFinal
    return
  }

  const zeroScoreTot = () => {
    number.innerHTML = "0"
    SetBtnAtived(!btnAtived)
  }
  return (
    <main>
      <div className="flex flex-col items-center lgl:h-screen w-[100%] font-bodyFont lgl:w-[100%]">
        <div className="items-center justify-center h-screen gap-3 lgl:flex">
          <ConsolidateResult

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

import data from '../../data/data.json';
import BoxSummary from "./BoxSummary";

export default function Summary({ onclick, statebtn, zeroScore }) {

    return (
        <div className="flex flex-col items-center w-full gap-6 lgl:w-[40%] py-4">
            <span className='flex justify-start w-[90%] text-xl font-bold text-text_result'>Summary</span>
            {data.map((item) =>
            (<BoxSummary
                category={item.category}
                score={item.score}
                icon={item.icon}
                classname={item.classname}
                key={item.category}
            />))}

            {statebtn ? (
                <button className="w-[90%] bg-bg_btn py-4 rounded-3xl text-white 
                hover:bg-bg_blue_principal" onClick={() => zeroScore()} >
                    Zerar
                </button>
            ) : (<button className="w-[90%] bg-bg_btn py-4 rounded-3xl text-white 
            hover:bg-bg_blue_principal" onClick={() => onclick()} >
                Calcular
            </button>)}

        </div>
    )
}
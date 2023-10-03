

const Main = () => {
    return (
        <div className="flex justify-center w-[630px] h-[1000px] bg-yellow-300">
            <div className="felx flex-col w-[470px] h-[1000px] bg-red-300">
                <div className="w-[470px] h-[48px] flex border-b-2 ">
                    <div className="w-10 h-10">img</div>
                    <div className="flex flex-col">
                        <div className="w-[370px] h-5 bg-slate-400"></div>
                        <div className="w-[370px] h-5 bg-slate-300"></div>
                    </div>
                    <div>...</div>
                </div>
                <div className="w-[470px] h-[585px] bg-blue-500"></div>
            </div>
        </div>
    );
}

export default Main;
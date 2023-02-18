export default function Generate() {
    return (
        <div className="w-full justify-between bg-white"  >
            <div className="text-center items-center  py-[106px]">
                <div className="text-[#edb731] text-[87px] py-[1.5px]">Text to Image AI Generator</div>
                <div className="text-[#222222] text-2xl pb-[77px]">Covert your words into imaginations</div>
                <div className="flex text-2xl px-[250px] w-full pb-[84px]">
                    <div className="border rounded-l-full  border-[#edb731] w-full">
                        <input className="ml-[68px] py-[22px] w-full" pattern="Describe your imagination"></input>
                        </div>
                    <button className="border rounded-r-full bg-[#edb731] px-[40px] py-[22px]">Generate</button>
                </div>
                <div className="text-start text-2xl text-black px-[129px] py-[13px]">Prompt suggestions</div>
                <div className="px-[129px] py-[9px]">
                    <div className="flex w-full">
                        <button className="text-start border rounded-full bg-[#edb731] w-[40%] py-[9px] pl-[17px] my-[9px]">Suggestion here</button>
                        <button className="text-start border rounded-full bg-[#edb731] w-[60%] py-[9px] pl-[17px] my-[9px]">Suggestion here</button>
                    </div>
                    <div className="flex">
                        <button className="text-start border rounded-full bg-[#edb731] w-[50%] py-[9px] pl-[17px] my-[9px]">Suggestion here</button>
                        <button className="text-start border rounded-full bg-[#edb731] w-[25%] py-[9px] pl-[17px] my-[9px]">Suggestion here</button>
                        <button className="text-start border rounded-full bg-[#edb731] w-[25%] py-[9px] pl-[17px] my-[9px]">Suggestion here</button>
                    </div>
                </div>
                <div className="text-start text-2xl text-white mx-[13px]">AI Image Generator</div>
            </div>

        </div>
    )
}
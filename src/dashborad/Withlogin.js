import Logo from '../assets/images/unsplash_v-UrekkEHOk.png'
import Icon from '../assets/images/Frame811399.png'
import Vector from '../assets/images/Vector.png'


export default function Withlogin() {
    return (
        <div className="w-full flex text-center ">
            <div className="px-[50px] py-[30px] text-center justify-center w-[20%] bg-[#222222] text-[17px]">
                <div className="text-[#edb731] mt-[50px] text-3xl">LOGO</div>
                <div className="py-[20px] flex text-center w-full gap-[10px] px-[30px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">New Prompt</div>
                </div>
                <div className="py-[20px] flex gap-[10px] w-full px-[30px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">History</div>
                </div>
                <div className="py-[20px] flex w-full gap-[10px] px-[30px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">My Gallery</div>
                </div>
                <div className="py-[20px] flex w-full gap-[10px] px-[30px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">Comunity</div>
                </div>
                <div className="py-[20px] mb-[193px] flex w-full gap-[10px] px-[30px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">Feedback</div>
                </div>
                <img src={Icon} alt='Icon' className='w-full px-[35px] text-center ' />
                <div className="py-[10px] px-[30px] text-[#f2f2f2]">Ali James</div>
                <div className="py-[33px] px-[30px] flex w-full gap-[10px]">
                    <i className="text-[#edb731]">iii</i>
                    <div className="text-[#f2f2f2]">Logout</div>
                </div>
            </div>
            <div className="mx-[25px] my-[32px] w-full border-2 border-[#222222] rounded-xl">
                <div className='w-full p-[20px]'>
                    <div className="text-right px-[50px] mt-[275px] w-full flex justify-end">
                        <div className="bg-[#fff9eb] rounded-xl px-[20px] py-[13px] text-[16px]">prompt: a dawn image,with filter, of any thing which is related to abc</div>
                        <img src={Icon} alt="Icon" className="px-[11px] h-[40px]" />
                    </div>
                    <div className="px-[53px] w-[50%] text-start">
                        <div className="ml-[40px] flex">
                            <img src={Vector} alt='Vector' className="mt-[15px]" />
                            <div className="ml-[-20px] text-[16px] text-[#717171]">prompt: a dawn image,with filter, of any thing which is related to abc</div>
                        </div>
                        <div className="flex gap-[30px] px-[100px] mt-[-20px] ml-[-10px]">
                            <img src={Logo} alt="Logo" className="w-[80%]" />
                            <div className="">
                                <div className="my-[8px] bg-[#222222] text-[#edb731] rounded-full text-center">
                                    <i className='p-[10px]'>i</i>
                                </div>
                                <div className="bg-[#222222] my-[8px] text-[#edb731] rounded-full text-center">
                                    <i className='p-[10px]'>i</i>
                                </div>
                                <div className="bg-[#222222] my-[8px] text-[#edb731] rounded-full text-center">
                                    <i className='p-[10px]'>i</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex text-2xl px-[100px] w-full py-[80px] mt-[100px]">
                            <div className="border rounded-l-full  border-[#edb731] w-full">
                                <input className="ml-[68px] py-[22px] w-full" pattern="Describe your imagination"></input>
                            </div>
                            <button className="border rounded-r-full bg-[#edb731] px-[40px] py-[22px]">Generate</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
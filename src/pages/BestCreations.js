import Logo1 from '../assets/images/unsplash_NKhckz9B78c.png';
import Logo2 from '../assets/images/unsplash_v-UrekkEHOk.png';
import Logo3 from '../assets/images/unsplash_tY-Q9h0adUc.png';

export default function Generate() {
    return (
        <div className="w-full justify-between bg-white"  >
            <div className="text-center items-center  py-[100px]">
                <div className="text-[#edb731] text-[87px] py-[15px]">Best Creations</div>
                <div className="text-[#222222] text-2xl pb-[77px]">Here are some best people have created</div>
                <div className="flex px-[130px] w-full pb-[84px] gap-[74px]">
                    <div className='text-center w-full'>
                        <img src={Logo1} alt='Logo1' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#edb731] rounded-b-[5px]'>
                            <div className='py-[4px] text-[6px]'>Created By</div>
                            <div className='py-[2px] text-xl'>Mr. Jonny</div>
                            <div className='py-[8px] text-xl text-start px-[28px]'>prompt: describe your prompt here...</div>
                        </div>
                    </div>
                    <div className='text-center w-full'>
                        <img src={Logo2} alt='Logo2' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#edb731] rounded-b-[5px]'>
                            <div className='py-[4px] text-[6px]'>Created By</div>
                            <div className='py-[2px] text-xl'>Mr. Jonny</div>
                            <div className='py-[8px] text-xl text-start px-[28px]'>prompt: describe your prompt here...</div>
                        </div>
                    </div>
                    <div className='text-center w-full'>
                        <img src={Logo3} alt='Logo3' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#edb731] rounded-b-[5px]'>
                            <div className='py-[4px] text-[6px]'>Created By</div>
                            <div className='py-[2px] text-xl'>Mr. Jonny</div>
                            <div className='py-[8px] text-xl text-start px-[28px]'>prompt: describe your prompt here...</div>
                        </div>
                    </div>
                </div>
                <div className="text-[14px] text-black px-[129px] py-[13px]">Loved It? Create Yours's</div>
                <button className="border text-[16px] rounded-full bg-[#edb731] w-[20%] py-[9px]">Login</button>
            </div>

        </div>
    )
}
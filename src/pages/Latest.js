import Logo1 from '../assets/images/unsplash_NKhckz9B78c.png';
import Logo2 from '../assets/images/unsplash_v-UrekkEHOk.png';
import Logo3 from '../assets/images/unsplash_tY-Q9h0adUc.png';

export default function Latest() {
    return (
        <div className="w-full justify-between bg-white"  >
            <div className="text-center items-center  py-[240px]">
                <div className="text-[#edb731] text-[87px] py-[15px]">Latest News</div>
                <div className="text-[#222222] text-2xl pb-[77px]">Get updated with our latest blogs</div>
                <div className="flex px-[130px] w-full pb-[84px] gap-[74px]">
                    <div className='text-center w-full'>
                        <img src={Logo1} alt='Logo1' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#222222] rounded-b-[5px] px-[20px] py-[35px]'>
                            <div className='py-[4px] text-white text-[6px] text-start'>Category</div>
                            <div className='py-[2px] text-[#edb731] text-[20px] text-start'>How AI has changes the way of living</div>
                            <div className='py-[8px] text-white text-[14px] text-start'>It is an AI image generator tool. With it, you can create stunning images of your products or ideas.</div>
                            <button className="text-center  px-[29.5px] py-[6px] mt-[13px] bg-[#edb731] rounded-full">Login</button>
                        </div>
                    </div>
                    <div className='text-center w-full'>
                        <img src={Logo2} alt='Logo2' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#222222] rounded-b-[5px] px-[20px] py-[35px]'>
                            <div className='py-[4px] text-white text-[6px] text-start'>Category</div>
                            <div className='py-[2px] text-[#edb731] text-[20px] text-start'>How AI has changes the way of living</div>
                            <div className='py-[8px] text-white text-[14px] text-start'>It is an AI image generator tool. With it, you can create stunning images of your products or ideas.</div>
                            <button className="text-center  px-[29.5px] py-[6px] mt-[13px] bg-[#edb731] rounded-full">Login</button>
                        </div>
                    </div>
                    <div className='text-center w-full'>
                        <img src={Logo3} alt='Logo3' className='rounded-t-[5px] w-full' />
                        <div className='bg-[#222222] rounded-b-[5px] px-[20px] py-[35px]'>
                            <div className='py-[4px] text-white text-[6px] text-start'>Category</div>
                            <div className='py-[2px] text-[#edb731] text-[20px] text-start'>How AI has changes the way of living</div>
                            <div className='py-[8px] text-white text-[14px] text-start'>It is an AI image generator tool. With it, you can create stunning images of your products or ideas.</div>
                            <button className="text-center  px-[29.5px] py-[6px] mt-[13px] bg-[#edb731] rounded-full">Login</button>
                        </div>
                    </div>
                </div>
               </div>

        </div>
    )
}
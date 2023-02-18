import { Link } from 'react-router-dom';

import Img from '../assets/images/unsplash_v-UrekkEHOk.png';

export default function Signup() {
    return (
        <div className="w-full  flex bg-white justify-center">
            <img src={Img} alt='Img' className='justify-center w-[40%]' />
            <div className='w-[60%] py-[39px] px-[32px] justify-center'>
                <div className='flex w-full'>
                    <Link className='text-start text-[#edb731] text-[36px]' to='/'>LOGO</Link>
                    <div className='ml-[60%] flex'>
                        <div className='px-[5px] py-[15px] text-center justify-center text-[16px]'>Have Account</div>
                        <Link className='bg-[#edb731] text-[16px] px-[36.5px] py-[14px] rounded-full' to='/login'>Elliot Murai</Link>
                    </div>
                </div>
                <div className='justify-center px-[39px] py-[39px] mx-[46px] my-[150px] border-2 borderr-black rounded-xl'>
                    <div className='text-start text-[20px] mb-[24px]'>Signup</div>
                    <div className='text-start text-[16px] mb-[16px]'>Username or Email</div>
                    <input className=' p-[5px] w-full h-[49px] rounded-[5px] border-2 mb-[24px]' />
                    <div className='text-start text-[16px] mb-[16px]'>Password</div>
                    <input className='p-[5px] w-full h-[49px] rounded-[5px] border-2' />
                    <div className='px-[117px] text-center pt-[35px]'>
                        <button className='bg-[#edb731] text-[16px] mb-[35px] px-[46.5px] py-[6px] rounded-full'>Signup</button>
                        <div className='text-[16px] py-[25px]'>------------------      OR     -----------------</div>
                        <button className='bg-[#edb731] text-[16px] my-[5px] px-[61px] py-[6px] rounded-full'>Continue with Google</button>
                        <button className='bg-[#edb731] text-[16px] my-[5px] px-[68px] py-[6px] rounded-full'>Connect with Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
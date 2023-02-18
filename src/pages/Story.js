import BlackImg from '../assets/images/Frame25.png';
import Logo from '../assets/images/unsplash_g1Kr4Ozfoac.png';


export default function Story() {
    return (
        <div className="w-full justify-between bg-cover bg-center bg-[url('assets/images/Rectangle10.png')]"  >
            <div className="text-5xl  text-[#edb731] text-center py-[100px] w-full">Our Story</div>
            <div className="text-center items-center px-[10%] flex gap-[124px]">
                <img src={BlackImg} alt='Blackimg' className="rounded-xl w-full h-[600px]" />
                <div className="w-full">
                    <div className="text-[20px] text-[#edb731] text-start mt-[110px] mb-[50px] mr-[10px]">The journey of hustle</div>
                    <div className="text-[16px] text-start">It is an AI image generator tool. With it, you can create stunning images of your products or ideas. It has a wide variety of templates and options to choose from, so you can create the perfect image for your product. You can preview your generated images before you download them, so you can see how they will look. It is very easy to use, and there is step-by-step guidance to help you create the best possible images.</div>
                    <img src={Logo} alt='Logo' className="rounded-xl ml-[-380px] mt-[10px]" />
                </div>
            </div>
        </div>
    )
}
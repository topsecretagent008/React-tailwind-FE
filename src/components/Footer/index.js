import Logo from "../../assets/images/icon.png"


export default function Footer() {
    return (
        <div className="bg-[#222222] w-full px-[80px] py-[36px]">
            <div className="py-[82px] w-full flex gap-[30%]">
                <img src={Logo} className="w-[279px] h-[292px] rounded-[5px]"></img>
                <div className="flex w-full gap-[10%]">
                    <ul className="w-full text-white justify-center items-center">
                        <li className="text-lg justify-self-start text-[#edb731]">Heading</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                    </ul>
                    <ul className="w-full text-white justify-center items-center">
                        <li className="text-lg justify-self-start text-[#edb731]">Heading</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                    </ul>
                    <ul className="w-full text-white justify-center items-center">
                        <li className="text-lg justify-self-start text-[#edb731]">Heading</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                        <li>Lare Ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-[20%] w-full">
                <div className="flex gap-[40px] text-[#edb731] text-sm">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <span>Lorem ipsum</span>
                    <span>Lorem ipsum</span>
                    <span>Lorem ipsum</span>
                    <span>Lorem ipsum</span>
                </div>
                <div className="flex gap-[60px]">
                    <div className="bg-white">Icon</div>
                    <div className="bg-white">Icon</div>
                    <div className="bg-white">Icon</div>
                    <div className="bg-white">Icon</div>
                </div>
            </div>
        </div>
    )
}
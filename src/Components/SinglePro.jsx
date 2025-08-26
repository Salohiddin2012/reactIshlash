import { ChevronRight } from 'lucide-react';
import sofa1 from '../assets/outSofa1.png'
import sofa2 from '../assets/outSofa2.png'
import sofa3 from '../assets/outSofa3.png'
import sofa4 from '../assets/outSofa4.png'
import sofa5 from '../assets/outSofa5.png'
import sofa6 from '../assets/outSofa6.png'
import sofa7 from '../assets/outSofa7.png'
import pic from '../assets/pic.png'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

export const SinglePro = () => {
    return (
        <div>
            <div className='bg-[#F9F1E7] flex h-[100px] items-center gap-3 px-10 text-[16px]'>
                <h3 className='text-[#9F9F9F]'>Home</h3>
                <ChevronRight />
                <h3 className='text-[#9F9F9F]'>Shop</h3>
                <ChevronRight />
                <h3 className='text-black'>Asgaard sofa</h3>
            </div>
            <div className='flex flex-col lg:flex-row px-10 pt-10 gap-10'>

                <div className='flex flex-col gap-4'>
                    <div className='w-[76px] h-[80px] border-[4px] border-[#F9F1E7]'>
                        <img src={sofa1} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[76px] h-[80px] border-[4px] border-[#F9F1E7]'>
                        <img src={sofa2} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[76px] h-[80px] border-[4px] border-[#F9F1E7]'>
                        <img src={sofa3} className='w-full h-full object-cover' />
                    </div>
                    <div className='w-[76px] h-[80px] border-[4px] border-[#F9F1E7]'>
                        <img src={sofa4} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex-shrink-0'>
                    <img src={sofa5} className='max-w-[500px] object-cover' />
                </div>
                <div className='flex flex-col gap-4 max-w-[500px]'>
                    <h1 className='text-[40px] font-medium'>Asgaard sofa</h1>
                    <h2 className='text-[24px] text-[#9F9F9F]'>Rs. 250,000.00</h2>
                    <div className='flex items-center gap-2'>
                        <div className='flex text-[#FFC700] text-[20px]'>
                            ★ ★ ★ ★ ½
                        </div>
                        <p className='text-[#9F9F9F] text-[14px]'>5 Customer Review</p>
                    </div>

                    <p className='text-[#9F9F9F] leading-6'>
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                        stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                        highs for a sound.
                    </p>
                    <div>
                        <h3 className='text-[18px] font-medium mb-2'>Size</h3>
                        <div className='flex gap-3'>
                            <button className='bg-[#B88E2F] text-white w-[30px] h-[30px] rounded-[5px]'>L</button>
                            <button className='bg-[#F9F1E7] w-[30px] h-[30px] rounded-[5px]'>XL</button>
                            <button className='bg-[#F9F1E7] w-[30px] h-[30px] rounded-[5px]'>XS</button>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-[18px] font-medium mb-2 mt-4'>Color</h3>
                        <div className='flex gap-4'>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#816DFA]'></div>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#000000]'></div>
                            <div className='w-[20px] h-[20px] rounded-full bg-[#B88E2F]'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-6'>
                        <div className='flex items-center border border-black w-[120px] justify-between px-2 h-[40px]'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className='border border-black px-6 py-2'>Add To Cart</button>
                        <button className='border border-black px-6 py-2'>+ Compare</button>
                    </div>
                    <div className='pt-6 text-[14px] text-[#9F9F9F] space-y-1'>
                        <p><span className='font-medium text-black'>SKU</span> : SS001</p>
                        <p><span className='font-medium text-black'>Category</span> : Sofas</p>
                        <p><span className='font-medium text-black'>Tags</span> : Sofa, Chair, Home, Shop</p>
                        <p className='flex items-center gap-2'>
                            <span className='font-medium text-black'>Share</span> :
                            <span className='flex gap-2'>
                                <i className="fab fa-facebook-f" />
                                <i className="fab fa-linkedin-in" />
                                <i className="fab fa-twitter" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>


            <div className='flex flex-col items-center py-[60px] px-[100px]'>
                <div className='flex gap-[50px] mb-[30px] text-[20px]'>
                    <h5 className='font-semibold border-b-2 border-black pb-1'>Description</h5>
                    <h5 className='text-[#9F9F9F]'>Additional Information</h5>
                    <h5 className='text-[#9F9F9F]'>Reviews [5]</h5>
                </div>
                <p className='max-w-[1026px] text-center text-[#9F9F9F] text-[16px] leading-[28px] mb-4'>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className='max-w-[1026px] text-center text-[#9F9F9F] text-[16px] leading-[28px] mb-[40px]'>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className='flex gap-[30px]'>
                    <img src={sofa6} alt="" className='w-[605px] h-[348px] object-cover' />
                    <img src={sofa7} alt="" className='w-[605px] h-[348px] object-cover' />
                </div>
            </div>


            <div className='px-[100px] pt-[60px] pb-[80px]'>
                <h1 className='text-[36px] text-center font-semibold mb-[40px]'>Related Products</h1>
                <div className='flex gap-[32px] justify-center'>
                    <div className='w-[285px] bg-[#F4F5F7] p-4'>
                        <div className='relative'>
                            <img src={pic} alt="" className='w-full h-[301px] object-cover' />
                            <div className='absolute top-4 right-4 bg-[#E97171] text-white text-[12px] px-2 py-1 rounded-full'>-30%</div>
                        </div>
                        <h2 className='text-[24px] mt-4'>Syltherine</h2>
                        <p className='text-[#898989]'>Stylish cafe chair</p>
                        <h3 className='flex gap-3 text-[20px]'>
                            <span className='text-[#3A3A3A]'>Rp 2.500.000</span>
                            <span className='text-[#B0B0B0] line-through'>Rp 3.500.000</span>
                        </h3>
                    </div>
                    <div className='w-[285px] bg-[#F4F5F7] p-4'>
                        <img src={pic1} alt="" className='w-full h-[301px] object-cover' />
                        <h2 className='text-[24px] mt-4'>Leviosa</h2>
                        <p className='text-[#898989]'>Stylish cafe chair</p>
                        <h3 className='text-[20px] text-[#3A3A3A]'>Rp 2.500.000</h3>
                    </div>
                    <div className='w-[285px] bg-[#F4F5F7] p-4'>
                        <div className='relative'>
                            <img src={pic2} alt="" className='w-full h-[301px] object-cover' />
                            <div className='absolute top-4 right-4 bg-[#E97171] text-white text-[12px] px-2 py-1 rounded-full'>-50%</div>
                        </div>
                        <h2 className='text-[24px] mt-4'>Lolito</h2>
                        <p className='text-[#898989]'>Luxury big sofa</p>
                        <h3 className='flex gap-3 text-[20px]'>
                            <span className='text-[#3A3A3A]'>Rp 7.000.000</span>
                            <span className='text-[#B0B0B0] line-through'>Rp 14.000.000</span>
                        </h3>
                    </div>
                    <div className='w-[285px] bg-[#F4F5F7] p-4'>
                        <img src={pic3} alt="" className='w-full h-[301px] object-cover' />
                        <h2 className='text-[24px] text-[#3A3A3A] mt-4'>Respira</h2>
                        <p className='text-[16px] text-[#898989]'>Outdoor bar table and stool</p>
                        <h3 className='text-[19px] text-[#3A3A3A]'>Rp 500.000</h3>
                    </div>
                </div>

                <div className='flex justify-center mt-[50px]'>
                    <button className='border-[1px] border-[#B88E2F] text-[#B88E2F] px-[70px] py-[15px] text-[16px] font-medium'>
                        Show More
                    </button>
                </div>
            </div>

        </div>
    )
}

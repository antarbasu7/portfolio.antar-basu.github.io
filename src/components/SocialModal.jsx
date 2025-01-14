

import { Link } from 'react-router-dom';
import './SocialModal.css'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter , AiFillCloseCircle } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';

const SocialModal = ({ handleCloseModal }) => {
    return (
        <div className="social-modal-main">
            <div className='social-modal-contain'>
                <div className='md:w-[40rem] w-[15rem] md:h-[18rem] text-black bg-white rounded-md p-5' >
                    <div className='flex justify-between'>
                        <h1 className='md:text-xl font-semibold'>Contact me!</h1>
                        <button onClick={handleCloseModal} title='close' ><AiFillCloseCircle className='text-2xl text-red-600' /></button>
                    </div>
                    <div className='mt-10' >
                        <div className='text-5xl flex md:gap-2 gap-5 justify-around flex-wrap'>
                            <Link to='linkedin.com/in/antarbasu7'><AiFillLinkedin className='text-[#28579d] social-icon' /></Link>
                            <Link to='https://www.facebook.com/antar.basu.14/about'><AiFillFacebook className='text-sky-800 social-icon' /></Link>
                            <Link to='https://github.com/antarbasu7' ><AiFillGithub className='text-green-800 social-icon' /></Link>
                            <Link to='https://x.com/Im_Abasu' ><AiOutlineTwitter className='text-sky-500 social-icon' /></Link>
                            <Link to='https://www.instagram.com/antar_bose/' ><AiOutlineInstagram className='text-red-500 social-icon' /></Link>
                        </div>
                        <div className='text-center mt-10 font-semibold md:text-xl'>
                            <div className='flex md:items-center md:flex-row flex-col md:gap-3 justify-center'>
                                <BiLogoGmail className='md:text-2xl text-red-500' />
                                <h2>antarbasu.official@gmail.com</h2>
                            </div>
                            <div className='mt-5'>
                                <a href='#contact' onClick={handleCloseModal} className='text-sm text-sky-600 underline' >Send Direct</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialModal;

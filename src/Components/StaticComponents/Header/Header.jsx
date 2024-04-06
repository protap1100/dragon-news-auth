import moment from 'moment';
import logo from '../../../../src/assets/logo.png';
import LiveNews from './LiveNews';

const Header = () => {
    const currentTime = moment().format('LLLL');
    return (
        <div className='font-Poppins flex gap-5 flex-col items-center justify-center'>
            <img src={logo} alt="Logo" />
            <h1 className=' text-2xl text-gray-600'>Journalism Without Fear or Favour</h1>
            <p className='font-bold text-2xl'>{currentTime}</p>
            <div>
                <LiveNews></LiveNews>
            </div>
        </div>
    );
};

export default Header;

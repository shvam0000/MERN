import srmlogo from '../assets/srmlogo.png';

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-[#17375E] py-2 px-52 text-xs text-white'>
        <div>
          <span className='px-2'>HOME</span>
          <span>|</span>
          <span className='px-2'>EMAIL</span>
          <span>|</span>
          <span className='px-2'>CONTACT US</span>
        </div>
        <div>
          <span className='px-2'>STUDENTS</span>
          <span>|</span>
          <span className='px-2'>FACULTY</span>
          <span>|</span>
          <span className='px-2'>ALUMNI</span>
          <span>|</span>
          <span className='px-2'>PARENTS</span>
          <span>|</span>
          <span className='px-2'>VISITORS</span>
          <span>|</span>
          <span className='px-2'>CAREERS</span>
        </div>
      </div>
      <div>
        <div className='flex items-end justify-between px-24 py-4 font-bold'>
          <figure>
            <img src={srmlogo} alt='SRM Logo' className='w-32' />
          </figure>
          <span>About SRM</span>
          <span>Admission</span>
          <span>Academics</span>
          <span>Research</span>
          <span>Campus Life</span>
          <span>Placements</span>
          <span>Group Institutions</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

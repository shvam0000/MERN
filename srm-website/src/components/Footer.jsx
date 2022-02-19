import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#102540] text-center text-white'>
        <div className='container px-6 pt-6'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4'>
            <div className='mb-6'>
              <h5 className='mb-2.5 font-bold text-[#DAB833]'>
                Internation Relations
              </h5>

              <ul className='mb-0 list-none'>
                <li>
                  <a href='#!' className='text-white'>
                    International Advisory Board
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Global Alliances
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Foreign Faculty
                  </a>
                </li>
              </ul>
            </div>

            <div className='mb-6'>
              <h5 className='mb-2.5 font-bold text-[#DAB833]'>Going Abroad</h5>

              <ul className='mb-0 list-none'>
                <li>
                  <a href='#!' className='text-white'>
                    Semester Abroad Program
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Faculty Abroad Program
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Twinning & Dual Degrees
                  </a>
                </li>
              </ul>
            </div>

            <div className='mb-6'>
              <h5 className='mb-2.5 font-bold text-[#DAB833]'>Get Placed</h5>

              <ul className='mb-0 list-none'>
                <li>
                  <a href='#!' className='text-white'>
                    Career Center Placement
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Corporate Advisory Board
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Corporate Relations
                  </a>
                </li>
              </ul>
            </div>

            <div className='mb-6'>
              <h5 className='mb-2.5 font-bold text-[#DAB833]'>Insights</h5>

              <ul className='mb-0 list-none'>
                <li>
                  <a href='#!' className='text-white'>
                    IQAC
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Students Clubs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    My Choice SRM
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    SRM Video
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='flex justify-center bg-[#173662] py-1 text-sm text-white'>
        @ SRM Institute of Science and Technology (formerly known as SRM
        University), India. All rights reserved.
      </div>
    </>
  );
};

export default Footer;

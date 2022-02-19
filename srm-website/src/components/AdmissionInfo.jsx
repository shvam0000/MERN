import info1 from '../assets/info1.jpg';
import info2 from '../assets/info2.jpg';
import info3 from '../assets/info3.jpg';
import info4 from '../assets/info4.jpg';

const AdmissionInfo = () => {
  return (
    <>
      <div className='my-4 flex items-start justify-center border-8 bg-slate-200 p-2'>
        <figure>
          <img src={info1} alt='Admission-1' />
        </figure>
        <div>
          <h1 className='px-2 font-bold'>Admission 2022</h1>
        </div>
      </div>
      <div className='my-4 flex items-start justify-center border-8 bg-slate-200 p-2'>
        <figure>
          <img src={info2} alt='Admission-1' />
        </figure>
        <div>
          <h1 className='px-2 font-bold'>Admission International</h1>
        </div>
      </div>
      <div className='my-4 flex items-start justify-center border-8 bg-slate-200 p-2'>
        <figure>
          <img src={info3} alt='Admission-1' />
        </figure>
        <div>
          <h1 className='px-2 font-bold'>Admission Relations</h1>
        </div>
      </div>
      <div className='my-4 flex items-start justify-center border-8 bg-slate-200 p-2'>
        <figure>
          <img src={info4} alt='Admission-1' />
        </figure>
        <div>
          <h1 className='px-2 font-bold'>Transfer Program</h1>
        </div>
      </div>
    </>
  );
};

export default AdmissionInfo;

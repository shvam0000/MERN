import Arrow from '../assets/icons/Arrow';
import AdmissionInfo from './AdmissionInfo';

const leftBarData = [
  {
    title: 'Admission India',
  },
  {
    title: 'Admission International',
  },
  {
    title: 'Student Mobility',
  },
  {
    title: 'Transfer Program',
  },
];

const Main = () => {
  return (
    <div className='flex items-start justify-between px-96'>
      <div>
        <h1 className='mb-4 font-bold'>ADMISSION</h1>
        {leftBarData.map((item) => (
          <ul>
            <li className='flex items-center'>
              <span className='mr-2'>
                <Arrow />
              </span>
              {item.title}
            </li>
          </ul>
        ))}
      </div>
      <div>
        <h1 className='font-bold'>ADMISSION INDIA PORTAL</h1>
        <AdmissionInfo />
      </div>
    </div>
  );
};

export default Main;

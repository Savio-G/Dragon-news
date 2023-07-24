import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const QZone = () => {
  return (
    <div className='w-full bg-slate-100 p-5 mt-7'>
      <h2 className='text-xl font-medium mb-7'>Q-Zone</h2>
      <img className='mx-auto' src={qZone1} alt="qZone1" />
      <img className='mx-auto' src={qZone2} alt="qZone2" />
      <img className='mx-auto' src={qZone3} alt="qZone3" />
    </div>
  );
};

export default QZone;
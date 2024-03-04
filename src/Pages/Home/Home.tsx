import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import PlanPackage from '../../components/PlanPackage/PlanPackage'
import Services from '../../components/Services/Services'
import ReactLoading from 'react-loading';


const Home = () => {
   const [PreLoading , SetPreLoading] = useState<boolean>(true);
  useEffect(() => {
   setTimeout(() => {
   SetPreLoading(false)
   }, 1000);
 }, [PreLoading])
  return (
    <div className='relative w-full'>
          <div className={`  w-full relative ${ PreLoading ? "blur-lg" :"blur-0"}`}>
          <Banner />
          <Services />
          <PlanPackage/>

    </div> 
    <div
        className={`${PreLoading ? "absolute" : "hidden"}  w-full top-0 left-0 right-0 h-[100vh] flex flex-col justify-center bg-[#856d6d00]  items-center`}
      >
        <ReactLoading
          type="balls"
          className={`w-[40px] h-[30px] ${
            PreLoading ? "flex items-center justify-center" : "hidden"
          }`}
          color="var(--primary-color)"
        ></ReactLoading>
      </div>
    </div>
  )
}

export default Home
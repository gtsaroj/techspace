import Banner from '../../components/Banner/Banner'
import PlanPackage from '../../components/PlanPackage/PlanPackage'
import Services from '../../components/Services/Services'


const Home = () => {
  return (
      <div className='w-full'>
          <Banner />
          <Services />
          <PlanPackage/>
          
    </div>
  )
}

export default Home
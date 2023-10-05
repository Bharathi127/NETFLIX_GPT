import CustomHooks from '../hooks/useFetchingData'
import LogoHeader from './LogoHeader'
import MainContainer from './MainContainer'
import SecondContainer from './SecondContainer'

const Browse = () => {
   CustomHooks.useFetchingData()
  return (
    <div>
      <LogoHeader />
      <MainContainer/>
      <SecondContainer/>
    </div>
  )
}

export default Browse
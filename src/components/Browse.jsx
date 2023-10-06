import CustomHooks from '../hooks/useFetchingData'
import LogoHeader from './LogoHeader'
import MainContainer from './MainContainer'
import SearchButton from './SearchButton'
import SecondContainer from './SecondContainer'
import { useSelector } from 'react-redux'
const Browse = () => {
  const { showSearchbtn } = useSelector(state => state.button)
  CustomHooks.useFetchingData()

  return (
    <div>
      <LogoHeader />
      {showSearchbtn ?
        <SearchButton /> :
        <>
          <MainContainer />
          <SecondContainer />
        </>
      }
    </div>
  )
}

export default Browse
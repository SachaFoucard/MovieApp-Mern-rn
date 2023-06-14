import Popular from '../components/Listes/Popular';
import TopRated from '../components/Listes/TopRated';
import { useContext } from 'react';
import { FilmsContext } from '../context/FilmsContext';
import { ScrollView } from 'react-native';
import ComingSoon from '../components/Listes/ComingSoon';
import Top2023 from '../components/Listes/Top2023';
import PopularSeries from '../components/Listes/PopularSeries'

const Home = () => {
  const { PopularList, TopRatedList, UpComingList, Top2023Film,PopularSeriesList } = useContext(FilmsContext);

  return (
    <>
      <ScrollView>
        <Popular PopularList={PopularList} />
        <TopRated TopRatedList={TopRatedList} />
        <ComingSoon UpComingList={UpComingList} />
        <Top2023 Top2023Film={Top2023Film} />
        <PopularSeries PopularSeriesList={PopularSeriesList}/>
      </ScrollView>
    </>
  )
}

export default Home;


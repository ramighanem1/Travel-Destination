import Header from "../header/Header";
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
import './Home.css'

function Home(props) {
  let data = props.tours;
  return (
    <>
      <Header />
      <Tours tours={data}/>
      <Footer />
    </>
  );
}

export default Home;
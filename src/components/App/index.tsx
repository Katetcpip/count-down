import 'components/App/App.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import QandA from 'components/Q&A';
import Timer from 'components/Timer';

function App() {

  return (
    <div>
      <Header />
      <div className='bg-slate-900 h-fit'>
        <Timer />
      </div>
      <QandA />
      <Footer />
   </div>
  );
}

export default App;

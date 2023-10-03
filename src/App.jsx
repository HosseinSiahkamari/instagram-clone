import './App.css';
import SideBar from './components/sideBar/sideBar';
import Header from './components/header/Header';
import RightList from './components/rightList/RightList';
import Main from './components/main/Main';
import 'tailwindcss/tailwind.css';
import './Styles.css'


function App() {
  return (<div className='flex'>
    <SideBar />
    <div className='flex flex-col justify-center items-center ml-10'>
      <Header />
      <Main />
    </div>
    <div className='lg:block md:hidden'>
      <RightList />
    </div>
  </div>
  );
}

export default App;

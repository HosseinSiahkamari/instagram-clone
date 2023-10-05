import './App.css';
import SideBar from './components/sideBar/sideBar';
import Header from './components/header/Header';
import RightList from './components/rightList/RightList';
import Main from './components/main/Main';
import 'tailwindcss/tailwind.css';
import './Styles.css'


function App() {
  return ( <div id='s25' className=' flex flex-col w-full object-cover justify-center items-center bg-yellow-200'>
  <Header />
  {/* <Main /> */}
</div>
    // <div className='flex' >
    //   <div className=' md:w-20 xl:w-60 h-16 md:h-screen  border-r-2 hidden md:block left-0'>
    //     <SideBar />
    //   </div>
      // <div className='w-full h-full '>
      //   <div className='flex justify-center tablet:justify-between'>
          
          /* <div className='w-96 h-[739px] hidden tablet:block'>
            <RightList />
          </div>
        </div>
      </div>
    </div> */
  );
}

export default App;

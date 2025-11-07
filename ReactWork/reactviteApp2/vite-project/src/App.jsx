// import './App.css';

// import ImageManipulation from "./component/imagemanipulation";


// function App() {
//   return (
//     <div className="container">
//       <h1>Welcome to React App</h1>
//       {/* <h2 style={{ backgroundColor: 'cyan', color: 'white' }}>Student Profiles</h2>
//       <StateHandling/> */}

//     <ImageManipulation/>
      
//     </div>
//   );
// }

// export default App;
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div>
      {/* <h2>Welcome to ReactVite.</h2> */}

       {/* {/<Gallery/> }
       {/<StateHandling />/} */}
       {/* <ImageManipulation/> */}

       <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
       </Routes>
       </BrowserRouter>

  
    </div>
  )
}

export default App
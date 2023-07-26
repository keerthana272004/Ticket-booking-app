import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/loginPage";
import Signup from "./components/signup";
import Home from "./home";
import MovieDetail from "./components/movie";
import Hom from "./components/concert";
import Theater from "./components/theater";
import Conlocation from "./components/conlocation ";
import Conprice from "./components/conprice";
import Price500 from "./components/500-1000";
import Price1000 from "./components/1000-3000";
import Price3000 from "./components/3000-5000";
import Price5000 from "./components/above-5000";
import Maveeran from "./components/maaveran";
import Mission from "./components/mission";
import Maamannan from "./components/maamannan";
import Good from "./components/good";
import Por from "./components/por";
import Inside from "./components/inside";
import Oppen from "./components/oppen";
import India from "./components/india";
import SeatSelectionApp from "./components/seatselection";
import Spider from "./components/spider";
import Asvins from "./components/asvins";
import Profile from "./components/profile";
import Feedback from "./components/feedback";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/movie" element={<MovieDetail/>}/>
          <Route path="/concert" element={<Hom/>}/>
          <Route path="/seatselection" element={<SeatSelectionApp/>}/>
          <Route path="/theater" element={<Theater/>}/>
          <Route path="/conlocation" element={<Conlocation/>}/>
          <Route path="/conprice" element={<Conprice/>}/>
          <Route path="/Price500" element={<Price500/>}/>
          <Route path="/Price1000" element={<Price1000/>}/>
          <Route path="/Price3000" element={<Price3000/>}/>
          <Route path="/Price5000" element={<Price5000/>}/>
          <Route path="/Maveeran" element={<Maveeran/>}/>
          <Route path="/Mission" element={<Mission/>}/>
          <Route path="/Maamannan" element={<Maamannan/>}/>
          <Route path="/good" element={<Good/>}/>
          <Route path="/por" element={<Por/>}/>
          <Route path="/inside" element={<Inside/>}/>
          <Route path="/open" element={<Oppen/>}/>
          <Route path="/india" element={<India/>}/>
          <Route path="/spider" element={<Spider/>}/>
          <Route path="/asvins" element={<Asvins/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

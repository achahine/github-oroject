//import logo from "./logo.svg";
//import "./App.css";
import MyImage from "./710e605ba962be31ded25fd58ce7891f.png";
//import Fire from "./fire.png";

function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-yellow-600 to-red-600 ">
      <header className="text-center">
        <div className="flex items-center justify-center relative ">
          <img
            className=" mt-20 w-30 h-30 rounded-full "
            src={MyImage}
            alt=""
            test
          />
          {/* <div>
            <img className="absolute bg-none" src={Fire} alt="fire" />
          </div> */}

          <p className="animate-ping absolute font-bold italic text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-600">
            IRON MAN
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;

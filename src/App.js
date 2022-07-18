//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import MyImage from "./710e605ba962be31ded25fd58ce7891f.png";
import LoadingIcon from "./spinner-removebg-preview (1).png";
//import Fire from "./fire.png";

function App() {
  /* Setup component state that tracks visibility of the image. Initially, we'll set
  the image to visible (toggled true) */
  const [toggled, setToggled] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);
  const toggleIName = () => setName(!name);
  const loadingCursor = () => setLoading(!loading);

  return (
    <div className="h-screen bg-gradient-to-b from-yellow-600 to-red-600 ">
      <div>
        <p className="animate-bounce flex items-center justify-center relative absolute font-bold italic text-2xl bg-clip-text text-black ">
          I'm a scientist , genius and a billioner, I'm powerfull all people
          love me, my color is red and gold and my heart will flash you?
        </p>
      </div>

      <div class="text-center">
        {loading && (
          <div className="flex items-center justify-center relative">
            <img
              className="animate-spin  mt-20 w-20 h-25 "
              src={loading && LoadingIcon}
              alt=""
              test
            />
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>

      <div>
        <button
          className="absolute inset-x-0 bottom-0 mb-20 ... bg-black hover:bg-gradient-to-b from-yellow-300 to-yellow-500 text-red-600 text-3xl font-bold py-2 px-4 rounded-full"
          onClick={() => {
            toggleImage();
            toggleIName();
            loadingCursor();
          }}
        >
          Guess who I'am
        </button>
      </div>
      <header className="text-center">
        <div className="flex items-center justify-center relative ">
          <img
            className=" mt-20 w-30 h-30 rounded-full "
            src={toggled && MyImage}
            alt=""
            test
          />
          {/* <div>
            <img className="absolute bg-none" src={Fire} alt="fire" />
          </div> */}

          {name && (
            <p className="animate-bounce absolute font-bold italic text-9xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-red-600 ">
              IRON MAN
            </p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

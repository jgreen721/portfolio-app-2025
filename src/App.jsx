import {useState,useEffect} from "react"
import './App.css'
import {DevInfo} from "./components"
import {Dashboard,Resume,Portfolio,Contact} from "./views"
import {Routes,Route} from "react-router-dom"


function App() {
  const [appTheme,setAppTheme] = useState("light")

  useEffect(()=>{
      
    let previousTheme = localStorage.getItem("users-theme");

    if(previousTheme){
      setAppTheme(previousTheme);
      // console.log(`apptheme has been restored to  ${previousTheme} mode for the user.`);
    }
   

  },[])

  const handleAppTheme=()=>{
    console.log("handleAppTheme fired---")
    localStorage.setItem("users-theme",appTheme == "light" ? "dark" : "light");
    setAppTheme((appTheme)=>appTheme == "light" ? "dark" : "light")

    

  }

  return (
    <div data-theme={appTheme} className="app">
      <div className="app-content-container">
        <div className="app-content">
          <div className="app-content-column small-app-content-column">
            <DevInfo handleAppTheme={handleAppTheme} appTheme={appTheme}/>
          </div>
          <div className="app-content-column large-app-content-column">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

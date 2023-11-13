import MAINPHOTO from "./assets/image/delove.webp";
import "./App.css";
import Gallery from "./Gallery";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router> */}
        <nav>
          <ul>
            <li><a href="/"><p className="linkcolor">Hjem</p></a></li>
            <li><a href="/storby"><p className="linkcolor">Storby</p></a></li>
            <li><a href="/strandferie"><p className="linkcolor">Strandferie</p></a></li>
            <li><a href="/populær"><p className="linkcolor">Mest populære</p></a></li>
          </ul>
        </nav>
{/* 
            <Routes>
            <Route path="/" element={<h1>Velkommen hjem</h1>}/>
            <Route path="/storby" element={<h1>Klar for shopping</h1>}/>
            <Route path="/strandferie" element={<h1>Solen skinner alltid et sted i verden</h1>}/>
            <Route path="/populær" element={<h1>Hvor er det mest spennende å dra?</h1>}/>
           
            </Routes> */}
<>
      <main>
        <div className="sectionMain">
          <img src={MAINPHOTO} alt=""></img>

          <div className="textfelt">
            <p className="infocolorheader">Hvor drømmer du om å reise?</p>
            <p className="infocolor">
              Vi ønsker å gi deg fantastiske ferieopplevelser! Derfor kan du som
              gjest lese anmeldelser fra tidligere hotellgjester. Slik at du
              skal kunne finne den perfekte reisen, tilpasset dine ønsker og
              behov. Informasjonen benyttes også for å forbedre både hotell og
              reiseopplevelsen. Og selvsagt tar vi ansvar for alle dere som
              reiser med oss. Det betyr at alle som reiser med Apollo skal føle
              seg trygge om noe uforutsett skulle skje. Les om integritet og
              sikkerhet. Dessuten arbeider vi for å gjennomføre bærekraftige
              reiser og ta mer sosialt ansvar.
            </p>
          </div>
        </div>

        <div className="imageWrapper">
          <Gallery />
        </div>
      </main>

      <footer></footer>
      </>
      {/* </Router> */}
    </>
  );
}

export default App;

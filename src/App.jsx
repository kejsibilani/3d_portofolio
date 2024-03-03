import { BrowserRouter } from "react-router-dom";

import { Contact, Feedbacks, Hero, Navbar, Socials, Services, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-opacity-50 bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div>
        <Services />
        <Socials />
        <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
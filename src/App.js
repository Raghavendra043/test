import './hero/hero_css.css'

import Hero from "./hero/hero";
import Skills from './skill/skills';
import Contact_fixed from './contact_fixed';
import Projects from './projects/projects';
import Work from './work/work';
import Test from './work/tets';

function App() {
  return (
    <div className='App_main'>
      <Contact_fixed/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Work/>

      {/* <Test/> */}
    </div>
  );
}

export default App;

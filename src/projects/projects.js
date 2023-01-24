import Component_projects from './component';
import './projects.css'
import P from '../assets/P.svg'
import Stack from './stack';
export default function Projects() {

    return(
        <div>
            <img src={P} className="P"></img>
        <div className='projects_container'>
            <div className='projects_title'>Yeah, I work hard</div>
            <div className='projects_subtitle'>Each <label className='red_word'>project</label> is unique, here are a few</div>
        </div>

        <div className='projects_list'>
            <div className='Row'>
                <Component_projects/>
                <Component_projects/>
            </div>

            <div className='Row'>
                <Component_projects/>
                <Component_projects/>
            </div>
        </div>
            
            {/* <Stack/> */}
        </div>
    );
}
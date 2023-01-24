import "./projects.css"
import reac from '../assets/reac.svg'
import H3 from '../assets/h3.svg'

export default function Component_projects(){

    return (
        <div className="component_container">
            <div className="component_title">
                <img src={reac} className="logo"></img>
                <div className="title_component">Web development</div>
            </div>

            <div className="component_content">
                <img src={H3} className="H3"></img>
                <div className="des">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
            </div>
        </div>
    );
}
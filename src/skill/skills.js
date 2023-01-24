import { useEffect } from 'react';
import './skills.css'
import TagCloud from 'TagCloud';
const Texts = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'React',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'GCP', 'MySQL', 'jQuery',
]
export default function Skills(){

    

    // useEffect(()=>{
    //     TagCloud('.Sphere', Texts, {
    //         radius: 400,
    //         maxSpeed: 'fast',
    //         initSpeed: 'fast',
    //         direction: 135,
    //         keep: true
    //     });
    // }, [])

    useEffect(() => {
        
        setTimeout(() => {
            TagCloud('.Sphere', Texts, {
                radius: 340,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 90,
                keep: true
            });
        }, 500);
      }, []);
    
    

        

    return (
        <div className="container">

            <div className="s_title">
                        Me, Myself
            </div>
            <div className='parent'>
                <div className='content'>
                    Lorem Ipsuemdqwedfeqw is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                </div>

                <div class="Sphere"></div>   
            </div> 

            <div className='bio'>
            <div className='adjust'>
                Adjust bio length
            </div>     
            <div className='options'>
                <div className='ball1'></div>
                <div className='ball2'></div>
                <div className='ball3'></div>
                <div className='ball4'></div>
                <div className='ball5'></div>
            </div>
            <div className='length'>
                <label>shortest</label>
                <label>longest</label>
            </div>
            </div>

            
        </div>
    );
}
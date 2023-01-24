

export default function Work_card1(){

    var skills = ["python", "AWS", "SQL", "Brainfuck"]
    return(
        <div className="word_card">
            <div className="work_logo1">

            </div>
            <div className="work_content1"> 
                <div className="work_des1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>  
                <div className="lang-work1">
                    {skills && skills.map((value, index)=>{
                        return(
                            <div className="lang_for_project"> {value} </div>
                        )
                    })}
                </div>
            </div>

            <div >

            </div>
        </div>
    );
}
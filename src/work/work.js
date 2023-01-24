import Work_card from './word_card';
import Work_card1 from './work_card1';
import './work.css'

export default function Work(){

    return(
        <div className="work_container">
            <div className="work_title"> Where I've <label className="red_word">W</label>orked</div>

            <div className="work_list">
                <Work_card/>
                <Work_card1/>
                <Work_card/>
                <Work_card1/>
            </div>
        </div>
    );
}
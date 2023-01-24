import './stack.css'

export default function Stack(){

    
    const props = [{'lang':"python", 'value':"9vw"},{'lang':"CSS", 'value':"2vw"},{'lang':"AWS", 'value':"1vw"},{'lang':"AWS", 'value':"1vw"},{'lang':"AWS", 'value':"1vw"} ]
    var i = props.length
    const colors = [[230, 40, 39], [23, 4, 73], [30, 140, 3], [23, 4, 73], [30, 140, 3]]
    return(
        <div>
            <label className='languages'>languages</label>
            <div style={{display:"flex"}}>
            {props && props.map((value, index)=>{
                return(
                    <div className="stack_bar1" style={{width:value['value'], background:`rgb(${colors[index]})`}}></div>
                )
                
            })}
            </div>
                
            {props && props.map((value, index)=>{
                index=2*(index+1)
                return(
                <>
                { (Math.floor(index/2)-1)<=i-1 && (i-1-(Math.floor(index/2) - 1))>=2 ? 
                    
                        <div>
                            <label className='lang'>{props[index-2]['lang']}</label>
                            <label className='lang'>{props[index-1]['lang']}</label>
                        </div>
                    : (Math.floor(index/2)-1)<=i-1 ? 
                        <label className='lang'>{props[index-2]['lang']}</label>
                    : <></>
                }
                </>
                )
                
            })}
        </div>
    );
}
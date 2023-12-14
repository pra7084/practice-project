import './ConceptDes.css';
const ConceptDes=(props)=>{
   
    return (
<>
<div className="concepts">
    <div className='heading'>
        {props.data.heading}
    </div>
    <img src={props.data.img} alt="error loading image"></img>
    
    <div className='para'>
          {props.data.para}
    </div>
</div>
</>
    );
};
export default ConceptDes;
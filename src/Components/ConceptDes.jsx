import './ConceptDes.css';
const ConceptDes=(props)=>{
    
    return (
<>
<div className="concepts">
    <div className="image">
       <img src={props.data.img} alt="error loading image"></img>
    </div>
    <div>
        {props.data.heading}
    </div>
    <div>
          {props.data.para}
    </div>
</div>
</>
    );
};
export default ConceptDes;
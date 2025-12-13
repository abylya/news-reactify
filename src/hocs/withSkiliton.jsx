import Skiliton from "../companents/skiliton/Skiliton";

 export default function withSkiliton(Companent,count,style) {

  return function WithSkiliton(props){
    const {loading,...restProps}=props;
    if(loading){
      return <div><Skiliton count={count} style={style}></Skiliton></div>
    }
      return <Companent {...restProps}></Companent>//<Companent {...restProps}></Companent>

  }

}
import Skiliton from "../companents/skiliton/Skiliton";

 export default function withSkiliton(Companent,count) {

  return function WithSkiliton(props){
    const {loading,...restProps}=props;
    if(loading){
      return <Skiliton count={count}></Skiliton>
    }
      return <Companent {...restProps}></Companent>//<Companent {...restProps}></Companent>

  }

}
import Skiliton from "../ui/skiliton/Skiliton";
import type { T_type } from "@/entities/news";

interface IProps {
  loading: boolean;
  type?: T_type;
  direction?: string;
}

export default function withSkiliton<P extends object>(
  Companent: React.ComponentType<P>,
  count: number,
) {
  return function WithSkiliton(props: IProps & P) {
    const { loading, direction, type, ...restProps } = props;
    if (loading) {
      return (
        <div>
          <Skiliton count={count} style={direction}></Skiliton>
        </div>
      );
    }
    return <Companent {...(restProps as P)}></Companent>; //<Companent {...restProps}></Companent>
  };
}

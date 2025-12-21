import Skiliton from "../companents/skiliton/Skiliton";
import type { INews } from "../interfaces";

interface IProps {
  loading: boolean;
  news: INews[] | undefined;
}

export default function withSkiliton<P extends object>(
  Companent: React.ComponentType<P>,
  count: number,
  style: string
) {
  return function WithSkiliton(props: IProps & P) {
    const { loading, ...restProps } = props;
    if (loading) {
      return (
        <div>
          <Skiliton count={count} style={style}></Skiliton>
        </div>
      );
    }
    return <Companent {...(restProps as P)}></Companent>; //<Companent {...restProps}></Companent>
  };
}

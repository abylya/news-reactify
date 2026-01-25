import Skiliton from "../ui/skiliton/Skiliton";

interface IProps {
  loading: boolean;
  direction?: string;
}

export default function withSkiliton<P extends object>(
  Companent: React.ComponentType<P>,
  count: number,
) {
  return function WithSkiliton(props: IProps & P) {
    const { loading, direction, ...restProps } = props;
    if (loading) {
      return (
        <div>
          <Skiliton count={count} style={direction}></Skiliton>
        </div>
      );
    }
    return <Companent direction={direction} {...(restProps as P)}></Companent>; //<Companent {...restProps}></Companent>
  };
}

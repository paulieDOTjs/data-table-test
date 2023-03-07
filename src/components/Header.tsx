import classNames from "classnames";
import { Button } from "primereact/button";

export type HeaderProps = Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const Header: (props: HeaderProps) => JSX.Element = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={classNames(
        className,
        "flex flex-wrap align-items-center justify-content-between gap-2"
      )}
    >
      <span className="text-xl text-900 font-bold">Products</span>
      <Button icon="pi pi-refresh" rounded raised />
    </div>
  );
};

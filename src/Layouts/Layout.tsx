import classNames from "classnames";
import { Link, Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export type LayoutProps = {} & Omit<
  JSX.IntrinsicElements["div"],
  "size" | "ref" | "children"
>;

export const Layout: (props: LayoutProps) => JSX.Element = ({
  className,
  ...rest
}) => {
  return (
    <div {...rest} className={classNames(styles["layout"], className)}>
      <div className={styles["my-header"]}>
        <Link to="/">Home</Link>
        <Link to="/tanstack">Tanstack Table</Link>
        <Link to="/prime">Prime React Table</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

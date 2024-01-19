import cn from "classnames";
import s from "./Header.module.css";
import { SIDEBAR } from "@/src/utils/lang";

const Header = ({ currentActive, setCurrentActive }) => {
  const ctas = SIDEBAR.header.ctas.map((cta) => (
    <span
      className={cn(s.cta, "cp", "text-18", "bbb", {
        [s.active]: currentActive === cta.toUpperCase(),
      })}
      key={cta}
      onClick={() => setCurrentActive(cta.toUpperCase())}
    >
      {cta}
    </span>
  ));

  return <div className={cn(s.container, "relative")}>{ctas}</div>;
};

export default Header;

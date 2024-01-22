import cn from "classnames";
import { SIDEBAR_BUSINESS, SIDEBAR_PERSONAL } from "@/src/utils/constants";
import { BUSINESS_SIDEBAR_CONFIG } from "@/src/utils/config";
import s from "./Content.module.css";
import Tile from "../Tile/Tile";
import { useState } from "react";

const renderList = (data) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return data.children.map((tile, index) => (
    <Tile
      tile={tile}
      key={tile.label}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      currentIndex={index}
    />
  ));
};

const Content = ({ currentActive }) => {
  let renderingList;

  if (currentActive === SIDEBAR_BUSINESS) {
    renderingList = renderList(BUSINESS_SIDEBAR_CONFIG);
  }

  if (currentActive === SIDEBAR_PERSONAL) {
    // to be done afterwards
  }

  return <div>{renderingList}</div>;
};

export default Content;

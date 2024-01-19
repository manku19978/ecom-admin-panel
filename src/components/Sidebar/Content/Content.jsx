import cn from "classnames";
import { ArrowDown, ArrowUp } from "@/src/assets/images/icons";
import { SIDEBAR_BUSINESS, SIDEBAR_PERSONAL } from "@/src/utils/constants";
import { BUSINESS_SIDEBAR_CONFIG } from "@/src/utils/config";
import s from "./Content.module.css";
import { useState } from "react";
import Link from "next/link";

const renderList = (data, selectedTile, clickHandler) => {
  return data.children.map((tile) => {
    return (
      <div className={cn(s.tileContainer)}>
        <div
          className={cn(
            s.tile,
            "flex",
            "justify-between",
            "items-center",
            "cp",
            { [s.active]: selectedTile === tile.label }
          )}
          onClick={() => clickHandler(tile.label)}
        >
          <div
            className={cn(
              "flex",
              "justify-between",
              "items-center",
              s.tileLeft
            )}
          >
            <tile.icon />
            <p>{tile.label}</p>
          </div>
          {selectedTile === tile.label ? <ArrowUp /> : <ArrowDown />}
        </div>
        {selectedTile === tile.label && (
          <div className={cn(s.links, "flex", "flex-col")}>
            {tile.children.map((link) => (
              <Link className={cn("cp", s.link)} href={link.path}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  });
};

const Content = ({ currentActive }) => {
  const [selectedTile, setSelectedTile] = useState(null);

  let renderingList;

  const clickHandler = (label) => {
    if (selectedTile === label) setSelectedTile(null);
    else setSelectedTile(label);
  };

  if (currentActive === SIDEBAR_BUSINESS) {
    renderingList = renderList(
      BUSINESS_SIDEBAR_CONFIG,
      selectedTile,
      clickHandler
    );
  }

  if (currentActive === SIDEBAR_PERSONAL) {
    // to be done afterwards
  }

  return <div>{renderingList}</div>;
};

export default Content;

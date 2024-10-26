import { MouseEventHandler } from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface Props {
  className?: string | undefined;
  image?: React.ReactNode | undefined;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  tooltipText?: string;
  tooltipPlace?: PlacesType;
}
export const IconButton = ({
  image,
  onClick,
  tooltipText,
  tooltipPlace = "top",
  className,
}: Props) => {
  return (
    <div
      className={`${className} cursor-pointer py-2 `}
      onClick={onClick}
      data-tooltip-id={`tooltip-${tooltipText}`}
      data-tooltip-content={tooltipText}
      data-tooltip-place={tooltipPlace}
    >
      <Tooltip id={`tooltip-${tooltipText}`} /> {image}
    </div>
  );
};

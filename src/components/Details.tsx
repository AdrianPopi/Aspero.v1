import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Details = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) => {
  return (
    <div
      {...props}
      data-aos="zoom-y-out"
      data-aos-delay="150"
      className={twMerge("body-lg text-light", props.className)}
    />
  );
};

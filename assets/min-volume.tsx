import { SVGProps } from "react";

export default function MinVolume(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 22 22">
      <path
        d="M15.125,11 C15.125,9.3775 14.19,7.98416667 12.8333333,7.30583333 L12.8333333,14.685 C14.19,14.0158333 15.125,12.6225 15.125,11 Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </svg>
  );
}

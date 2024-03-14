import { SVGProps } from "react";

export default function MaxVolume(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 22 22">
      <path
        d="M12.8333333,2.96083333 L12.8333333,4.84916667 C15.4825,5.6375 17.4166667,8.09416667 17.4166667,11 C17.4166667,13.9058333 15.4825,16.3625 12.8333333,17.1508333 L12.8333333,19.0391667 C16.5091667,18.205 19.25,14.9233333 19.25,11 C19.25,7.07666667 16.5091667,3.795 12.8333333,2.96083333 Z"
        fill={props.color}
        fillRule="evenodd"
      />
    </svg>
  );
}

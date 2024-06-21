import { SVGProps } from "react"
const SearchSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#71717A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.75 15.75-4.5-4.5m1.5-3.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
    />
  </svg>
)
export default SearchSvg

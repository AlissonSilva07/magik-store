import Marquee from "react-fast-marquee";
import { SpinnerTrack } from "./SpinnerTrack";

export function Spinner () {

  const renderMultiple = ( component: JSX.Element, repeat: number): JSX.Element[] => {
    let arr = []

    for(let i = 0; i <= repeat; i++) {
      arr.push(component)
    }

    return arr
  }
  
  return (
    <Marquee className="h-fit p-4 w-full bg-preto flex items-center z-30">
      {renderMultiple(<SpinnerTrack />, 12).map((i, key) => (
        <div key={key}>
          {i}
        </div>
      ))}
    </Marquee> 
  );
}

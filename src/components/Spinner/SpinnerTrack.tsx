
export interface ISpinnerTrackProps {
}

export function SpinnerTrack (props: ISpinnerTrackProps) {
  return (
    <div className="px-4 flex items-center gap-4 z-40">
        <p className="text-branco text-2xl font-black">MAGIK!</p>
        <span className="text-branco text-2xl font-black">&#183;</span>
    </div>
  );
}

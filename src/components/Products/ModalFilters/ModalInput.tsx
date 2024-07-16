export interface IModalInputProps {
  placeholder: string
  maxFilter: string | number | readonly string[] | undefined
  minFilter: string | number | readonly string[] | undefined
  setMinFilter: React.Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>
  setMaxFilter: React.Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>
  type: string
}

export function ModalInput({ placeholder, maxFilter, minFilter, setMinFilter, setMaxFilter, type }: IModalInputProps) {
  return (
    <input
      type="number"
      step={0.01}
      min={0.01}
      placeholder={placeholder}
      value={
        type === 'min' ? minFilter :
          type === 'max' ? maxFilter :
            undefined}
      onChange={e => {
        type === 'min' ? setMinFilter(Number(e.target.value)) :
          type === 'max' ? setMaxFilter(Number(e.target.value)) :
            null
      }}
      className="w-full p-3 text-cinza-800 border border-cinza-800 rounded-lg" />
  );
}

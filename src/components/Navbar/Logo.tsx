import LogoImg from '../../assets/logo.png'

export interface ILogoProps {
    height: number
}

export function Logo ({ height }: ILogoProps) {
  return <img src={LogoImg} alt="logo" className={`h-${height}`} />
}

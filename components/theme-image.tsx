import Image, { ImageProps } from "next/image"
 
type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string
  srcDark: string
}
 
export const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcDark} unoptimized={srcDark.includes("svg")} className="dark:hidden" />

      <Image {...rest} src={srcLight} unoptimized={srcLight.includes("svg")} className="hidden dark:block" />
    </>
  )
}

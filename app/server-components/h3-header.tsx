import React from "react"
interface IProps {
  children: React.ReactNode
}
export const H3Header = (props: IProps) => {
  
  return <h3 className="text-3xl pb-8 text-left font-bold" >{props.children}</h3>
}
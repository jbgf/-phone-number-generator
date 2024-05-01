import React from "react"
interface IProps {
  children: React.ReactNode
}
export const H2Header = (props: IProps) => {
  
  return <h2 className="text-3xl pb-8 text-left font-bold" >{props.children}</h2>
}
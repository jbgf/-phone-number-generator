import React from "react"
import cn from 'classnames';
import cnBind from 'classnames/bind';
interface IProps {
  children: React.ReactNode
}
export const H2Header = (props: IProps) => {

  return <h2 className={cn("text-3xl text-left font-bold", 'pb-4')}>{props.children}</h2>
}
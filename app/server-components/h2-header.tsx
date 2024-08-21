import React from "react"
import cn from 'classnames';
import cnBind from 'classnames/bind';
interface IProps {
  children: React.ReactNode
  noMarginBottom?: boolean
}
export const H2Header = (props: IProps) => {

  return <h2 className={cn("text-3xl text-left font-bold", { 'pb-8': !props.noMarginBottom })}>{props.children}</h2>
}
import Link from "next/link"

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Url } from "next/dist/shared/lib/router/router";
interface IProps {
  href: Url
  children: React.ReactNode
  className?: string
}
function NoFollowLink(props: IProps) {
  return (
    <Link className={cn("text-blue-600 visited:text-purple-600", props.className)} href={props.href} target="_blank" rel="nofollow" >
      {props.children}
    </Link>
  )
}
export default NoFollowLink;
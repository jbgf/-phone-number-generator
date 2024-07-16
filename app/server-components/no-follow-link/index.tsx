import Link from "next/link"

import React, { useState, useEffect } from 'react';
import cn from 'classnames/bind';
import { Url } from "next/dist/shared/lib/router/router";
interface IProps {
  href: Url
  children: React.ReactNode
}
function NoFollowLink(props: IProps) {
  return (
    <Link href={props.href} target="_blank" rel="nofollow" >
      {props.children}
    </Link>
  )
}
export default NoFollowLink;
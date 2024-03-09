import { Button, Tooltip, TooltipProps } from "antd";
import { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode,
  title: TooltipProps['title'],
  placement?: TooltipProps['placement']
  trigger?: TooltipProps['trigger']
}
let timer: NodeJS.Timeout | undefined;
export function ToolTipWrapper(props: IProps) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    console.log('open...', open, timer)
    if (timer) return;
    if (open) timer = setTimeout(() => {
      clearTimeout(timer)
      setOpen(false)
      timer = undefined;
    }, 1000);
  }, [open])
  const handleOpen = (v: boolean) => {
    if (v) {
      setOpen(v)
    }
  }
  return (
    <Tooltip placement={props.placement || 'top'} title={props.title} trigger={props.trigger} onOpenChange={handleOpen} open={open}>
        {props.children}
    </Tooltip>
  )
}

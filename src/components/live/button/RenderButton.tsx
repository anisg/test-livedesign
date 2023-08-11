
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderButtonProps = {
    frames?: {
    ["button"]?: DivProps
    ["container"]?: DivProps
    ["title"]?: SpanProps

  }
;
}

export function RenderButton(props: RenderButtonProps) {
    const { frames = {}, ...restProps } = props;
    return (
        <Div {...frames["button"]} className={cls(frames,"button", `gap-0 flex-col relative opacity-100 p-0 flex`)}>
  <button {...frames["container"]} className={cls(frames,"container", `gap-2.5 flex-row w-fit items-start shrink-0 overflow-hidden relative border bg-[#295cd7] opacity-100 px-[11px] py-[5px] rounded-[3px] border-[#2758ce] flex`)}>
    <Span {...frames["title"]} className={cls(frames,"title", `font-['Inter'] text-lg font-semibold text-white text-left relative`)}>click me</Span>
  </button>
</Div>
    );
}
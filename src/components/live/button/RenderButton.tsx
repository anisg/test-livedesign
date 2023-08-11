// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps } from '../lib';


export type RenderButtonProps = {
  frames?: {
    ["button"]?: DivProps
    ["title"]?: SpanProps

  }
  ;
}

export function RenderButton(props: RenderButtonProps) {
  const { frames = {} } = props;
  return (
    <Div {...frames["button"]} className={cls(frames, "button", `
            gap-0 flex-col relative bg-[#295cd7] 
            opacity-100 px-3 py-1.5
            flex`)}>
      <Span {...frames["title"]} className={cls(frames, "title", `
            font-['Inter'] text-lg font-semibold
            text-white text-left relative`)}>click me</Span>
    </Div>
  );
}
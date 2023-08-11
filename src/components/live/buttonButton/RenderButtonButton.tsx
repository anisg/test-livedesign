
// ~ auto-generated - do not edit ~
import React from 'react';
import { combine, cls, Div, DivProps, Span, SpanProps, Svg, SvgProps, Img, ImgProps, ElementProps, HtmlA, HtmlButton, HtmlInput, HtmlTextarea, HtmlSelect, HtmlOption, HtmlForm, HtmlLabel, HtmlP, HtmlH1, HtmlH2, HtmlH3, HtmlH4, } from '../lib';


export type RenderButtonProps = {
    frames?: {
    ["button"]?: DivProps
    ["clickMe"]?: SpanProps

  }
;
}

export function RenderButton(props: RenderButtonProps) {
    const { frames = {} } = props;
    return (
        <HtmlButton {...frames["button"]} className={cls(frames,"button", `gap-0 flex-col relative border rounded bg-[#2758ce] opacity-100 px-3 py-1.5 border-[#2758ce] flex`)}>
  <Span {...frames["clickMe"]} className={cls(frames,"clickMe", `font-['Inter'] text-lg font-semibold text-white text-left relative`)}>click me</Span>
</HtmlButton>
    );
}
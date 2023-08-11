
// ~ auto-generated - do not edit ~
import React from 'react';
import { cls, Div, DivProps, Span, SpanProps } from '../lib';
import { Button, ButtonProps } from '../button/Button'
import { BadgeLiveDesign, BadgeLiveDesignProps } from '../badgeLiveDesign/BadgeLiveDesign'

export type RenderMainPageProps = {
    frames?: {
    ["mainPage"]?: DivProps
    ["frame1"]?: DivProps
    ["frame7"]?: DivProps
    ["cuteDogPictureGenerator"]?: SpanProps
    ["theServiceAllowsYouToGenerateACuteDogPictureAndDownloadIt"]?: SpanProps
    ["frame6"]?: DivProps
    ["dogImageContainer"]?: DivProps
    ["content"]?: DivProps
    ["icon"]?: SvgProps
    ["clickToGenerate"]?: SpanProps
    ["frame5"]?: DivProps
    ["downloadButton"]?: ButtonProps["frames"];
    ["badgeLiveDesign"]?: BadgeLiveDesignProps["frames"];

  }
;
}

export function RenderMainPage(props: RenderMainPageProps) {
    const { frames = {} } = props;
    return (
        <Div {...frames["mainPage"]} className={cls(frames,"mainPage", `gap-[15px] flex-col justify-center items-center overflow-hidden relative bg-[#e9ecf1] opacity-100 p-[85px] flex`)}>
  <Div {...frames["frame1"]} className={cls(frames,"frame1", `gap-3 flex-col items-center shrink-0 overflow-hidden relative border shadow-[0px_4px_4px_rgba(0,0,0,0.05000000074505806)] bg-white opacity-100 pt-[25px] pb-[17px] px-[21px] rounded-xl border-[#ebebeb] flex`)}>
    <Div {...frames["frame7"]} className={cls(frames,"frame7", `gap-2 flex-col items-center shrink-0 self-stretch object-cover relative opacity-100 p-0 flex`)}>
      <Span {...frames["cuteDogPictureGenerator"]} className={cls(frames,"cuteDogPictureGenerator", `font-['Inter'] text-lg font-extrabold text-[#2f3136] text-left w-[271px] relative`)}>Cute Dog Picture Generator</Span>
    </Div>
    <Span {...frames["theServiceAllowsYouToGenerateACuteDogPictureAndDownloadIt"]} className={cls(frames,"theServiceAllowsYouToGenerateACuteDogPictureAndDownloadIt", `font-['Inter'] text-sm font-medium text-[#40454d] text-center w-[283px] relative`)}>The service allows you to generate a <Span className="font-bold">cute</Span> dog picture and download it!</Span>
    <Div {...frames["frame6"]} className={cls(frames,"frame6", `gap-[15px] flex-col items-stretch shrink-0 self-stretch object-cover relative opacity-100 p-0 flex`)}>
      <Div {...frames["dogImageContainer"]} className={cls(frames,"dogImageContainer", `gap-2.5 flex-col items-stretch shrink-0 overflow-hidden relative bg-[#e9ecf1] opacity-100 px-[117px] py-[27px] rounded-md flex`)}>
        <Div {...frames["content"]} className={cls(frames,"content", `gap-1.5 flex-col justify-center items-center shrink-0 relative opacity-100 p-0 flex`)}>
          <svg {...frames["icon"]} className={cls(frames,"icon", ``)} width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_5_28)">
              <path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" fill="#DDE0E6" stroke="#949EAE" strokeWidth={2} strokeDasharray="4 5" />
              <path d="M28 18.344C28 15.564 24.846 13.358 21 14C15.354 14.94 12.774 26.012 13 28C13.16 29.406 16.45 31.444 20.312 30C22.834 29.056 24.232 27.1 25 25M36.534 18.344C36.534 15.564 39.688 13.358 43.534 14C49.18 14.94 51.76 26.012 51.534 28C51.374 29.406 48.084 31.444 44.222 30C41.7 29.056 40.512 27.1 39.744 25M24 36V37M40 36V37M30.5 40.5H33.5L32 42L30.5 40.5Z" stroke="#949EAE" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16.84 30.494C16.2803 32.6554 15.998 34.8793 16 37.112C16 45.456 23.164 50 32 50C40.836 50 48 45.456 48 37.112C48 34.99 47.676 32.712 47.014 30.494M28.528 18.33C29.6716 18.1053 30.8346 17.9948 32 18C33.56 18 35 18.216 36.322 18.612" stroke="#949EAE" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_5_28">
                <rect width={64} height={64} fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Span {...frames["clickToGenerate"]} className={cls(frames,"clickToGenerate", `font-['Inter'] text-xs font-medium text-[#949eae] text-left relative`)}>click to generate</Span>
        </Div>
      </Div>
      <Div {...frames["frame5"]} className={cls(frames,"frame5", `gap-[30px] flex-row justify-center items-center shrink-0 self-stretch object-cover relative opacity-100 p-0 flex`)}>
        <Button frames={combine({"button":{"className":"downloadButton shrink-0 flex"},"clickMe":{"content":"Download Image"}}, frames["downloadButton"])} />
      </Div>
    </Div>
  </Div>
  <BadgeLiveDesign frames={combine({"badgeLiveDesign":{"as":"a","href":"https://livedesign.app","className":"shrink-0 absolute right-[27px] bottom-[17px] flex"},"madeOn":{"className":"oklm"}}, frames["badgeLiveDesign"])} />
</Div>
    );
}
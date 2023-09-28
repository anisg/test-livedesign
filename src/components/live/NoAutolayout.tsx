import React from 'react';

export function NoAutolayout(props){
  return (
      <div className="noAutolayout gap-3 flex-col items-center overflow-hidden border shadow-[0px_4px_4px_rgba(0,0,0,0.05)] bg-white opacity-100 px-[21px] py-[17px] rounded-xl border-[#ebebeb] flex">
  <div className="frame7 gap-2 flex-col w-[326px] items-center opacity-100 p-0 flex">
    <span className="cuteDogPictureGenerator2 font-['Inter'] text-lg font-extrabold text-[#2f3136] text-left w-[271px]">Cute Dog Picture Generator 2</span>
  </div>
  <span className="theServiceAllowsYouToGenerateACuteDogPictureAndDownloadIt2 font-['Inter'] text-sm font-medium text-[#40454d] text-center w-[283px]">The service allows you to generate a <span className="font-bold">cute</span> dog picture and download it! 2</span>
  <div className="frame6 gap-[15px] flex-col w-[326px] items-end opacity-100 p-0 flex">
    <div className="dogImageContainer gap-2.5 flex-col items-end overflow-hidden bg-[#e9ecf1] opacity-100 px-[117px] py-[27px] rounded-md flex">
      <div className="content gap-1.5 flex-col justify-center items-center opacity-100 p-0 flex">
        <svg className="icon" width={64} height={64} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_0_12)">
            <path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" fill="#DDE0E6" stroke="#949EAE" strokeWidth={2} strokeDasharray="4 5" />
            <path d="M28 18.344C28 15.564 24.846 13.358 21 14C15.354 14.94 12.774 26.012 13 28C13.16 29.406 16.45 31.444 20.312 30C22.834 29.056 24.232 27.1 25 25M36.534 18.344C36.534 15.564 39.688 13.358 43.534 14C49.18 14.94 51.76 26.012 51.534 28C51.374 29.406 48.084 31.444 44.222 30C41.7 29.056 40.512 27.1 39.744 25M24 36V37M40 36V37M30.5 40.5H33.5L32 42L30.5 40.5Z" stroke="#949EAE" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.84 30.494C16.2803 32.6554 15.998 34.8793 16 37.112C16 45.456 23.164 50 32 50C40.836 50 48 45.456 48 37.112C48 34.99 47.676 32.712 47.014 30.494M28.528 18.33C29.6716 18.1053 30.8346 17.9948 32 18C33.56 18 35 18.216 36.322 18.612" stroke="#949EAE" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_0_12">
              <rect width={64} height={64} fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="clickToGenerate font-['Inter'] text-xs font-medium text-[#949eae] text-left tracking-[-0.02rem]">click to generate</span>
      </div>
    </div>
    <div className="frame5 gap-[30px] flex-row justify-center items-center w-full opacity-100 p-0 flex">
      <div className="downloadButton gap-0 flex-col items-start border rounded bg-[#2758ce] opacity-100 px-3 py-1.5 border-[#2758ce] flex">
        <span className="title font-['Inter'] text-lg font-semibold text-white text-left tracking-[-0.01rem]">Download Image</span>
      </div>
    </div>
  </div>
</div>
  );
}
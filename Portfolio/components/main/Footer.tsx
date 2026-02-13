import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        {/*<p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">
                                Youtube
                            </span>
                        </p>
                       
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">
                                Discord
                            </span>
                        </p>*/}
                         <a
                            href="https://github.com/karans7104"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white"
                         >
                           <RxGithubLogo />
                           <span className="text-[15px] ml-[6px]">Github</span>
                         </a>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                     {/*   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">
                                Instagram
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">
                                Twitter
                            </span>
                        </p>*/}
                        <a
                         href="https://www.linkedin.com/in/karan-sonawane1917"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white"
                       >
                         <RxLinkedinLogo />
                         <span className="text-[15px] ml-[6px]">Linkedin</span>
                       </a>

                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                       { /*<p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                Become Sponsor
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">
                                Learning about me
                            </span>
                        </p>*/}
                        <a
                          href="mailto:karans7104@gmail.com"
                          className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white"
                        >
                          <span className="text-[15px] ml-[6px]">
                            karans7104@gmail.com
                          </span>
                        </a>

                    </div>
                </div>
                <div className="mb-[20px] text-[15px] text-center">
                  &copy; {new Date().getFullYear()} Karan Sonawane. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
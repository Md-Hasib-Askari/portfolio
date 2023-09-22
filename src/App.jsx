import { useState } from 'react'

import {FaFacebook} from 'react-icons/fa';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa6";
import {RiHandbagFill} from "react-icons/ri";
import {HiMail} from "react-icons/hi";

import vertical_img from './assets/vertical_img.png';
import profile_img from './assets/logo.png'

function App() {
  const [symbol, setSymbol] = useState('🌙');
  const [css, setCss] = useState({
      text: 'text-gray-900',
      background: 'bg-white'
  })
    const darkMode = (e) => {
        if (e.target.value === '🌙') {
            setSymbol('☀️');
            setCss({
               text:  'text-gray-100',
                background: 'bg-gray-900'
            });
        }
        else if (e.target.value === '☀️') {
            setSymbol('🌙');
            setCss({
                text: 'text-gray-900',
                background: 'bg-white'
            });
        }
    };

  return (
      <div className={`max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ${css.text}`}>
          {/* Main Column */}
          <div className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl ${css.background} opacity-75 mx-6 lg:mx-0`}>
              <div className="p-4 md:p-12 text-center lg:text-left">
                  {/* <!-- Image for mobile view--> */}
                  <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center border-b-4 border-r-4 border-indigo-500"
                       style={{backgroundImage: `url(${profile_img})`}}></div>
                  <h1 className="text-3xl font-bold pt-8 lg:pt-0">Md Hasib Askari</h1>
                  <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                  <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                      <RiHandbagFill className="mr-4 text-green-700" size={20}/>
                      Full Stack Developer
                  </p>
                  <p className="pt-2 text-gray-600 text-sm lg:text-sm flex items-center justify-center lg:justify-start">
                      <HiMail className="mr-4 text-green-700" size={20} />
                      <a href="mailto:mdhsbaskari@gmail.com">mdhsbaskari@gmail.com</a>
                  </p>
                  <p className="pt-8 text-sm">Striving for the dreams to achieve something exceptional.</p>
                  <div className="pt-12 pb-8">
                      <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                          Get In Touch
                      </button>
                  </div>
                  <div
                      className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                      <a className="link" href="https://facebook.com/askarihasib" target="_blank" data-tippy-content="@facebook_handle">
                          <FaFacebook size={35} className="text-gray-600"/>
                      </a>
                      <a className="link" href="https://twitter.com/DevHasib" target="_blank" data-tippy-content="@twitter_handle">
                          <FaTwitter size={35} className="text-gray-600" />
                      </a>
                      <a className="link" href="https://github.com/Md-Hasib-Askari" target="_blank" data-tippy-content="@github_handle">
                          <FaGithub size={35} className="text-gray-600" />
                      </a>
                      <a className="link" href="https://www.linkedin.com/in/mdhasibaskari" target="_blank" data-tippy-content="@linkedin_handle">
                          <FaLinkedin size={35} className="text-gray-600" />
                      </a>
                      <a className="link" href="#" target="_blank" data-tippy-content="@instagram_handle">
                          <FaInstagram size={35} className="text-gray-600" />
                      </a>
                      <a className="link" href="#" target="_blank" data-tippy-content="@youtube_handle">
                          <FaYoutube size={35} className="text-gray-600" />
                      </a>
                  </div>
              </div>

          </div>
          {/* <!--Img Col--> */}
          <div className="w-full lg:w-2/5">
              {/* <!-- Big profile image for side bar (desktop) --> */}
              <img src={vertical_img}
                   className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block border-l-4 border-indigo-500"  alt="Anime Coding"/>

          </div>
          <div className="absolute top-0 right-0 h-12 w-18 p-4">
              <button className="js-change-theme focus:outline-none btn-md" onClick={darkMode} value={symbol}>{symbol}</button>
          </div>
      </div>
  )
}

export default App;

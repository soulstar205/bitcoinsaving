/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import headImage from "../assets/img/header-image.jpg"
import presentation from "../assets/img/presentation.png"
import hold from "../assets/img/hold.jpg"
import business from "../assets/img/business-plan.png"

import returnInvest from "../assets/img//returnInvest.png"
import money from "../assets/img/money-bag.png"
import office from "../assets/img/office.png"
import cto from "../assets/img/cto.jpg"
import hr from "../assets/img/hr.jpg"
import engineer from "../assets/img/engineer.jpg"
import data from "../assets/img/data.jpg"
import executive from "../assets/img/executive.jpg"
import ceo from "../assets/img/ceo.jpg"
import { Card } from "../assets/utils/planCard";
import { Gold } from "../assets/utils/planCard";
import { Silver } from "../assets/utils/planCard";
import { Testimonials } from "../assets/testimonials/test";
import { Trusted } from "../assets/testimonials/trusted";


 
export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Bitcoin Savings: Fast & Secure High Yielding Investment Plans.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              A wide selection of investment plans to help build a diversified portfolio. 
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-600"
                  target="_blank"
                > 
                Dedicated financial consultant to help reach your own specific goals
                </a>
                . Powerful trading tools,resources and support.
              </p>
              <div className="mt-12">
                <Link to='/auth/register'>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started 
                </a>
                </Link>
               
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={headImage}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    A.I Designed to find the surest trading opportunities.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We saved no cost in hiring a team of expert programmers and data analysts.
                    Data is power, and our experts have decaded of experience with success in trading, and investments. 
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        World Coverage
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Providing services in 99% countries
                          around all the globe.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Strong Security
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Protection against DDoS attacks,
                      full data encryption
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Payment Options</h6>
                      <p className="mb-4 text-blueGray-500">
                      Popular methods: Fast easy blockchain technology transfer
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        High Liquidity.
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Fast access to high liquidity orderbook
                          for top currency pairs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20" id="about">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal" >
                About Us
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                For decades, the dominant players in forex have been the privileged, in-the-know few.
                But our platform is disrupting
                the entire industry and equipping prospective investors
                  with the opportunity to actualize their investment dreams
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Grow a trade account and make internet work for you, relieve you from 9-5 jobs 
              the foriegn exchange market work for you 24/7 with our minimalist platform. 
              We trade and ensure the coverage of transactions profitably in Forex, Commodities(stocks), 
              and Indices etc. We manage losses and trading processes 
              to meet up with the average required monthly quota ROI of your 
              desired package and facilitation of the worldwide maket.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our elite trade development team and account managers are handpicked from the 
              best and have over 7 years of experience, and have traded for several of the most reputable brokers. 
              Join over 4000 investors from all over the world satisfied with our services.
              </p> 
                 
              <a
                href="#"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                There's more...{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={returnInvest}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={business}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={hold}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={office}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={money}
                  className="w-full align-middle rounded absolute shadow-lg max-w-200-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={presentation}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-23 mx-auto p-2 bg-white"
                        src={ceo}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                        CEO 
                      </p>
                      <p className="text-lg text-white mt-1">
                        Mathew Walsh
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-23 mx-auto p-2 "
                        src={cto}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                        C.T.O
                      </p>
                      <p className="text-lg text-white mt-1 font-light">
                        Dennis Hardman
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-23 mx-auto p-2 "
                        src={data}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                        Data Analyst
                      </p>
                      <p className="text-lg text-white mt-1 font-light">
                        Andrew Edwardo
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-23 mx-auto p-2"
                        src={hr}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                      CFO
                      </p>
                      <p className="text-lg text-white mt-1 font-light">
                        Sarah Wilderman
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-23 mx-auto p-2 "
                        src={executive}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                      Marteting Manager
                      </p>
                      <p className="text-lg text-white mt-1 font-light">
                        Linda Lo
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w23 mx-auto p-2 "
                        src={engineer}
                      />
                      <p className="text-lg text-white mt-2 font-semibold">
                        Data Analyst
                      </p>
                      <p className="text-lg text-white mt-1 font-light">
                        Samantha Addams
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
               Our Team
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              At our bitcoin investment company, our team is composed of experienced professionals who have a deep understanding of 
              the cryptocurrency market. Our team members have years of experience in finance, technology, and investing, 
              which allows us to provide our clients with the highest level of service and returns.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our CEO has a background in investment banking and has been involved in the cryptocurrency market since its early days.
               He has a deep understanding of the technology and is able to identify the most promising projects. He has led our 
               company to become one of the top-performing bitcoin investment firms in the industry.
              </p>

              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our CTO is a blockchain expert with a background in computer science. He has been
               involved in the development of several blockchain projects and has a deep
               understanding of the technology behind bitcoin. He is responsible for the security 
               and integrity of our clients' investments.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our CFO has a background in accounting and finance. He is responsible for the financial performance of the company and ensures 
              that our clients' investments are being managed in the most efficient and profitable way.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Our investment team is composed of experienced traders who have a deep understanding of 
              the cryptocurrency market. They use advanced trading strategies and tools to maximize returns for our clients. 
              They are constantly researching and analyzing the market to identify the best investment opportunities.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Overall, our team is composed of experts who have a deep understanding of the cryptocurrency
               market and are committed to providing our clients with the best returns possible. With our experience and 
              expertise, you can trust that your investments are in good hands.
              </p>
              
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                There's more{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

       
        <div className="justify-center text-center flex flex-wrap mt-24" id="plans">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Our Plans</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
            Invest In Our Various Plans That'll Yield Quick Passive Income 
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600" >
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Basic Plan
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <Card/>
              
                    </div>
        
                </div>

                <div className="w-full lg:w-4/12 px-4">  
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Silver Plan
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <Silver/>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Premium
                  </h5>
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                  <Gold/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
        <div className="flex flex-column justify-center" style={{flexDirection: "column", justifyContent: "center", width: "100%", alignItems: "center"}}>
            <h2 className="font-semibold text-4xl text-white">Testimonials</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-white ">
            Our clients 
            </p>
          </div>
         <Testimonials/>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12 mb-9">
              <h3 className="font-semibold text-3xl">
                Crypto Traders And Investors Trust Us!
              </h3>
             
              <Trusted/>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

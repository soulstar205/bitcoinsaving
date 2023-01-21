import React from 'react'
import rate1 from '../img/rate1.png'
import rate2 from '../img/rate2.png'
import rate6 from '../img/rate6.png'
import rate4 from '../img/rate4.png'
import rate5 from '../img/rate5.png'


export const Trusted = () => {
    
    const data = [
        {
            id: 1,
             pic : rate1,
             rate: "9.5"
        }, 
        {
            id: 2,
              pic : rate2,
              rate: "9.0"

        }, 
        {
            id: 3,
              pic : rate6,
              rate: "8.7"
        }, 
        {
            id: 4,
             pic : rate4,
             rate: "9.3"

        }, 
        {
            id: 5,
            pic : rate5,
            rate: "8.5"
        }, 
    ]
    return(
        <div className="flex flex-wrap items-center justify-center mt-9">
            {
                data.map((post)=>{
                    return(
                    <div className="flex columns bg-white justify-center rounded-lg mb-5" id={post.id} style={{width: "200px", height: "fit-content", marginRight: "8px"}}>
                        <a
                                href=""
                                target="_blank"
                            >
                                <div className="bg-white-600 shadow-lg rounded-lg text-center p-3">
                                <img
                                    alt="..."
                                    className="shadow-md rounded-lg w-20 h-20 mx-auto p-1 bg-white"
                                    src={post.pic}
                                />
                                <p className="text-lg text-sky-900 mt-2 font-bold w-full ">
                                    {post.rate}
                                </p>
                                
                                </div>
                            </a>
                    </div>
                    )
                })
            }
        </div>
    )
}
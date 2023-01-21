import React from 'react'
import client1 from '../img/client1.jpg'
import client2 from '../img/client2.jpg'
import client3 from '../img/client3.jpg'
import client4 from '../img/client4.jpg'
import client5 from '../img/client5.jpg'


export const Testimonials = () => {
    
    const data = [
        {
            id: 1,
            name: "Hannah Timothy",
            text: "Investing with this firm has been a great decision for me. Their team is knowledgeable and always available to answer any questions. I have seen a significant return on my investment.",
            pic : client1
        }, 
        {
            id: 2,
            name: "Rachel Lee",
            text: "I was new to the world of cryptocurrency, but this firm made the process easy and stress-free. Their platform is user-friendly and their customer service is top-notch. I highly recommend them",
            pic : client2
        }, 
        {
            id: 3,
            name: "Michael Brown",
            text: "I have been very impressed with the performance of this bitcoin investment firm. They have a great track record and their team is always available to provide guidance and support.",
            pic : client3
        }, 
        {
            id: 4,
            name: "Emily Davis",
            text: "I have been with this investment firm for several months and have seen consistent growth in my portfolio. I trust their expertise and am confident in their ability to navigate the cryptocurrency market.",
            pic : client4
        }, 
        {
            id: 5,
            name: "Angela Garcia",
            text: "I have been very pleased with my experience with this bitcoin investment firm. They have a professional and transparent approach and their returns have exceeded my expectations.",
            pic : client5
        }, 
    ]
    return(
        <div className="flex flex-wrap items-center justify-center">
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
                                    className="shadow-md rounded-full w-20 h-20 mx-auto p-2 bg-white"
                                    src={post.pic}
                                />
                                <p className="text-lg text-sky-900 mt-2 font-semibold w-full ">
                                    {post.name}
                                </p>
                                <p className="text-m text-sky-900 mt-1 w-full">
                                    {post.text}
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
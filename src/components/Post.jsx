import React from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { PiArrowBendDownRightFill } from 'react-icons/pi'

const Post = () => {
  return (
    <div className="w-full p-32">
      <div className="w-full border bg-white rounded shadow-lg">
        <div className="flex items-center p-2 gap-2">
          <img
            src="https://applyzones.com/uploads/logos/az-the-university-of-greenwich-logo.png"
            alt="User"
            className="w-10 h-10 border rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-medium">University of Greenwich</span>
            <span className="text-slate-400 text-[10px]">3 Days ago</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-700 mb-[30px]">
            <p className="mb-6"> Dear Students! </p>
            Now, Canada is the third country in the world to authorize a
            COVID-19 vaccine. Approval for COVID-19 vaccine given on December 6,
            2020 Additionally Canada has given the green light to COVID-19
            vaccine: Also, as per the Canadian government, "Health Canada
            authorized the Pfizer BioTech COVID-19 mRNA vaccine (Toxinameran or
            BNT16262) for use for the COVID-19 pandemic
          </p>
          <p className="mb-2">
            -Contact Edumpus FREE Counselling & make your Overseas Careers dream
            a reality
          </p>
          <p>-Students can also DM us for further details</p>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="University of Greenwich"
            className="w-full h-[670px] object-cover"
          />
        </div>
        {/* Add more comments */}
        <div className="border-t pt-4 space-y-2">
          {/* Comment components */}
        </div>
        <div className="p-4 w-full flex gap-2">
          <img
            src="https://applyzones.com/uploads/logos/az-the-university-of-greenwich-logo.png"
            alt="User"
            className="w-10 h-10 border rounded-full"
          />
          <div className="border w-full pl-2 pr-2 rounded-lg flex gap-2">
            <div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full p-2 outline-none"
              />
              <button className=" mb-1 mt-2 hover:bg-blue-500 hover:text-white text-slate-400 py-2 px-2 rounded">
                Post
              </button>
            </div>
          </div>
        </div>
        <p className='ml-2 mt-2 text-slate-400 font-bold'>View 5 more comments</p>
        <div className="flex flex-col gap-4 p-2 pt-4 ">
         <div>
         <img
            src="https://images.unsplash.com/photo-1580067644090-a03da9d1e360?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="User"
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="bg-slate-100  rounded-xl">
            <div className="flex justify-between items-center p-2">
              <div className='flex items-center gap-3'><span className="font-semibold">Roshan Karthik </span>
              <span className="text-slate-400 text-[10px]">1 week ago</span></div>
              <MdOutlineMoreHoriz fill='gray'/>
            </div>
            <p className="p-4 text-gray-700">
              Please apply for M.Sc Accounting & Finance with Placement at
              Anglia Ruskin University for the September 2021 intake
            </p>
          </div>
          <div className='flex gap-2 items-center text-slate-400 text-[10px]+'>
          <PiArrowBendDownRightFill fill='gray'/><span>3 Replies</span>&#183;<button className='flex'>  Reply</button>
          </div>
         </div>

          
        </div>
      </div>
    </div>
  )
}

export default Post

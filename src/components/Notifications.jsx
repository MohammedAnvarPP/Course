import React from 'react'

const Notifications = () => {
  return (
    <div className="p-[90px]  bg-[#f9f8fd]">
      <h1 className="ml-5 font-bold text-[30px] p-2 mb-3">Notifications</h1>
      <div className='flex flex-col shadow-2xl'>
        <div className="flex gap-2 bg-blue-100 p-3">
          <div className="">
            <img
              src="../src/assets/edumpus.jpg"
              className="border-[2px] rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Edumpus </p>
              <p> commented on a post</p>
            </div>
            <p className="text-gray-400  text-[13px]">Now</p>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-100 p-3">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              className="border-[2px] object-cover rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Haris Webdesign </p>
              <p>applied new syllabus course as sample text like this ui</p>
            </div>
            <p className="text-gray-400  text-[13px]">3 min ago</p>
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1495716868937-273203d5bb0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              className="border-[2px] object-cover rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Jennifer Lopez</p>
              <p>applied scince and technology degree courses</p>
            </div>
            <p className="text-gray-400  text-[13px]">1 hrs ago</p>
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <div className="">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              className="border-[2px] object-cover rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Molly Morgan </p>
              <p> replied your comment</p>
            </div>
            <p className="text-gray-400  text-[13px]">1 day ago</p>
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <div className="">
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              className="border-[2px] object-cover rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">John Due </p>
              <p> applied scince and technology degree courses</p>
            </div>
            <p className="text-gray-400  text-[13px]">1 week ago</p>
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80"
              className="border-[2px] object-cover rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Danny Miles </p>
              <p>commented on your photo</p>
            </div>
            <p className="text-gray-400  text-[13px]">1 month ago</p>
          </div>
        </div>
        <div className="flex gap-2 p-3">
          <div className="">
            <img
              src="../src/assets/edumpus.jpg"
              className="border-[2px] rounded-full w-10 h-10"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <p className="font-bold">Edumpus  </p>
              <p> Approved your blog post</p>
            </div>
            <p className="text-gray-400  text-[13px]">14 Jan 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications

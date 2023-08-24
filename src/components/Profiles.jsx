import { useEffect, useState } from 'react'
import { MdCall } from 'react-icons/md'
import { RiMailOpenFill } from 'react-icons/ri'
import "./component.css"
import { IoMdCheckmark, IoMdCheckmarkCircle, IoMdSchool } from 'react-icons/io'
import CourseCreationForm from './CourseCreationForm'

const Profiles = () => {
  const studentDetails = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
      name: 'Charlotte Rosalie',
      eduId: 'EDU-656564552',
      status: 'Add Your Rest Document',
      logo: 'https://play-lh.googleusercontent.com/nOhKWRVGTXxFJU4xT6iebs36w-I7flAv84B3ChysXYs9xzrPH1dko7rNUYuJMTNls9RR',
      personalDetails: {
        pId: 0,
        phone: '+91 9876543210',
        email: 'myemail@gmail.com',
        education: 'MSc Bussiness with International Management',
      },
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

      name: 'Rosario',
      eduId: 'EDU-656564552',
      status: 'Applied',
      personalDetails: {
        pId: 1,
        phone: '+91 9876543210',
        email: 'myemail@gmail.com',
        education: 'MSc Bussiness with International Management',
      },
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',

      name: 'Benchamin',
      eduId: 'EDU-656564552',
      status: 'Verified',
      logo: 'https://play-lh.googleusercontent.com/nOhKWRVGTXxFJU4xT6iebs36w-I7flAv84B3ChysXYs9xzrPH1dko7rNUYuJMTNls9RR',
      personalDetails: {
        pId: 2,
        phone: '+91 9876543210',
        email: 'myemail@gmail.com',
        education: 'MSc Bussiness with International Management',
      },
    },
  ]

  const [activeIndex, setActiveIndex] = useState(null);
  const handleBrickClick = (index) => {
    setActiveIndex(index);
  }
  return (
    <div className="">
      <div
        className="flex gap-6 p-9 w-full bg-[#f9f8fd] justify-center profileBrickMainConatiner flex-wrap"
      >
        {studentDetails.map((details,index) => (
          <div
            className="w-[300px] bg-[#fff] rounded-lg border-[1px] p-3 profileBrick relative"
            key={details.id}
            onClick={() => handleBrickClick(index)}
          >
            <div className="border-b-[1px] flex items-center gap-4 pt-2 pb-2">
              <img
                src={details.image}
                alt=""
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
              <div>
                <p>{details.name}</p>
                <p>{details.eduId}</p>
              </div>
              {/* {active && <IoMdCheckmark />} */}
            </div>
            <div className="text-[#636a6e] p-2">
              <div className="flex items-center gap-3 mb-2">
                <MdCall /> <p>{details.personalDetails.phone}</p>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <RiMailOpenFill /> <p>{details.personalDetails.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <IoMdSchool className="w-7 h-7" />{' '}
                <p>{details.personalDetails.education}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="rounded bg-[#d9f4fd] text-[#2e8bb6] font-bold p-2">
                {details.status}
              </p>
              {details.logo ? (
                <img
                  src={details.logo}
                  className="border-[2px] rounded-full w-10 h-10"
                  alt=""
                />
              ) : (
                ''
              )}
              {activeIndex === index && (
            <div className="absolute top-2 right-2 text-green-500">
              <IoMdCheckmarkCircle className="h-6 w-6"/>
            </div>
          )}
            </div>
            
          </div>
        ))}
      </div>
      <CourseCreationForm />
    </div>
  )
}

export default Profiles

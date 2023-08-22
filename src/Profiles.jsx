import { useEffect, useState } from 'react'

const Profiles = () => {
  const studentDetails = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',
      name: 'Charlotte Rosalie',
      eduId: 'EDU-656564552',
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
        'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',

      name: 'Rosario',
      eduId: 'EDU-656564552',
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
        'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80',

      name: 'Benchamin',
      eduId: 'EDU-656564552',
      personalDetails: {
        pId: 2,
        phone: '+91 9876543210',
        email: 'myemail@gmail.com',
        education: 'MSc Bussiness with International Management',
      },
    },
  ]

  const [students, setStudents] = useState([])
  console.log(studentDetails)

  return (
    <div>
      <h1 className="text-[30px] font-bold">Students</h1>
      {studentDetails.map((details) => (
        <div className="w-[300px] bg-purple-500" key={details.id}>
          <div className="border-b-[1px] flex items-center gap-4">
            <img
              src={details.image}
              alt=""
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
            <div>
              <p>{details.name}</p>
              <p>{details.eduId}</p>
            </div>
          </div>
          <div className='w-full h-16 bg-red-950'>
            {studentDetails?.personalDetails?.map((personal) => (
              <div key={personal.pId}>
                <p>{personal.phone}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Profiles

import React from 'react'
import { Formik, Form, FieldArray } from 'formik'
import { FaFileAlt, FaFileContract, FaSave } from 'react-icons/fa'
import './component.css'
import { IoMdClose } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'
// import {db} from "../firebase"

//   const validationSchema = Yup.object().shape({
//     admission: Yup.string().required('Required'),
//     service: Yup.string().required('Required'),
//     intakes: Yup.array().of(Yup.string().required('Required')),
//     courseTags: Yup.array().of(Yup.string()),
//   })

const CourseCreationForm = () => {

  const initialValues = {
    admission: '',
    service: '',
    intakes: [{ intake: '', duration: '' }],
    courseTags: [{ tag: '', description: '' }],
  }

  const handleSubmit = (values) => {
    console.log(values);
    // db.collection("courseCreation").add({
    //   id:values.id,
    //   name:values.name,
    //   eduId:values.eduId,
    //   status:values.status,
    //   personId:values.personalDetails.pId,
    //   phone:values.personalDetails.phone,
    //   email:values.personalDetails.email,
    //   education:values.personalDetails.education,
    // }).then(()=>{
    //   alert("Message have been Submitted")
    // }).catch((error)=>{
    //   alert(error.message);
    // });
    // values=initialValues;
  }
  return (
    <div>
      <div className="courseCreationHeader flex justify-between p-4 border-b-[1px]">
        <div className="flex gap-2 items-center">
          <h1 className="text-[30px]">Course Creation</h1>
          <p className="step flex justify-center bg-slate-400 items-center rounded-lg">
            step 2 of 4
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="button flex gap-1 items-center text-white"
            onClick={() => {
              alert('No action added')
            }}
          >
            <FaSave fill="white" />
            Save As Draft
          </button>
          <div
            className="close"
            onClick={() => {
              alert('No action added')
            }}
          >
            <IoMdClose className='close'/>
          </div>
        </div>
      </div>
      <div className="pt-10 ">
        <div className="criteria flex flex-row items-center gap-[8%] text-center justify-center">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-green-200 w-[50px] h-[50px] flex items-center justify-center">
              <FaFileAlt fill="green" />
            </div>
            <p className="text-[12px]">Basic Information</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-blue-300 w-[50px] h-[50px] flex items-center justify-center">
              <FaFileContract fill="#000a40" />
            </div>
            <p className="text-[12px]">Additional Information</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full  bg-slate-200 w-[50px] h-[50px] flex items-center justify-center">
              <FaFileAlt fill="gray" />
            </div>
            <p className="text-[12px]">Eligibily & Syllabus</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-slate-200 w-[50px] h-[50px] flex items-center justify-center">
              <FaFileAlt fill="gray" />
            </div>
            <p className="text-[12px]">Fee & Scholarship</p>
          </div>
        </div>
      </div>
      <div className="pt-3 p-[30px] addtionalSection">
        <h2 className="text-[30px]">Additional Infromation</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <Form className="p-6 space-y-6">
              <div className='formAdditional'>
              <div className="flex flex-col gap-8">
                <div className="flex w-full gap-3">
                  <div className="w-[50%]">
                    <label>
                      <div className="flex">
                        Admission <p className="text-[#ff3838]">*</p>
                      </div>
                      <select
                        name="admission"
                        required
                        value={values.admission}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="admission1">Admission 1</option>
                        <option value="admission2">Admission 2</option>
                        <option value="admission3">Admission 3</option>
                        <option value="admission4">Admission 4</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-[50%]">
                    <label className="block">
                      <div className="flex">
                        Service <p className="text-[#ff3838]">*</p>
                      </div>
                      <select
                        name="service"
                        required
                        value={values.service}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                        <option value="service4">Service 4</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <div className="w-[50%]">
                    <label className="block">
                      Course Affliation:
                      <select
                        name="affliation"
                        value={values.affliation}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="affliation1">Affliation 1</option>
                        <option value="affliation2">Affliation 2</option>
                        <option value="affliation3">Affliation 3</option>
                        <option value="affliation4">Affliation 4</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-[50%]">
                    <label className="block">
                      Entrance Required
                      <select
                        name="entrance"
                        value={values.entrance}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="entrance1">Entrance 1</option>
                        <option value="entrance2">Entrance 2</option>
                        <option value="entrance3">Entrance 3</option>
                        <option value="entrance4">Entrance 4</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="flex w-full gap-3">
                  <div className="w-[50%]">
                    <label className="block">
                      <div className="flex">
                        Documents Required <p className="text-[#ff3838]">*</p>
                      </div>
                      <select
                        name="documents"
                        required
                        value={values.documents}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="documents1">Documents 1</option>
                        <option value="documents2">Documents 2</option>
                        <option value="documents3">Documents 3</option>
                        <option value="documents4">Documents 4</option>
                      </select>
                    </label>
                  </div>
                  <div className="w-[50%]">
                    <label className="block">
                      <div className="flex">
                        Specialization<p className="text-[#ff3838]">*</p>
                      </div>
                      <select
                        name="specialization"
                        required
                        value={values.specialization}
                        onChange={handleChange}
                        className="mt-1 p-2 border rounded w-full"
                      >
                        <option value="">Select an option</option>
                        <option value="specialization1">
                          Specialization 1
                        </option>
                        <option value="specialization2">
                          Specialization 2
                        </option>
                        <option value="specialization3">
                          Specialization 3
                        </option>
                        <option value="specialization4">
                          Specialization 4
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="space-y-4 w-full">
                <h2 className="text-lg font-semibold">Intakes</h2>
                <FieldArray name="intakes">
                  {({ push }) => (
                    <>
                      {values.intakes.map((intake, index) => (
                        <div key={index} className="flex gap-3 w-full">
                          <label className="block w-[50%]">
                            <div className="flex">
                              Intake<p className="text-[#ff3838]">*</p>
                            </div>
                            <select
                              name={`intakes.${index}.intake`}
                              required
                              value={intake.intake}
                              onChange={handleChange}
                              className="mt-1 p-2 border rounded w-full"
                            >
                              <option value="">Select an option</option>
                              <option value="intake1">Intake 1</option>
                              <option value="intake">Intake 2</option>
                            </select>
                          </label>
                          <label className="block  w-[50%]">
                            <div className="flex">
                              Duration<p className="text-[#ff3838]">*</p>
                            </div>
                            <select
                              name={`intakes.${index}.duration`}
                              required
                              value={intake.duration}
                              onChange={handleChange}
                              className="mt-1 p-2 border rounded w-full"
                            >
                              <option value="">Select an option</option>
                              <option value="duration1">1 Year</option>
                              <option value="duration2">2 Year</option>
                              <option value="duration3">3 Year</option>
                            </select>
                          </label>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => push({ intake: '', duration: '' })}
                        className="font-bold bg-[#d9f4fd] text-[#2e8bb6] py-2 px-4 rounded hover:bg-[#429ab8] hover:text-white"
                      >
                        <div className="flex gap-2 items-center">
                          <FiPlus /> Add Row
                        </div>
                      </button>
                    </>
                  )}
                </FieldArray>
              </div>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Course Tag</h2>
                <FieldArray name="courseTags">
                  {({ push }) => (
                    <>
                      {values.courseTags.map((courseTag, index) => (
                        <div key={index} className="flex gap-3 w-full">
                          <label className="block w-[50%]">
                            Tag
                            <select
                              name={`courseTags.${index}.tag`}
                              value={courseTag.tag}
                              onChange={handleChange}
                              className="mt-1 p-2 border rounded w-full"
                            >
                              <option value="">Select an option</option>
                              <option value="tag1">Tag 1</option>
                              <option value="tag2">Tag 2</option>
                            </select>
                          </label>
                          <label className="block  w-[50%]">
                            Description
                            <select
                              name={`courseTags.${index}.description`}
                              value={courseTag.description}
                              onChange={handleChange}
                              className="mt-1 p-2 border rounded w-full"
                            >
                              <option value="">Select an option</option>
                              <option value="description1">Decription 1</option>
                              <option value="description2">
                                Description 2
                              </option>
                            </select>
                          </label>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => push({ tag: '', description: '' })}
                        className="font-bold bg-[#d9f4fd] text-[#2e8bb6] py-2 px-4 rounded hover:bg-[#429ab8] hover:text-white"
                      >
                        <div className="flex gap-2 items-center">
                          <FiPlus /> Add Row
                        </div>
                      </button>
                    </>
                  )}
                </FieldArray>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-green-500 w-[150px]  text-white py-2 px-4 rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default CourseCreationForm

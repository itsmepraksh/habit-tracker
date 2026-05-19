"use client"

import { useForm } from "react-hook-form"


const page = () => {
  const { register , handleSubmit , formState:{errors}} = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }
  return (
    <>
      <div className="p-4 border w-1/3">
        <h1>fill the data about tracker creation</h1>
        <form 
          onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col ">

          <label htmlFor="trackerName">tracker name</label>
          <input {...register("trackerName")} 
          className="border" id="trackerName" type="text" placeholder="eg. daily.." />

          <label htmlFor="trackerType">tracker type</label>
          <select {...register("trackerType")}
          id="trackerType"  className="border">
            <option value="" disabled selected >--select--</option>
            <option value="professional">professional</option>
            <option value="educational">educational</option>
            <option value="personal">personal</option>
          </select>

          <label htmlFor="taskLimit">No. of task</label>
          <input {...register("taskLimit")} type="number" placeholder="eg. 5" className="border" />

          <label htmlFor="timeLimit">No. of days</label>
          <input {...register("timeLimit")} type="number" placeholder="eg, 21" className="border"/>

          <button>submit</button>
        </form>

      </div>
    </>
  )
}

export default page
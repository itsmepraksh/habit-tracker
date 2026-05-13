"use client"

const page = () => {
  return (
    <>
      <div>
        <h1>fill the data about tracker creation</h1>
        <form>
          <label htmlFor="trackerName">tracker name</label>
          <input id="trackerName" type="text" placeholder="eg. daily.." />

          <label htmlFor="trackerType">tracker type</label>
          <select name="" id="trackerType">
            <option >--select--</option>
            <option value="professional">professional</option>
            <option value="educational">educational</option>
            <option value="personal">personal</option>
          </select>

          <label htmlFor="taskLimit">No. of task</label>
          <input type="number" placeholder="eg. 5" />

          <label htmlFor="timeLimit">No. of days</label>
          <input type="number" placeholder="eg, 21" />

          <button>submit</button>
        </form>

      </div>
    </>
  )
}

export default page
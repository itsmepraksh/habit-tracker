"use client";


export default function Home() {

  const onClickBtn = ()=>{
    console.log("its working")
    return 
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
         <h1>Create a habit tracker</h1>

         <button onClick={()=>onClickBtn} className="bg-yellow-500 text-black p-2">Create now</button>
      </main>
    </div>
  );
}

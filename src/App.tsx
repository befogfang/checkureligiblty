import './App.css'
import WebsiteGoal from './components/WebsiteGoal'
// import FilterBox from './components/FilterBox'
import TheGreatHeading from './components/TheGreatHeading'

import JobCard from './components/JobCard';
// Import the JSON file directly (Vite/Webpack handles this)
import jobData from './data/data.json'; 


function App() {

  return (
   <>
   <TheGreatHeading />
   <WebsiteGoal/>

<div className='flex flex-col  border gap-1.5 '>
    <div className='py-3 mx-auto'><p>Hi , You can add your email for get updates , we have planned whole bunch of features for you all on this site. <br />The reason you should enter your email so we let you know when we update something nice!</p></div>
    <form className='border mx-auto my-2'
  action="https://formspree.io/f/xovblwzz"
  method="POST"
>
  <label className='flex py-3.5 '>
    Your email:
    <input className='border rounded-3xl' type="email" name="email" />
  </label>
  <label  className='flex'>
    Any FeedBack / Troubel / Suggestion:
    <textarea className='border rounded-3xl' name="message"></textarea>
  </label >
  {/* <!-- your other form fields go here --> */}
  <button className='bg-green-400  rounded-2xl px-2 ' type="submit">Send</button>
</form>
</div>


        <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center">
            🇮🇳 50+ Major Government Job Roles
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Details from UPSC, SSC, IBPS, RRB, and State PSC Exams
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Job Card Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jobData.map((job) => (
            <JobCard key={job.SlNo} job={job} />
          ))}
        </div>
      </main>
    </div>


   </>
  )
}

export default App

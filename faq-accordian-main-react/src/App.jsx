
import starLogo from './assets/icon-star.svg'
import backgroudDesktop from './assets/background-pattern-desktop.svg'
import backgroudMobile from './assets/background-pattern-mobile.svg'
import './App.css'
import Accordian from './Accordian'

function App() {

  return (
    <>
      <main className=' min-h-screen flex items-center justify-center bg-light-pink'>
        <img src={backgroudDesktop} className='w-screen absolute top-0 left-0 right-0 bottom-0 h-[45%] object-cover hidden sm:block' />
        <img src={backgroudMobile} className='w-screen absolute top-0 left-0 right-0 bottom-0 h-[45%] object-cover block sm:hidden' />
        <div className="relative max-w-[450px] bg-white rounded-xl p-8 shadow-lg m-3 mt-1">
          <div className='flex justify-start items-center gap-2 pb-2'>
            <img src={starLogo} className='w-6' />
            <h2 className=' text-4xl font-bold'>
              FAQS
            </h2>
          </div>
          <Accordian
            header="What is Frontend Mentor, and how will it help me?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae doloremque eaque quod laudantium tempore quos rerum rem, veritatis est labore. Culpa, voluptas id consectetur reprehenderit molestias iusto aspernatur amet!"
          />
          <Accordian
            header="is Frontend Mentor Free?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae doloremque eaque quod laudantium tempore quos rerum rem, veritatis est labore. Culpa, voluptas id consectetur reprehenderit molestias iusto aspernatur amet!"
          />
          <Accordian
            header="Can i use Frontend Mentor in my PortFoloio?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae doloremque eaque quod laudantium tempore quos rerum rem, veritatis est labore. Culpa, voluptas id consectetur reprehenderit molestias iusto aspernatur amet!"
          />
          <Accordian
            header="How can i get Help if im stuck on a challenge?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere beatae doloremque eaque quod laudantium tempore quos rerum rem, veritatis est labore. Culpa, voluptas id consectetur reprehenderit molestias iusto aspernatur amet!"
          />



        </div>
      </main>
    </>
  )
}

export default App

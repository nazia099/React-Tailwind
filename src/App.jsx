
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='text-4xl font-bold text-primary pb-10 pt-5'>Tailwind</h1>
      <div className='  h-100 w-100 bg-primary rounded-2xl border border-blue-800 border-4 border-dashed hover:bg-blue-200 hover:w-150 transition-all duration-300 relative group'>
        <p className='p-6 relative z-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero optio, dolores consequuntur neque excepturi, suscipit dolorum quo natus quas dolor necessitatibus error vitae beatae mollitia. Quo autem tempore, labore ullam eligendi accusamus laborum tempora eveniet quia omnis adipisci impedit laboriosam amet maxime possimus perspiciatis? Quibusdam impedit repellendus cumque iste ipsam quo inventore corporis officiis?</p>
        <div className='size-20 bg-black rounded-full absolute left-1/2 top-1/2 translate-x-1/2 translate-y-1/2 group-hover:bg-white'></div>
      </div>
      <div className='flex gap-5 item-center m-10'>
        <div className='w-50 h-50 bg-blue-800 '></div>
        <div className='w-50 h-50 bg-blue-800 '></div>
        <div className='w-50 h-50 bg-blue-800 '></div>
         <div className='w-50 h-50 bg-blue-800 '></div>
      
      </div>
      
    </>
  )
}

export default App

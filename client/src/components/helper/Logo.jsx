import { MessagesCircle } from 'lucide-react'
import  { Link } from "react-router-dom"

function Logo() {
  return (
    <div className='flex items-center gap-8'>
    <Link to="/" className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <MessagesCircle className='size-5 text-primary' />
        </div>
        <h1 className="text-lg font-bold">Syncora</h1>
    </Link>
    </div>
  )
}

export default Logo
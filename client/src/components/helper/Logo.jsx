import { MessagesCircle } from 'lucide-react'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
          <MessagesCircle />
        </div>
    </div>
  )
}

export default Logo
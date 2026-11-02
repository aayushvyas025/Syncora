import { Users } from 'lucide-react'

function SidebarHeader({title='Contacts'}) {
  return (
    <div className='flex items-center gap-2'>
        <Users className='size-6' />
        <div className="font-medium hidden lg:block">{title}</div>
    </div>
  )
}

export default SidebarHeader
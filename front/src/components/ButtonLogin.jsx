import { User } from '@/hooks/useUsers'

export function ButtonLogin () {
  return (
    <button className='w-fit px-4 border border-black' onClick={User}>Log-in</button>
  )
}

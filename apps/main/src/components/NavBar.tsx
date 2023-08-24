import { useRouter } from 'next/navigation'

export default function NavBar() {
  const router = useRouter()
  return (
    <>
      <div className="h-[52px] sticky top-0 text-primary z-10 flex">
        <div>nav</div>
        <div onClick={() => router.push('/vue/setting')}>vue</div>
        <div onClick={() => router.push('/react')}>react</div>
      </div>
    </>
  )
}

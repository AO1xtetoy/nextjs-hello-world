import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return(
    <div className='bg-red-100 text-sm'>
      top
      <Link href='/hello'><a>Helloページへのリンク</a></Link>
      <Image
        src='/paletty.png'
        width={500}
        height={500}
        alt='パレッティ公式キャラクター'
      />
    </div>
  )
}

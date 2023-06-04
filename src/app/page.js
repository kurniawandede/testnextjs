
import Image from "next/image"
import Satu from '../assets/1.jpg'
import Dua from '../assets/2.jpg'
import Tiga from '../assets/3.jpg'
import Empat from '../assets/4.jpg'
import Lima from '../assets/5.jpg'
import Product from "./Product"

export default function Home() {
  return (
    <main className="p-5 container mx-auto pt-28">
    <div className="flex  items-center flex-col">
      <h1 className="font-titillium-web text-xl text-start">DeStore Marketplace</h1>
      <div className="grid grid-cols-1 gap-2 md:grid md:grid-cols-2">
        <Image className="rounded-lg shadow"
          src={Satu}
          alt="Picture One"
          placeholder="blur"
        /> 
        <div className="grid grid-cols-2 gap-2 md:grid md:grid-cols-2">
        <Image className="rounded-lg shadow"
          src={Dua}
          alt="Picture One"
          placeholder="blur"
        />
        <Image className="rounded-lg shadow"
          src={Tiga}
          alt="Picture One"
          placeholder="blur"
        />
        <Image className="rounded-lg shadow"
          src={Empat}
          alt="Picture One"
          placeholder="blur"
        />
        <Image className="rounded-lg shadow"
          src={Lima}
          alt="Picture One"
          placeholder="blur"
        />
        </div>
      </div></div>
    </main>
  )
}

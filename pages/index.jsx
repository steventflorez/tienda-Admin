import Head from 'next/head'
import Image from 'next/image'
import { Nav } from '../components/Nav'
import Opcion from '../components/Opcion'
import Link from 'next/link'
import { useRouter } from "next/router";
import categorias from '../categorias.json'




export default function Home() {




  

  return (
    <Nav>

      <div className="cont row">
        
        {


          categorias.map((categoria) => (
            <Opcion key={categoria.id} elemento={categoria} ir='categoria2' />
          ))}
      </div>





    </Nav>
  )
}

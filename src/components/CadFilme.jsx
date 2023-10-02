"use client"
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import useFavorito from '@/hooks/filmes'

export default function CardFilme({filme}){
    const { favorito, desfavoritar, favoritar } = useFavorito()
    var id = filme.id.replace('-', '/')
    const url_imagem = `https://images.pokemontcg.io/${id}.png`
   
    return(
        <div id="card" className=" flex-col w-40 justify-center items-center m-2">
        { favorito ?
        <div className="flex"> 
       <CheckCircleIcon onClick={() => desfavoritar(filme)} className="h-6 w-6 text-rose-600 cursor-pointer " />
         adquirido
        </div> 
        :
        <div className="flex"> 
        <CheckCircleIcon onClick={() => favoritar(filme)}  className="h-6 w-6 text-slate-100 cursor-pointer" />
            nao adquirido
        </div>
        }
        
        <img className="rounded"src={url_imagem} alt="" />
        <span className="font-bold text-center line-clamp-1">
            {filme.name}</span>
            
        <div>
          Artista: {/*<span>*/}{filme.artist} 
          <br></br>
           {/*Raridade: {filme.rarity} </span>*/}
        </div>
        <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">detalhes</a>
     </div>    
    )
}

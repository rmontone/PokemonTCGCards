import CardFilme from '@/components/CadFilme'
import Title from '@/components/Title'
import NavBar from '@/components/NavBar'


async function carregarFilmes(){
  const url = "http://localhost:8080/cards"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json
}
export default async function Home() {

  const filmes = await carregarFilmes() 

  

  
  return (
    <>

    <NavBar />


    <Title> em alta</Title> 
    <section className='flex flex-wrap'>
     {filmes.map(filme => <CardFilme filme={filme}/>)}
    </section>
    
     
    <Title> lançamento</Title>   
  
    <Title>favorios</Title>
    </>
  )
}
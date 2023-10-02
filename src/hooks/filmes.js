//hook

import { useState } from "react";

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)

    function favoritar(filme){
        setFavorito(true)
        const options = {
            method: 'POST',
            headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            },
            body: JSON.stringify({id: filme.id, card: filme, })
        };
        
        fetch('http://localhost:8080/adquirido', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    function desfavoritar(filme){
        setFavorito(false)
        const options = {
            method: 'DELETE'
        };
        
        fetch(`http://localhost:8080/adquirido/${filme.id}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return { favoritar, desfavoritar, favorito }

}
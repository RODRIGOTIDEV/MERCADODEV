import React, { Componet } from 'react'
import LinkCategoria from './LinkCategoria'
import base from './base'
import AnuncioHome from './AnuncioHome'
import HeaderHome from './HeaderHome'

class Home extends Componet {
    constructor(props){
        super(props)
    
        this.state = {
          categorias: [],
          anuncios: []
        }
        base.bindToState('categorias',{
           context: this,
           state: 'categorias'    
        })
        base.bindToState('anuncios',{
          context: this,
          state: 'anuncios'    
       })
     }
    
   
    render(){
        let index = 0
        return( 
         <div>   
        <HeaderHome />
        <div className= "container">
        <h3>Últimos Anúncios</h3>
         <div className="row">
            {this.state.anuncios.map((anuncio, indice) => {
                return <AnuncioHome key={indice} anuncio={anuncio} />
            })}
         </div>
         <h3>Categoria</h3>
         <div className="row">
         {this.state.categorias.map( (cat, indice) => {
           return [
              <LinkCategoria categoria={cat} key={indice}/>,
               ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                  ]
            })}
         </div>
        </div>
        </div>
        )
    }
}
export default Home
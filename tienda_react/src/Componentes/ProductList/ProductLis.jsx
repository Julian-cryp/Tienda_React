import React, { useEffect } from 'react'
import './ProductList.css'
import { useState } from 'react';


 export const ProductList=() => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [orden, setOrden] = useState("Relevante");
    const [filtros, setFiltros] = useState({categorias:[] , tipos: []});

    useEffect(() =>{
       
        const fetchProductos= async ()=>{
            try{
                const respuesta = await fetch('https://api-ten-jet.vercel.app/products');
              if(!respuesta.ok){
                throw new Error('no conectado');
              }
                  const data = await respuesta.json();
                setProductos (data);

            }catch(err){
                setError(err.message);
            }
        }

        fetchProductos();
    }, []);


    const toogleFiltros = (tipoFiltro, valor) =>{
        setFiltros((prev)  => ({
                   ...prev,
            [tipoFiltro]: prev[tipoFiltro].includes(valor)
            ? prev[tipoFiltro].filter((item) => item !== valor)
            : [...prev[tipoFiltro], valor],
        }))
    }


    const ProductosFiltros = productos.filter((productos) => {
        const matchCategori = filtros.categorias.lenght === 0 || filtros.categorias.includes(productos.categorias);
        const matchTipo =
        filtros.tipos.length === 0 || filtros.tipos.includes(productos.tipo);
        return matchCategori,  matchTipo
    }) 
     
    const handleOrdenChange = (e) =>{
      setOrden(e.target.value)
    }

    const productosOrdenados = [...productos].sort((a,b) => {
        if(orden === ' Precio: Mayor a Menor'){
            return b.precio - a.precio

        }if(orden === 'Precio: Menor a Mayor'){
            return a.precio - b.precio
        }
        return 0;
    }

)

  return (
    <section className='main-content'>
        <aside className='filters'>
         <h2>filtros</h2>
         <div className="filters-datecategory">
            <h3>Categoria</h3>

            <label>
             <input type='checkbox'
             onChange= {() => toogleFiltros("categorias" , "Hombre")}
             />
             <span>Hombre</span>
            </label>

            <label>
             <input type='checkbox'
             onChange= {() => toogleFiltros("categorias" , "Mujeres")}
             />
             <span>Mujeres</span>
            </label>

            <label>
             <input type='checkbox'
             onChange= {() => toogleFiltros("categorias" , "ni;os")}
             />
             <span>nin;os</span>
            </label>
         </div>

         <div className="filters-datecategory">
            <h3>Tipos</h3>

            <label>
             <input type='checkbox'/>
             <span>Prendas de abrigo</span>
            </label>

            <label>
             <input type='checkbox'/>
             <span>Ropa interior</span>
            </label>

            <label>
             <input type='checkbox'/>
             <span>Calzado</span>
            </label>
            <label>
             <input type='checkbox'/>
             <span>Calzado</span>
            </label>
         </div>
        </aside>
        <main className='collection'>
            <div className="option">
                <h2>TODAS LAS COLECCIONES</h2>
                <div className="sort-options">
                    <label>
                        Ordernar por:
                        <select onChange={handleOrdenChange} value={orden}>
                            <option>
                                Relevante
                            </option>
                             <option>
                                Precio: Menor a Mayor
                            </option>
                             <option>
                                Precio: Mayor a Menor
                            </option>
                        </select>

                    </label>
                </div>
               
                <div className="Products">
                 {error ? (
                    <p className='error-message'>{error}</p>
                 ):(
                     productosOrdenados.map ((item) =>{
                        
                        return(   
                        
                        <div className="card-product" key={item.id}>
                            <img src={item.image} alt={item.image} className='product-image'
                            />
                            <h3>{item.nombre}</h3>
                            <p>{item.precio}</p>
                        </div>

                        )
                     
                    }
                )
          
                 )
                }

                

                </div>
               
                
            </div>
 
        </main>
    </section>
  )
}


import React, { useEffect } from 'react'
import './ProductList.css'
import { useState } from 'react';


 export const ProductList=() => {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);

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


  return (
    <section className='main-content'>
        <aside className='filters'>
         <h2>filtros</h2>
         <div className="filters-datecategory">
            <h3>Categoria</h3>

            <label>
             <input type='checkbox'/>
             <span>Hombre</span>
            </label>

            <label>
             <input type='checkbox'/>
             <span>Mujeres</span>
            </label>

            <label>
             <input type='checkbox'/>
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
                        <select>
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
                    productos.map ((item) =>{
                        
                        return(   
                        
                        <div className="card-product" key={item.id}>
                            <img src={item.image} alt={item.image} className='product-image'
                            />
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
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


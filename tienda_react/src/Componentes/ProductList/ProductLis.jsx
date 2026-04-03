import React from 'react'
import './ProductList.css'
export const ProductLis = () => {
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
            </div>

        </main>
    </section>
  )
}

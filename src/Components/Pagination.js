import React from 'react'

function Pagination({ prev, next, onPrevious, onNext }) {
    //creamos las funciones onclik
    const handlePrevious = () => {
        //insertamos las logicas
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }
    return (
        <nav>
            <ul class="pagination justify-content-center">
                {prev ?
                    <li class="page-item">
                        <button type="button" class="page-link" onClick={handlePrevious}>Anterior</button>
                    </li>
                    : null
                }

                {
                    next ?
                        <li class="page-item">
                            <button class="page-link" onClick={handleNext}>Siguiente</button>
                        </li>
                        : null
                }
            </ul>
        </nav>
    )
}

export default Pagination
import { useState } from 'react'

function Botao({labelButton}) {
  const [count, setCount] = useState(0)

  return (
    <div className="contener">
      <button>{labelButton}</button>
    </div>
  )
}

export default Botao

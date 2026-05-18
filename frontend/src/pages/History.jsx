import React from 'react'

function History() {
  return (
    <div><div>
  {history.map((item) => (
    <div key={item._id}>
      {item.expression} = {item.result}
    </div>
  ))}
</div></div>
  )
}

export default History
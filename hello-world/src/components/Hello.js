import React from 'react'

function Hello() {
//   return (
//     <div>
//       <h1>This JSX Version of Hello Component!</h1>
//     </div>
//   )
    return React.createElement('div',{id:'hello',className:'dummyclass'},React.createElement('h1',null,"This is Hello component without JSX"))
}

export default Hello

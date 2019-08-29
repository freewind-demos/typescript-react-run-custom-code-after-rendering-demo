import React, {useEffect, useState} from 'react'

export default function Inner() {
  console.log("> Inner")

  const [shown, setShown] = useState(true)
  useEffect(() => {
    console.log("Inner.useEffect")
  })

  return <div id='inner'>
    <button type='button' onClick={() => setShown(v => !v)}>Toggle</button>
    {
      shown && <div>Hello Inner</div>
    }
  </div>
};

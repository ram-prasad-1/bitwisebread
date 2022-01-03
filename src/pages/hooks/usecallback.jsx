import { useEffect, useCallback } from 'react'

export default function Parent({ base }) {
  // here function reference will remain same until base variable changes
  const doOperation = useCallback(
    (a, b) => {
      console.log(`Result: ${2 * a + b + base}`)
    },
    [base]
  )

  return <Child callback={doOperation} />
}

const Child = ({ callback }) => {
  useEffect(() => {
    callback(11, 8)
  }, [callback])

  return <div> Some Child </div>
}

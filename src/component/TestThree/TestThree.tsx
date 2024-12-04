import React, { FC } from 'react'

type Test_Three_Props = {
    test_three: string;
}
const TestThree: FC<Test_Three_Props>= ({test_three}) => {
  return (
    <div>
      {test_three}
    </div>
  )
}

export default TestThree

import React, { FC } from 'react'

type TestProps = {
    test_two: string;
  }
const TestTwo : FC<TestProps> = ({test_two}) => {
  
  
    return (
    <div>
      {test_two}
    </div>
  )
}

export default TestTwo

import React, { FC } from 'react'


type Home_Props = {
    home_title: string;
}
const Home: FC<Home_Props> = ({home_title}) => {
  return (
    <div>
      {home_title}
    </div>
  )
}

export default Home

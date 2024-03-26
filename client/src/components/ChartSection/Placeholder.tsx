import {useContext} from 'react'
import {ThemeContext} from 'styled-components'
import * as Styled from './styles'
import React from 'react';

const Placeholder = () => {
  const theme = useContext(ThemeContext)

  return (
    <Styled.PlaceholderWrapper>
      <Styled.SearchIconSvg viewBox="0 0 339.921 339.921">
        <path
          fill={theme.text}
          d="M335.165,292.071l-81.385-84.077c-5.836-6.032-13.13-8.447-16.29-5.363
		c-3.171,3.062-10.47,0.653-16.306-5.379l-1.164-1.207c36.425-47.907,32.89-116.499-10.851-160.24
		c-47.739-47.739-125.142-47.739-172.875,0c-47.739,47.739-47.739,125.131,0,172.87c44.486,44.492,114.699,47.472,162.704,9.045
		l0.511,0.533c5.825,6.032,7.995,13.402,4.814,16.469c-3.166,3.068-1.012,10.443,4.83,16.464l81.341,84.11
		c5.836,6.016,15.452,6.195,21.49,0.354l22.828-22.088C340.827,307.735,340.99,298.125,335.165,292.071z M182.306,181.81
		c-32.852,32.857-86.312,32.857-119.159,0.011c-32.852-32.852-32.847-86.318,0-119.164c32.847-32.852,86.307-32.847,119.148,0.005
		C215.152,95.509,215.152,148.964,182.306,181.81z"
        />
      </Styled.SearchIconSvg>
      <p>Search for artists to make a comparison</p>
    </Styled.PlaceholderWrapper>
  )
}

export default Placeholder

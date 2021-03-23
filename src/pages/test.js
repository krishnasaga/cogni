import React, { useState } from 'react';
import { Button,Radio,Box,Grid } from 'theme-ui';

const Counting = (props) => {
  return <div>Hello {props.number}</div>;
};

export default () => {
  const [ count,setCount] = useState(0);
  return <div><Button onClick={()=>{
    setCount(count+1);
  }}>Hello, World! </Button>
    <Counting number={count}/>
    <Radio/>
    <Box p={5} bg={'red'}>
      Hello
    </Box>
    <Grid columns={[1,4,4,4]}>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
      <Box>
        Hello
      </Box>
    </Grid>
  </div>;
}


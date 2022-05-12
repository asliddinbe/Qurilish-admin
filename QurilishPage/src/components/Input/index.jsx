import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const data = [
  {
    label: "Your Name",
  },
  {
    label: "Your Email",
  },
  {
    label: "Subject",
  }
]

const Input = data.map((item) => (
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
      <TextField  id="demo-helper-text-misaligned-no-helper" label={item.label}
      sx={{
      width:'90%',
      margin:'20px 0px 10px 0px'
      }} />
    </Box>
))


export default ()=>{
  return (
    <>
      {Input}
    </>
  );
}

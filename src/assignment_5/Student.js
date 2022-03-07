import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./Style.css";
import {Link,} from "react-router-dom"


function Student(props) {

 const {data} = props;
 console.log(data)
  return (
      <>
      <Stack spacing={2} direction="e">
      <Link to = "/student-desc"><Button id ='btn'  variant="contained">Add New Student</Button></Link></Stack>
    <TableContainer id='mytable' component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow
              key={e.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="e">
                {e.name}
              </TableCell>
              <TableCell align="right">{e.age}</TableCell>
              <TableCell align="right">{e.course}</TableCell>
              <TableCell align="right">{e.batch}</TableCell>
              <TableCell align='right'><Link to={`/student-desc/${e.ID}`}>Edit</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
}
export default Student
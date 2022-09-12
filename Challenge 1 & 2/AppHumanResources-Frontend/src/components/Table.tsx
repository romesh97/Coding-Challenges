import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function DataTable() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/api/attendance-details"
        );
        setData(res.data);
        console.log("loadable data", res.data);
      } catch (err) {
        alert(`There was a issue with the server`);
      }
    };
    LoadData();
  }, []);
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 6, backgroundColor: "#F5F5F5" }}
    >
      <Table sx={{ width: "100%" }} aria-label="human resource table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              CheckIn Time
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              CheckOut Time
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Total Working Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.schedule?.employee.employee_name}
                </TableCell>
                <TableCell align="center">
                  {row?.schedule?.shift?.checkin_time}
                </TableCell>
                <TableCell align="center">
                  {row?.schedule?.shift?.checkout_time}
                </TableCell>
                <TableCell align="center">
                  {row?.schedule?.shift?.working_hours}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { CustomButton } from "../../components";
import { StudentModal } from "./components";
import { StudentActions } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

const Students = () => {
  const [studentModal, setStudentModal] = useState(false);

  const { loading, students, error } = useSelector(
    (state) => state.StudentReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(StudentActions.getAllStudents());
  }, [dispatch]);

  return (
    <Box>
      {error ? <Typography variant="h4">{error}</Typography> : null}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h4">Students</Typography>
        <CustomButton onClick={() => setStudentModal(!studentModal)}>
          Create Student
        </CustomButton>
      </Box>
      {loading ? (
        <AiOutlineLoading3Quarters />
      ) : students?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead
              style={{
                backgroundColor: "#f5f5f5",
              }}
            >
              <TableRow>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  First Name
                </TableCell>
                <TableCell
                  style={{
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                  align="left"
                >
                  Last Name
                </TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {student.firstname}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {student.lastname}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link to={`/student/${student.id}`}>
                      <CustomButton>Details</CustomButton>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6">No Students Found</Typography>
      )}
      <StudentModal open={studentModal} toggleModal={setStudentModal} />
    </Box>
  );
};

export default Students;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BookActions, StudentActions } from "../../../../store/actions";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BorrowModal = ({ open, toggleModal, data }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const { students } = useSelector((state) => state.StudentReducer);

  const submit = (e) => {
    e.preventDefault();
    dispatch(BookActions.borrowBook(data.id, form));
    toggleModal();
  };

  useEffect(() => {
    dispatch(StudentActions.getAllStudents());
  }, [dispatch]);

  return (
    <Modal
      open={open}
      onClose={() => toggleModal(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit {data?.name}
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { my: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submit}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Student Name"
            value={form?.student}
            onChange={(e) => setForm({ ...form, student: e.target.value })}
            helperText="Please select student name"
          >
            {students?.map((student) => (
              <MenuItem
                key={student.id}
                value={`${student.firstname} ${student.lastname}`}
              >
                {student.firstname} {student.lastname}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Return Date"
              inputFormat="MM/dd/yyyy"
              value={form?.returnDate}
              onChange={(e) => setForm({ ...form, returnDate: e })}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BorrowModal;

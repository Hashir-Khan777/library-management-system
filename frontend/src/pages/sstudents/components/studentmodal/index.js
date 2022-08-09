import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { StudentActions } from "../../../../store/actions";

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

const StudentModal = ({ open, toggleModal }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(StudentActions.createStudent(form));
    toggleModal();
  };

  return (
    <Modal
      open={open}
      onClose={() => toggleModal(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create Student
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
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          <Button variant="contained" color="primary" type="submit">
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default StudentModal;

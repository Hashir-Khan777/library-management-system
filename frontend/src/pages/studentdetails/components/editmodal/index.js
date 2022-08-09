import React, { useEffect, useState } from "react";
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

const EditModal = ({ open, toggleModal, data }) => {
  const [form, setForm] = useState({});

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(StudentActions.updateStudent(data.id, form));
    toggleModal();
  };

  useEffect(() => {
    setForm(data);
  }, [data]);

  return (
    <Modal
      open={open}
      onClose={() => toggleModal(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit {data?.firstname} {data?.lastname}
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
            value={form?.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            value={form?.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          <Button variant="contained" color="primary" type="submit">
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;

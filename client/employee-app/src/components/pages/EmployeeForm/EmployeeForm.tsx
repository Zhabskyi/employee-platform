import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { theme } from "../../../theme/theme";

const defaultValues = {
  firstName: "",
  lastName: "",
  department: "",
  salary: ""
};

const EmployeeForm: React.FC = () => {
  const { employeeId } = useParams();
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues
  });

  console.log("employeeId", employeeId);
  const onSubmit = (data) => console.log(data);

  return (
    <Grid container sx={{ margin: "48px" }}>
      <Typography variant="h3" color={theme.palette.text.primary}>
        Employee Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Grid container justifyContent="center" marginTop="48px">
          <Grid container item spacing={3} sx={{ maxWidth: "960px" }}>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  console.log("field", field);
                  return (
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      id="firstName"
                      label="First Name"
                      value={field?.value ? field.value : ""}
                    />
                  );
                }}
                control={control}
                name="firstName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      id="lastName"
                      label="Last Name"
                      value={field?.value ? field.value : ""}
                    />
                  );
                }}
                control={control}
                name="lastName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Department"
                      id="department"
                      label="Department"
                      value={field?.value ? field.value : ""}
                    />
                  );
                }}
                control={control}
                name="department"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                render={({ field }) => {
                  return (
                    <TextField
                      fullWidth
                      placeholder="Salary"
                      id="salary"
                      label="Salary"
                      value={field?.value ? field.value : ""}
                    />
                  );
                }}
                control={control}
                name="salary"
              />
            </Grid>

            <Grid container item xs={12} spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button variant="contained" color="secondary" onClick={() => {}}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default EmployeeForm;
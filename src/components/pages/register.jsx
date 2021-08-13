import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import axios from "axios";
import React, {  useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const validator = require("email-validator");

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const counter = (s) => {
  return [...s].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1;
    return a;
  }, {});
};

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfrimPassword] = useState("");
  const [email, setEmail] = useState("");
  const [corporationType, setCorporationType] = useState("");
  const [corporationName, setCorporationName] = useState("");
  const [keyman, setKeyman] = useState("");
  const [corporationPAN, setCorporationPAN] = useState("");
  const [GST, setGST] = useState(false);
  const [GSTNum, setGSTNum] = useState("");
  const [corporationNum, setCorporationNum] = useState("");
  const [corporationEmail, setCorporationEmail] = useState("");
  const [keyManNum, setkeyManNum] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [companyZipCode, setCompanyZipCode] = useState("");

  const postRegister = () => {
    if (
      password.length >= 6 &&
      confrimPassword === password &&
      name.length > 2 &&
      username.length > 5 &&
      validator.validate(email)
    ) {
      axios
        .post(`http://localhost:5000/users/register`, {
          name: name,
          email: email,
          password: password,
          username: username,
          corporation_type: corporationType,
          company_pan: corporationPAN,
          company_name: corporationName,
          keyMan: keyman,
          GST: GST,
          gst_num: GSTNum,
          company_num: corporationNum,
          keyman_num: keyManNum,
          company_email: corporationEmail,
          personal_email: personalEmail,
          company_zip_code: companyZipCode,
        })
        .then((res) => {
          window.alert("Registered sucessfully");
          window.alert(res.data.message);
          window.location.replace(`http://${window.location.host}/login`);
          if (res.data.status === 400) {
            if (res.data.message) {
              window.alert(res.data.message);
              window.location.reload();
            }
          } else {
            window.alert("Some error occured. check console.");
            console.log(res.data);
          }
        })
        .catch((err) => {
          window.alert("some error occured please check console");
          console.log(err);
        });
    } else {
      if (name.length < 2)
        window.alert("Name should contain more than 2 letters");
      if (username.length <= 5)
        window.alert("Username should contain more than 5 letters");
      if (!validator.validate(email)) window.alert("Enter a valid email");
      if (password.length < 6)
        window.alert("Password length should be more than 6");
      if (confrimPassword !== password) window.alert("Passwords don't match");
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <div className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Full Name"
                  autoFocus
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="username"
                  onChange={(event) => {
                    setusername(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confrim password"
                  label="Confrim Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => {
                    setConfrimPassword(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-helper-label">
                  Corporation Type
                </InputLabel>
                <Select
                  style={{ width: "100%" }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={corporationType}
                  onChange={(e) => {
                    setCorporationType(e.target.value);
                  }}
                >
                  <MenuItem value="">
                    <em>Select type</em>
                  </MenuItem>
                  <MenuItem value={"Sole Prop"}>Sole Prop</MenuItem>
                  <MenuItem value="Partnership">Partnership</MenuItem>
                  <MenuItem value="Section 8 Company">
                    Section 8 Company
                  </MenuItem>
                  <MenuItem value="Pvt Ltd">Pvt Ltd</MenuItem>
                  <MenuItem value="NGO">NGO</MenuItem>
                </Select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="corporationName"
                  label="Company Name"
                  name="corporationName"
                  autoComplete="corporationName"
                  onChange={(event) => {
                    setCorporationName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="keyman"
                  label="Key Man Full Name"
                  name="keyman"
                  autoComplete="keyman"
                  onChange={(event) => {
                    setKeyman(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="corporationPAN"
                  label="Company PAN"
                  name="corporationPAN"
                  autoComplete="corporationPAN"
                  onChange={(event) => {
                    setCorporationPAN(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={GST}
                      color="primary"
                      onChange={() => {
                        setGST(!GST);
                      }}
                    />
                  }
                  label="GST Available?"
                />
              </Grid>
              {GST ? (
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="GSTNum"
                    label="GST Number"
                    name="GSTNum"
                    autoComplete="GSTNum"
                    value={GSTNum}
                    onChange={(event) => {
                      var val = event.target.value;
                      setGSTNum(
                        val.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
                      );
                    }}
                  />
                </Grid>
              ) : (
                ""
              )}
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="setCorporationEmail"
                  label="Company Email"
                  name="setCorporationEmail"
                  autoComplete="setCorporationEmail"
                  onChange={(event) => {
                    setCorporationEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="setCorporationNum"
                  label="Company Phone Number"
                  name="setCorporationNum"
                  autoComplete="setCorporationNum"
                  onChange={(event) => {
                    setCorporationNum(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="setkeyManNum"
                  label="Keyman Phone Number"
                  name="setkeyManNum"
                  autoComplete="setkeyManNum"
                  onChange={(event) => {
                    setkeyManNum(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="setPersonalEmail"
                  label="Personal Email"
                  name="setPersonalEmail"
                  autoComplete="setPersonalEmail"
                  onChange={(event) => {
                    setPersonalEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="setCorporationNum"
                  label="Company Zip Code"
                  name="setCorporationNum"
                  autoComplete="setCorporationNum"
                  onChange={(event) => {
                    setCompanyZipCode(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={postRegister}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

export default Register;

import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

class AddCar extends Component {
  state = {
    open: false,
    name: "",
    mpg: "",
    cylinders: "",
    horsepower: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newBill = { ...this.state };
    newBill[e.target.id] = e.target.value;
    this.setState(newBill);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    delete payload.open;
    console.log("THE CAR", payload);
    console.log(this.props);
    this.setState({ open: !this.state.open });
    // add this.props.addCar(payload) function here
    // also add this.setState to close the dialog
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        name: "",
        mpg: "",
        cylinders: "",
        horsepower: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h3>Add New Bill</h3>
          <Button
            variant="contained"
            onClick={this.toggleDialog}
          >
            Add Bill
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Car</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="mpg"
                  placeholder="Miles per gallon"
                  value={this.state.mpg}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="cylinders"
                  placeholder="Cylinders"
                  value={this.state.cylinders}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="horsepower"
                  placeholder="Horsepower"
                  value={this.state.horsepower}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddCar;

// export default function AddCar() {
//   const [bill, setBill] = useState({
//     open: false,
//     name: "",
//     due_day: "",
//     amount: "",
//     fixed_amount: ""
//  })

//   toggleDialog = () => setBill({ open: !open });

//   handleChange = (e) => {
//     const newBill = { ...bill };
//     newBill[e.target.id] = e.target.value;
//     setBill(newBill);
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = { ...bill };
//     delete payload.open;
//     console.log("THE BILL", payload);
//     console.log(props);
//     setBill({ open: !open });
//     // AXIOS.POST payload goes here
//   };
// }

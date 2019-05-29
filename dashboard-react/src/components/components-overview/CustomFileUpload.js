import React, { Component } from "react";

class CustomFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Choose File..."
    }
  }
  handleChange = (e) => {
    if (e.target.files[0] === undefined) return;
    this.setState({
      label: e.target.files[0].name
    });
    this.props.onChange(e);
  }
  render() {
    return (
      <div className="custom-file mb-3">
        <input type="file" className="custom-file-input" id="customFile2" onChange={this.handleChange.bind(this)} />
        <label className="custom-file-label" htmlFor="customFile2">
          {this.state.label}
        </label>
      </div>
    );
  }
}




export default CustomFileUpload;

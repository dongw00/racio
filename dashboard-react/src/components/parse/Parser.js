import React, { Component } from 'react';
import CustomFileUpload from '../components/components-overview/CustomFileUpload';

// const eventType = {
//   LOG_TYPE_RESUME: 1,
//   LOG_TYPE_PAUSE: 2,
//   LOG_TYPE_LAP: 3,
// }

class ReadLog extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      this.parse(fileReader.result);
    };
    fileReader.readAsArrayBuffer(file);
  }
  parse(r) {
    let view = new DataView(r);
    this.setState({
      header: {
        version: view.getUint32(0, true),
        time: view.getFloat64(4, true)
      }
    });

    let data = [];
    for (let i = 3; i < view.byteLength / 4; i++) {
      let time = view.getFloat32(i * 4, true);
      if (time < 0) {
        data.push({
          time: time,
          eventType: view.getUint32(++i * 4, true)
        });
      } else {
        let states = {};
        states.time = time;

        let flagNSpeed = view.getUint32(++i * 4, true);
        let locationFlag = flagNSpeed & 0x80000000;
        let flags = flagNSpeed & 0x7fff0000;
        let speed = flagNSpeed & 0xffff;
        if (speed === 0) { }
        else {
          if (speed < 0xfffe) {
            states.speed = speed / 256;
          } else {
            states.speed = -1;
          }
          flags |= 0x80000000;
        }
        states.flags = flags;


        for (let j = 0; j < 16; j++) {
          if (flags === 0) break;
          if (flags & 0x80000000) {
            switch (j) {
              case 1: {
                states.distance = view.getFloat32(++i * 4, true);
                break;
              } case 2: {
                states.altitude = view.getFloat32(++i * 4, true);
                break;
              } case 3: {
                states.cadence = view.getFloat32(++i * 4, true);
                break;
              } case 4: {
                states.heartRate = view.getFloat32(++i * 4, true);
                break;
              } case 5: {
                states.power = view.getFloat32(++i * 4, true);
                break;
              } case 6: {
                states.calories = view.getFloat32(++i * 4, true);
                break;
              } default: {
              }
            }
          }

          flags <<= 1;
        }
        if (locationFlag) {
          states.mercPooint = {
            x: view.getFloat32(++i * 4, true),
            y: view.getFloat32(++i * 4, true)
          }
        }
        data.push(states);
      }
    }
    this.setState({
      body: data
    });
    console.log(this.state);
  }
  render() {
    return (
      <CustomFileUpload onChange={this.handleChange.bind(this)} />
      // <div>
      //   <input type="file" onChange={this.handleChange.bind(this)} />
      // </div>
    );
  }
}




export default ReadLog;
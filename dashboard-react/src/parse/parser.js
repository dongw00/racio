import React, { Component } from 'react';
import Long from 'long';
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
      this.parse(new Uint32Array(fileReader.result));
    };
    fileReader.readAsArrayBuffer(file);
  }
  parse(r) {
    this.setState({
      header: {
        version: r[0],
        time: new Long(r[1], r[2], true)
      }
    });
    let data = [];
    for (let i = 3; i < r.length; i++) {
      let time = r[i] >> 0; // uint => int
      if (time < 0) {
        data.push({
          time: time,
          eventType: r[++i]
        });
      } else {
        let states = {};
        states.time = time;
        let flag = r[++i] & 0xffff0000;
        let speed = r[i] & 0xffff;
        states.flag = flag;
        if(speed < 0xfffe){
          states.speed = speed / 256;
        }
        let locationbit = 0;
        for (let j = 0; j < 16; j++) {
          if (flag === 0) break;
          let flagbit = flag & 0x80000000;
          flag <<= 1;

          if (flagbit !== 0) {
            switch (j) {
              case 0: {
                locationbit = 1;
                break;
              } case 1: {
                states.distance = r[++i];
                break;
              } case 2: {
                states.altitude = r[++i];
                break;
              } case 3: {
                states.cadence = r[++i];
                break;
              } case 4: {
                states.heartRate = r[++i];
                break;
              } case 5: {
                states.power = r[++i];
                break;
              } case 6: {
                states.calories = r[++i];
                break;
              } default: {
              }
            }
          }
        }
        if(locationbit === 1){
          states.location = {
            x: r[++i],
            y: r[++i]
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
      <CustomFileUpload onChange={this.handleChange.bind(this)}/>
      // <div>
      //   <input type="file" onChange={this.handleChange.bind(this)} />
      // </div>
    );
  }
}




export default ReadLog;
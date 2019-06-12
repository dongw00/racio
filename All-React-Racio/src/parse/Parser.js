import React from 'react';
import { readLogData } from './Database';

// const eventType = {
//   LOG_TYPE_RESUME: 1,
//   LOG_TYPE_PAUSE: 2,
//   LOG_TYPE_LAP: 3,
// }

const SaveLog = () => <div />;

function parseData() {
  return new Promise((resolve, reject) => {
    readLogData().then(bufferlist => {
      var logs = [];
      bufferlist.forEach(buffer => {
        var log = {}; // one log
        var view = new DataView(buffer);

        // Header
        log.header = {
          version: view.getUint32(0, true),
          time: view.getFloat64(4, true),
        };

        // Body
        var body = [];
        for (var i = 3; i < view.byteLength / 4; i++) {
          var time = view.getFloat32(i * 4, true);
          if (time < 0) {
            body.push({
              time: time,
              eventType: view.getUint32(++i * 4, true),
            });
          } else {
            var state = {};
            state.time = time;

            var flagNSpeed = view.getUint32(++i * 4, true);
            var locationFlag = flagNSpeed & 0x80000000;
            var flags = flagNSpeed & 0x7fff0000;
            var speed = flagNSpeed & 0xffff;
            if (speed === 0) {
            } else {
              if (speed < 0xfffe) {
                state.speed = speed / 256;
              } else {
                state.speed = -1;
              }
              flags |= 0x80000000;
            }
            state.flags = flags;

            for (var j = 0; j < 16; j++) {
              if (flags === 0) break;
              if (flags & 0x80000000) {
                switch (j) {
                  case 1: {
                    state.distance = view.getFloat32(++i * 4, true);
                    break;
                  }
                  case 2: {
                    state.altitude = view.getFloat32(++i * 4, true);
                    break;
                  }
                  case 3: {
                    state.cadence = view.getFloat32(++i * 4, true);
                    break;
                  }
                  case 4: {
                    state.heartRate = view.getFloat32(++i * 4, true);
                    break;
                  }
                  case 5: {
                    state.power = view.getFloat32(++i * 4, true);
                    break;
                  }
                  case 6: {
                    state.calories = view.getFloat32(++i * 4, true);
                    break;
                  }
                  default: {
                  }
                }
              }

              flags <<= 1;
            }
            if (locationFlag) {
              state.mercPooint = {
                x: view.getFloat32(++i * 4, true),
                y: view.getFloat32(++i * 4, true),
              };
            }
            body.push(state);
          }
        }

        log.body = body;
        logs.push(log);
      });

      resolve(logs);
    });
  });
}

export default SaveLog;
export { parseData };

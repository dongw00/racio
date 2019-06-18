import { readLogData } from './Database';

export default function parseData() {
  return new Promise((resolve, reject) => {
    readLogData().then(bufferlist => {
      const logs = [];
      bufferlist.forEach(buffer => {
        let log = {}; // one log
        const view = new DataView(buffer);

        // Header
        log.header = {
          version: view.getUint32(0, true),
          time: view.getFloat64(4, true),
        };

        // Body
        const body = [];
        for (let i = 3; i < view.byteLength / 4; i++) {
          const time = view.getFloat32(i * 4, true);
          if (time < 0) {
            body.push({
              time: time,
              eventType: view.getUint32(++i * 4, true),
            });
          } else {
            let state = {};
            state.time = time;

            const flagNSpeed = view.getUint32(++i * 4, true);
            const locationFlag = flagNSpeed & 0x80000000;
            let flags = flagNSpeed & 0x7fff0000;
            const speed = flagNSpeed & 0xffff;

            if (speed !== 0) {
              speed < 0xfffe ? (state.speed = speed / 256) : (state.speed = -1);
              flags |= 0x80000000;
            }
            state.flags = flags;

            for (let j = 0; j < 16; j++) {
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
              const mercX = view.getUint32(++i * 4, true);
              const mercY = view.getUint32(++i * 4, true);

              state.spotPoint = {
                long: (mercX / (1 << 31)) * 180 - 180,
                lat:
                  (Math.atan(Math.sinh(Math.PI * (1 - mercY / (1 << 31)))) *
                    180) /
                  Math.PI,
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

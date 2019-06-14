import { app } from '../firebase/FBinit';

export function setLogData(event) {
  let file = event.target.files[0];
  let fileReader = new FileReader();
  fileReader.onload = () => {
    app
      .database()
      .ref('logs/' + file.name.split('.')[0])
      .set(
        {
          data: fileReader.result,
        },
        err => {
          alert('Upload Done');
        }
      );
  };
  fileReader.readAsBinaryString(file);
}

export function readLogData() {
  return new Promise((resolve, reject) => {
    app
      .database()
      .ref('logs/')
      .once('value')
      .then(snapshot => {
        const bufferlist = [];
        let logs = snapshot.val();
        Object.keys(logs).forEach(value => {
          const data = logs[value].data;
          const buffer = new ArrayBuffer(data.length);
          let array = new Uint8Array(buffer);
          for (let i = 0; i < data.length; i++) {
            array[i] = data.charCodeAt(i);
          }
          bufferlist.push(buffer);
        });
        resolve(bufferlist);
      });
  });
}

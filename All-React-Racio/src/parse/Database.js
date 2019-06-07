import { app } from '../firebase/FBinit'



function setLogData(event) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
        app.database().ref('logs/' + file.name.split('.')[0]).set({
            data: fileReader.result,
        }, (err) => {
            alert("Upload Done");
        });
    };
    fileReader.readAsBinaryString(file);
}

function readLogData() {
    return new Promise((resolve, reject) => {
        app.database().ref('logs/').once('value')
            .then((snapshot) => {
                var bufferlist = [];
                let logs = snapshot.val();
                var names = Object.keys(logs);
                names.forEach((value) => {
                    var data = logs[value].data;
                    var buffer = new ArrayBuffer(data.length);
                    var array = new Uint8Array(buffer);
                    for (var i = 0; i < data.length; i++) {
                        array[i] = data.charCodeAt(i);
                    }
                    bufferlist.push(buffer);
                });
                resolve(bufferlist)
            })
    });
}

export { setLogData, readLogData };
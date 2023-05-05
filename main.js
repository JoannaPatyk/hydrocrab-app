let app_state = {
    gender: '',
    activity: '',
    literAmount: 0,
    wypite: 0,
    weight: 0
};

// zapis do local storage
const json_data = JSON.stringify(app_state); // serializacja
console.log('JSON:\t\t', json_data);

// odczyt z local storage
app_state = JSON.parse(json_data); // deserializacja
console.log('JS object:\t', app_state);

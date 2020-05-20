var holochain_connection = holochainclient.connect();
function hello() {
  holochain_connection.then(({ callZome, close }) => {
    callZome(
      'test-instance',
      'hello',
      'hello_holo',
    )({ args: {} }).then(result => show_output(result, 'output'));
  });
}
function show_output(result, id) {
  var el = document.getElementById(id);
  var output = JSON.parse(result);
  if (output.Ok) {
    el.textContent = ' ' + output.Ok;
  } else {
    alert(output.Err.Internal);
  }
}
function create_person() {
  const name = document.getElementById('name').value;
  holochain_connection.then(({ callZome, close }) => {
    callZome('test-instance', 'hello', 'create_person')({
      person: { name: name },
    }).then(result => show_output(result, 'address_output'));
  });
}
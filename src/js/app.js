var xhr = new XMLHttpRequest();

xhr.onload = function() {

  if (xhr.status === 200) {

    responseObject = JSON.parse(xhr.responseText);
    var Content = '';

    for (var i = 0; i < responseObject.person.length; i++) {
      Content += '<div class="person">';
      Content += '<p>' + responseObject.person[i].firstName + ' ';
      Content += responseObject.person[i].age + '</p></div>';
    }

    document.getElementById('container').innerHTML = Content;
  }
};

xhr.open('GET', 'data/data.json', true);
xhr.send('null')

var globals = require('lib/globals');
exports.mapsWindow = function() {
  var instance = Ti.UI.createWindow({
    title: 'Maps',
    backgroundColor: '#eeeeee',
    barColor: '#3b587b'
  });
  instance.orientationModes = [Ti.UI.PORTRAIT];
  if (globals.osname === 'android') {
    instance.backgroundColor = '#111111';
  }
  
  var tableView = exports.mapsTableView();
  
  tableView.addEventListener('click', function(f) {
    Ti.App.fireEvent('map.click', {
      arg: f.rowData.arg,
      title: f.rowData.title,
      callback: false
    });
  });
  instance.add(tableView);
  
  return instance;
}

// Creates the Table View for the Maps Window/Views
exports.mapsTableView = function() {
  var instance = '';
  
  // @iPad
  // We don't need the hasChild marker on the iPad
  var dataHasChild = (globals.osname === "ipad") ? false : true;
  
  var data = [
    {title: "Auditorium Seating", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'seating.html'},
    {title: "Campus", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'campus.html'},
    {title: "Revels Floor 1", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'revels1.html'},
    {title: "Revels Floor 2", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'revels2.html'},
    {title: "Revels Floor 3", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'revels3.html'},
    {title: "Nursery", hasChild:dataHasChild, winClass:'../pages/staticpage.js', arg: 'nursery.html'}
  ];

  instance = Ti.UI.createTableView({data:data, backgroundColor: 'transparent'});
  // No event listener's added here to let each portion do their own thing
  
  return instance;
}

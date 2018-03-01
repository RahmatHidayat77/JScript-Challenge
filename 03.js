(function() {
    var csv = [];
        csv.push("NAME, CATEGORY, PRICE");
        csv.push("Xiaomi Redmi 5A, Smartphone, 1199000");
        csv.push("Macbook Air, Laptop, 13775000");
        csv.push("Samsung Galaxy J7, Smartphone, 3549000");
        csv.push("DELL XPS 13, Laptop, 26799000");
        csv.push("Xiaomi Mi 6, Smartphone, 5399000");
        csv.push("LG V30 Plus, Smartphone, 10499000");
  
    console.log(csv);
  
    function jsonDataArray(array) {
      var headers = array[0].split(',');
      var jsonData = [];
      for ( var i = 1, length = array.length; i < length; i++ )
      {
        var row = array[i].split(',');
        var data = {};
        for ( var x = 0; x < row.length; x++ )
        {
          data[headers[x]] = row[x];
        }
        jsonData.push(data);
  
      }
  
      return jsonData;
    }
  
    console.log(jsonDataArray(csv));
  
  
  })();
  
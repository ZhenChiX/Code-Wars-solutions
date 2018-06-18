
//Calculate average//
let find_average = array => array.reduce((a, b) => a + b)/array.length;


//List Filtering//
let filter_list = l => l.filter( i => (i>=0  && typeof(i) ==='number') );


//Use map() to double the values in an array//
let double = array => array.map(i =>  i* 2)

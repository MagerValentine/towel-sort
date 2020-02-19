module.exports = function towelSort (matrix) {
  return matrix == undefined || matrix.length == 0 ? [] : matrix.map((item, index) => {
    if(index % 2 == 0) return item;
    else return item.reverse();
  }).flat(); 
}

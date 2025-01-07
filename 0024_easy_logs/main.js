/* Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
log XA + log XB.
*/

function logs(x , a, b){
  const product = a * b;
  const result = Math.log(product) / Math.log(x);
  return result;
}

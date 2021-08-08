
//The functions linking the user to the right exorsize 

function ranGroundingEx()
{
  num= Math.floor(Math.random() * 16);
  theLink= "groundingEx"+num+".html";
  real= "../templates/"+theLink;
  window.location.href =real;
}

function breathEx() {

  breath = new Array(1,7);
  let numbers = breath.length;
  num = Math.floor(Math.random() * numbers);
  theLink = "groundingEx" + breath[num] + ".html";
  real= "../templates/"+theLink;
  window.location.href =real;
}

function distractEx()
{
disract = new Array(0, 2, 3,4,5,6,10,14);
let numbers = disract.length;
num = Math.floor(Math.random() * numbers);
theLink = "groundingEx" + disract[num] + ".html";
real= "../templates/"+theLink;
window.location.href =real;
}

function sensEx()
{
 var senses = new Array(3,10,13,14,11,12,13,14);
 let numbers = senses.length;
 num = Math.floor(Math.random() * numbers);
 theLink = "groundingEx" + senses[num] + ".html";
 real= "../templates/"+theLink;
 window.location.href =real;
}

function mindsetEx()
{
  var mindset = new Array(2, 3,4,6,9);
  let numbers = mindset.length;
  num = Math.floor(Math.random() * numbers);
  theLink= "groundingEx"+mindset[num]+".html";
  real= "../templates/"+theLink;
  window.location.href =real;
}

function imaginaryEx()
{
  var img = new Array(7,8);
  let numbers = img.length;
  num = Math.floor(Math.random() * numbers);
  theLink= "groundingEx"+img[num]+".html";
  real= "../templates/"+theLink;
  window.location.href =real;
}

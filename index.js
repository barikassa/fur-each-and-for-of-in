//! home work(for each/for in/for of)
//!----1----! נתון מערך של כתבות: כותרת, מחבר, תאריך
// a:  הדפס את כל הכתבות בעזרת forEach
const ARTICLES=[
    {title:"jungle speed", author:"aba gebrehana", date:new Date().getDate()},
    {title:"man on the moon ", author:"baba yaga", date:new Date().getDate()},
    {title:"run MF run", author:"babushka", date:new Date().getDate()}
]
ARTICLES.forEach(element => {
    console.log(element);
});

//--b-- הדפס את כל הכתבות בעזרת forOf
for (const item of ARTICLES) {
    console.log(item);
};

//! --2-- נתון מערך של אובייקטים
// --a-- הדפס את כל ה- key וה-value של כל האובייקטים- שילוב לולאה + forIN
const arrObject=[
    {name:'dani',id:123,age:25, policalPosition:"left"},
    {name:'dani',id:345,age:35, policalPosition:"right"},
    {name:'dani',id:678,age:55, policalPosition:"none"},
]
for (const object in arrObject) {
  console.log(arrObject[object]);
}

//! -- 3--- נתון מערך של 4 ספרים: שם, מחבר ומחיר:
// -- a-- הדפס את כל הספרים
const ARRBOOKS=[
    {author:'dani',price:400,age:25, nameOfbook:"here we are"},
    {author:'zani',price:1200,age:55, nameOfbook:"the last dance"},
    {author:'kani',price:5600,age:125, nameOfbook:"object oriented discripition for js"},
    {author:'nani',price:8900,age:115, nameOfbook:"read me"},
]
//--b-- הדפס את כל המחברים של הספרים

for(const key of ARRBOOKS){
    console.log(key);
    console.log(key.author);
};

//!--4-- נתון מערך של מספרים
// --a --- 
sum=0;
const ARRNUMBER=[1,2,3,4,5,6];
ARRNUMBER.forEach((item, index)=>{
 sum= sum + item;
});
console.log(sum);





















































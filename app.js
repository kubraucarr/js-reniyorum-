//const merhaba = function(){
//    console.log("Merhaba");
//}

//merhaba();

//arrow ile yazılışı

//const merhaba = () => {
    //console.log("MErhaba");
//}
//merhaba();

//parametre gönderdiğimizde şöyle oluyor

//const merhaba = (fisrtName,lastName) => {
    //console.log("Merhaba",fisrtName,lastName);

//}
//merhaba("Kübra","Karaaslan");

//başka bir örnek 

//const cube = function(x){
  //  return x * x * x;

//}
//console.log(cube(5));

//arrow ile yazılışı

//const cube = x => {
  //  return x * x * x ; // tek işlem döndürdüğün için return yazmasanda olur
//}
//console.log(cube(5));



//DESTRUCTİNG 

//destructing kullanmadan önce

//let number1,number2;

//arr = [ 100,200,300,400];
//number1 = arr[0];
//number2 = arr[1];
//console.log(number1,number2);


//destructing kullanınca

//let number1,number2;
////arr= [100,200,300,400];

//[number1,number2] = arr;
//const [number1,number2]=arr;
// console.log(number1,number2);  // destructing başka bir kullnımı


//OBJE DESTRUCTİNG
//const number = {
//  a:10,
 // b:20,
//  c:30,
 // d:40,
 // e:50,
//};
//const  {number1, number2,number3}=numbers; //değerleri alamadık isimleri farklı olduğu için
//const{a,c,e}=numbers;//değerleri o yüzden böyle yazıyouz.
//console.log(a,c,e);




//FUNCTİON DESTRUCTİNG
//const getLangs = () => ["Python","Java","C++"];
//const [lang1,lang2,lang3] = getLangs();
//console.log(lang1,lang2,lang3);


//OBJE
//const person ={
  //name:kübra,
//  year:1999,
 //// salary:0,
 // showInfos: () => console.log("Gösteriliyor")
//}

//const {name:isim,year:yil,salary:maas,showInfos:gösteriliyor}=person;
//console.log(isim,yil,maas);
//gösteriliyor();




//SPREAD OPERATOR
//const langs= ["Python","C++","Php","Java"];
//console.log(langs[0],langs[1],langs[2],langs[3]); ///spread operatorsuz böyle yazıyoruz

//console.log(...langs); //spread operatörle ise böyle yazıyoruz
 //başka bir örnek 

 //const addNumbers = (a,b,c) => console.log(a+b+c);
 //const numbers = [100,200,300];
// addNumbers(...numbers);


//For İn ve For Of
//const person={
  //name:"kübra",
  //age:25,
 //salary:0
//};

//const lang = ["Python","Java","C++","Php"];

//const name = "Kübra";


//FOR İN 
 //obje için 
//for(let prop in person ) {
/// console.log(prop,person[prop]);
//}

//array için
//for (let index in langs){
  //console.log(index,lang[index]);
//}
 
//string için
//for(let index in name){
  //console.log(index,name[index]);
//}


//FOR OF 
//obje için çalışmaz
//for(let value of person){
  //console.log(value);
//}


//array için
//for (let value of lang){
  //console.log(value);
//}

//string için 
//for (let character of name ){
  //console.log(character);
//}




//MAPLER - KEy(ANAHTAR)  Value (değer)

//let myMap = new Map();  // map oluşturma
//console.log(myMap);
//const key1 ="Mustafa";
//const key2 = {a:10,b:20};
//const key3 = () => 2;

//Set //kosnolda map içinde
//myMap.set(key1,"String Değer");
//myMap.set(key2,"Object literal Değer");
//myMap.set(key3,"Function Değer");


//Get  //direkt yazdırdı
//console.log(myMap.get(key1));
//console.log(myMap.get(key2));
//console.log(myMap.get(key3));






//Map boyutu içinde kaç elemn olduğu

//console.log(myMap.size);

//const cities = new Map ();
//cities.set("ankara",5);
//cities.set("istanbul",15);
//cities.set("izmir",4);

//FOR EACH
//cities.forEach(function(value,key){
  //console.log(key,value);
//})

//FOR OF

//for(let value of cities){
 // console.log(value);
//}

//yukardakini destructing ile yazabiliriz

//for (let [key,value] of cities){
 // console.log(key,value);
//}


//Map keys
//for (let key of cities.keys()){
 // console.log(key);
//}



//Map values
//for (let value of cities.values()){
 // console.log(value);
//}


//arraylerden map oluştruma 

//const array = [["key1","value"],["key2","value2"]] //array oluşturalım iç içe array oluşturalım
//const lastMap =new Map(array);
//console.log(lastMap);


//mapten aray oluşturma 

//const cities = new Map();
//cities.set("Ankara",5);
//cities.set("İstanbul",15);
//cities.set("İzmir",4);

//const array=Array.from(cities);
//[["ankara",5],["istanbul",15],["izmir",4]]
//console.log(array);






// REFERANCE VERİ TİPİ VE PRİMİTİVE VERİ TİPİ
//PRİMİTİVE veri tipin a === b diyine direkt eşit çıkıyor
//let a= "mustafa";
//let b="mustafa";
//if (a===b){
 // console.log("Eşit");
//}




//REFERANCE veri tipin de eşitlik çıkmıyor çünkü bellekte farklı yerlerdeler
//let array1=[1,2,3,4,5];
//let array2=[1,2,3,4,5];
//if (array1 === array2){
 // console.log("Eşit");
//}


//const cities = new Map();
//const key =[1,2,3]; eklersem bu sefer konsolda gözükür (array için)
//cities.set("ankara",5); // ankara ve istanbul primitive olduğu için konsolda çıkıyor 
//cities.set("istanbul",15);
//console.log(cities.get("ankara"));

//cities.set([1,2,3],"array");//bu array bellekte farklı yeri gösteriyor konsolda oluşan farklı yeri gösteriyor o yüzden konsolda çıkmıyor 
//console.log(cities.get([1,2,3]));


//SETLER KÜMELER // 100ü bir kere aldı setin özelliği bir kere almak 
//const myset= new Set();
//myset.add(100);
//myset.add(100);
//myset.add(3.14);
//myset.add("mustafa");
//myset.add(true);
//myset.add([1,2,3]);
//myset.add({a:1,b:2});

//const myset2 =new Set([100,3.14,"mustafa"]); //arrayden set oluşturma örneği

//console.log(myset);
//console.log(myset2);


//Size
//console.log(myset.size);

//delete metodu

//myset.delete("mustafa");
//console.log(myset);


//HAS METODU içinde şu bu var mı diye kullanıyoruz

///console.log(myset.has("mustafa"));
//console.log(myset.has(3.14));
//console.log(myset.has([1,2,3]));//false çıkacak çünkü referance bir tip






//FOR EACH 

//myset.forEach(function(value){
 // console.log(value);
//})

//FOR OF 
//for (let value of myset){
 // console.log(value);
//}


//setlerden array oluşturma 
//const array = Array.from(myset);
//console.log(array);




// console.log(this);   //global scope için 


//const emp1 = { //obje literal olarak geçiyor ama biz daha çok obje oluşturabilmek için Constructor yapıcı fonksiyonu kullanıyoruz.
  //name:"mustafa",
  //age:25,
  //showInfos:function() {console.log("göster");}
//};

//const emp2 = {
 // name:"ahmet",
 // age:25


//}
 //emp1.showInfos();
// emp1.salary = 4000 ; diyerek sonradan ekleme yapabiliyorsun 
//console.log(emp1);


//Constructor YAPICI FONKSİYON
//function Employee(){
  //this.name = "mustafa"; //burada oluşturulan tüm objelerin name özelliği mustafa oluyor bunu değiştirmek için aşağıdaki işlemi yapıyıoruz
//}

//const emp1 = new Employee();
//const emp2 = new Employee();
//console.log(emp1);
//console.log(emp2);


//tüm objeler aynı name özelliğini almasın diye şunu yapıyoruz

//function Employee(name, age,salary){
 // this.name=name;
 // this.age=age;
//this.salary=salary;

//fonksiyon ekleyelim constructor'a 
//this.showInfos = function(){
  //console.log(this.name,this.age,this.salary);
//}

//console.log(this);
//}
//const emp1 = new Employee("Mustafa",25,4000);
//const emp2 = new Employee("Ahmet",25,2000);

//console.log(emp1);

//emp1.showInfos(); // fonksiyon ekledik 



// Object Create metodu objelri birbirine bağlayalım

//const obj = {
//  test1:function(){
 //   console.log("test 1");

 // },
 // test2:function(){
 //   console.log("test 2");
 // }
//}
//console.log(obj);  //yukarıdakine prototype yeni obje oluşturalım 


//const obj = {
  //test1:function(){
  //  console.log("test 1");
 // },
 // test2:function(){
 //   console.log("test 2");
  //}
//}
///const emp = Object.create(obj); //bu yapıyla birlikte objenin içerisinde obje prototype oluşturduk
//emp.name="mustafa";
//emp.age=25;
//console.log(emp);


////////prototype zincirlerini oluşturalım 

//function Person(){  //boş bir contructor

//}
//Person.prototype.test1 = function(){
//  console.log("Test 1");
//}

//Person.prototype.test2 = function(){
 /// console.log("Test 2");
//}

//function Employee(name,age){
 // this.name = name;
//  this.age = age;
//}


//Employee.prototype = Object.create(Person.prototype);
//Employee.prototype.myTest=function(){
  //console.log("mytest");
//}
//const emp = new Employee("Mustafa",25);
//console.log(emp);



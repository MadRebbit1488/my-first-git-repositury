//
// if("a" in window) {
//   var a = 1;
// }
// alert(a); //1

//
//  if("a" in window) {
//    a = 1;
// }
// var a;
// alert(a); //1

//
// var a = 5;
// function a(){ }
// alert(a); //5
/* До початку виконання створюється змінна 'a' і ф-ція 'a'. Стандарт написаний так, що ф-ція створюється першою і змінна її не перезаписує.Тобто ф-ція має пріорітет.
Після ініціалізації, коли код починає виконуватись - спрацьовує присвоєння a = 5, перезаписуючи 'a' . 
Оголошення Function Declaration на стадії виконання ігнорується(вже оброблено). 
В результаті alert(a) виводить 5. */

//
// var value = 0;

// function f(){
//   if(1){
//     value = true;
//   }else{
//      value = false;
//   }
//   alert(value);
// }
// f(); // true
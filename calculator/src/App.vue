 <template>
     <div id="app">
         <h1>Ola vue!</h1>
     </div>
 </template>
 
 <script>
 export default {
     
 }
 </script>
 
 <style>
 @font-face {
     font-family: "RobotoMono";
     src: url("./font/RobotoMono-Thin.ttf");
 }
 *{
     font-family: "RobotoMono",monospace;
 }
 body{
     margin: 0;
 }
 #app {
     display: flex;
     flex-direction:  column;
     height: 100vh;
     justify-content: center;
     align-items: center;
     text-align: center;

     color: #ffffff;
     background: linear-gradient(to right, rgb(rgb(83, 105, 118),rgb(41, 46, 73)));
 }
 </style>
 
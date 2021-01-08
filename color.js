class Color{
    constructor(){
        //col1
        this.color1=document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.selectColor("color1");
        });
        //col2
        this.color2=document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.selectColor("color2");
        });
        //col3
        this.color3=document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.selectColor("color3");
        });
        //col4
        this.color4=document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.selectColor("color4");
        });
        //col5
        this.color5=document.getElementById("color5");
        this.color5.addEventListener("click",()=>{
             this.selectColor("color5");
        });
        if(localStorage.getItem("col")==null){
            document.body.style.background="linear-gradient(to right,rgb(211, 130, 39),rgb(28, 10, 92),rgb(101, 8, 119))";
        }
        this.selectColor(localStorage.getItem("col"));
    }
     selectColor(color){
         if(color=="color1"){
             document.body.style.background="linear-gradient(to right,red,rgb(0, 255, 85),rgb(202, 214, 24))";
         }
         else if(color=="color2"){
            document.body.style.background="linear-gradient(to right,rgb(54, 8, 92),rgb(0, 255, 85),rgb(214, 24, 135))";
         }
           else if(color=="color3"){
            document.body.style.background="linear-gradient(to right,rgb(243, 236, 236),rgb(37, 73, 49),rgb(31, 127, 206))";
           }
           else if(color=="color4"){
            document.body.style.background="linear-gradient(to right,rgb(211, 130, 39),rgb(28, 10, 92),rgb(101, 8, 119))";
           }
           else if(color=="color5"){
            document.body.style.background="linear-gradient(to right,rgb(10, 100, 14),rgb(23, 26, 24),rgb(153, 18, 130))";
           }
           localStorage.setItem("col",color);
     }
}
onload=new Color();
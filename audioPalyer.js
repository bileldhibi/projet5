class Palyer{
    constructor(){
        var heightHeader=document.getElementById("head");
        heightHeader.style.height=screen.height+"px";
        if(screen.width<400){
            heightHeader.style.width=screen.width +"px";
        }
        var div=document.getElementById("div");
        div.style.height=screen.height-360+"px";
    }
}
onload=new Palyer();
//class buton
class Button{
    constructor(){
       // this =var
       this.audio=document.getElementById("aud");
       this.prag=document.getElementById("music");
       this.play_pause;
       this.play=document.getElementById("play");
       this.play.addEventListener("click",()=>{
         this.playpause();
       });
       this.nameM=[];
       this.nameM[0]="Radio Algérie Live";
       this.nameM[1]="Music Cheb Salih";
       this.nameM[2]="Music Mohammed khamis Gafsi";
       this.nameM[3]=" Music Rayen ";
       //src
       this.source=[];
       this.source[0]="https://ch1.ice.infomaniak.ch/ch1-32.aac";
       this.source[1]="salih.mp3";
       this.source[2]="mahmed.mp3";
       this.source[3]="rayen.mp3";
       this.i=0;
      this.radio();
       // button next
       document.getElementById("next").addEventListener("click",()=>{
             if(this.i<this.source.length-1){
                 ++this.i;
                 this.play_pause=false;
             }
             else{
                 //يرجع اول
                 this.i=0;
             }
             localStorage.setItem("save",this.i);
             this.radio()
       });
       //  button back
       document.getElementById("back").addEventListener("click",()=>{
        if(this.i>0){
            --this.i;
            this.play_pause=false;
        }else{
            // يرجع لخرى
            this.i=this.source.length-1;
        }
          localStorage.setItem("save",this.i);
        this.radio()

    });
    }
    radio(){
        if(localStorage.getItem("save")!=null){
          this.i=localStorage.getItem("save");
        }
        this.audio.src=this.source[this.i];
        this.prag.innerHTML=this.nameM[this.i];
        this.playpause();
    }
    //-------------------------------------------
    playpause(){
        if(this.play_pause==false){
            this.play.src="pause.png";
            this.audio.play();
            this.play_pause=true;
        }
        else{
            this.play.src="play.png";
            this.audio.pause();
            this.play_pause=false;
        }
    }
}
onload=new Button();
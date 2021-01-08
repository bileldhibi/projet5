class App2{
    constructor(){
        //volume
        this.audio=document.getElementById("aud");
        this.audio.volume=50/100;
       this.volume1= document.getElementById("vol1+");
          this.volume1.addEventListener("change",()=>{
            this.audio.volume=this.volume1.value/100;
        });
        //السرعة
      this.volume_speed=document.getElementById("vol2-");
      this.audio.playbackRate=1;
      this.volume_speed.addEventListener("change",()=>{
        this.audio.playbackRate=this.volume_speed.value/100;
        });
    }

}
onload=new App2();
export function efeitoScroll(){
    if(this.scrollY>this.innerHeight/2){
        document.body.classList.add("bodyactive")
    }
    else{
        document.body.classList.remove("bodyactive")

    }
  }



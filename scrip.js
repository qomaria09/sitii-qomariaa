const pilihan = Array.from(document.getElementsByClassName('angka'));
pilihan.forEach((e)=>{
    e.addEventListener('touchstart', event=> {
      touchstartX = event.changedTouches[0].screenX;
      touchstartY = event.changedTouches[0].screenY;
    }, false);
    e.addEventListener('touchend', event=> {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      touchSwipped();
    }, false);  
    e.addEventListener('mousedown', event => {
      event.preventDefault();
      mousedownX = event.clientX;
      mousedownY = event.clientY;
    }, false);
    e.addEventListener('mouseup', event => {
      event.preventDefault();
      mouseupX = event.clientX;
      mouseupY = event.clientY;
      mouseSwipped();
    }, false);
    function mouseSwipped() {
        let angka = parseInt(e.textContent);
        if (Math.abs(mouseupX - mousedownX) > 0 || Math.abs(mouseupY - mousedownY) > 0) {
            if(mouseupY < mousedownY && angka < 25) {
                let isiA = angka + 1;
                  e.innerHTML = isiA;
              }
              if(mouseupY > mousedownY && angka > 0) {
                let isiA = angka - 1;
                  e.innerHTML = isiA;
              } 
          }
    }
    function touchSwipped() {
        let angka = parseInt(e.textContent);
        if(touchendY < touchstartY && angka<25) {
            let isiA = angka+1;
            e.innerHTML = isiA;
        }       
        if(touchendY > touchstartY && angka>0) {  
            let isiA = angka-1;
            e.innerHTML = isiA;
        }
    }
})
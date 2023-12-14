
AFRAME.registerComponent('mycomponent', {
  'init': function() {
      console.log('This is my component');
  },

  events:{
      click: function(evt){
          this.welcome();
      }
  },


  welcome: function(){
    this.playAudio();
},

  playAudio: function () {
    const audioEl = document.querySelector('#audio');
    audioEl.components.sound.playSound();
  }
});


AFRAME.registerComponent('componente-mercurio', {
  init: function () {
    const self = this;
    this.isVisible = false;

    this.el.addEventListener('click', function () {
      self.toggleInfo();
    });
  },

  toggleInfo: function () {
    const textElement1 = document.querySelector('#infoTextWrapper a-plane');
    const textElement2 = document.querySelector('#infoTextWrapper a-text');

    if (this.isVisible) {
      textElement1.setAttribute('visible', 'false');
      textElement2.setAttribute('visible', 'false');
    } else {
      textElement1.setAttribute('visible', 'true');
      textElement2.setAttribute('visible', 'true');
    }

    this.isVisible = !this.isVisible;
  }
});


AFRAME.registerComponent('componente-liberdade', {
  init: function () {
    const self = this;
    this.isVisible = false;

    this.el.addEventListener('click', function () {
      self.toggleInfo();
    });
  },

  toggleInfo: function () {
    const textElement1 = document.querySelector('#infoTextWrapperLiberdade a-plane');
    const textElement2 = document.querySelector('#infoTextWrapperLiberdade a-text');

    if (this.isVisible) {
      textElement1.setAttribute('visible', 'false');
      textElement2.setAttribute('visible', 'false');
    } else {
      textElement1.setAttribute('visible', 'true');
      textElement2.setAttribute('visible', 'true');
    }

    this.isVisible = !this.isVisible;
  }
});









(function ($) {

    class Modal {
      constructor(element, options) {
          this.default = {
              closeClass: 'close-modal',
              autoClose: false,
              autoCloseTime: 1000,
              opacity: .7,
              position: 'center',
              duration: 500
          };
          this.modal = element;
          this.options = $.extend(this.default, options);
          this.overlay = $('<div class="overlay"></div>');
          this.halfWidth = this.modal.outerWidth() / 2;
          this.halfHeight = this.modal.outerHeight() / 2;
          this.topPosition = {
              'display': 'block',
              'position': 'fixed',
              'top': '100px',
              'left': '50%',
              'opacity': '0',
              'margin-left': `-${this.halfWidth}px`,
              'z-index': '1000'
          };
          this.bottomPosition = {
              'display': 'block',
              'position': 'fixed',
              'bottom': '100px',
              'left': '50%',
              'opacity': '0',
              'margin-left': `-${this.halfWidth}px`,
              'z-index': '1000'
          };
          this.centerPosition = {
              'display': 'block',
              'position': 'fixed',
              'top': '50%',
              'left': '50%',
              'opacity': '0',
              'margin-top': `-${this.halfHeight}px`,
              'margin-left': `-${this.halfWidth}px`,
              'z-index': '1000'
          };

      }

      init() {
          this.showOverlay();
          this.showModal();
          this.events();
      }

      events() {
          this.overlay.on('click', (e) => this.closeModal());
          $(`.${this.options.closeClass}`).on('click', (e) => this.closeModal());
      }

      showOverlay() {
          // Setup style
          this.overlay.css({
              'display': 'block',
              'position': 'fixed',
              'top': '0',
              'left': '0',
              'right': '0',
              'bottom': '0',
              'opacity': '0',
              'background-color': `rgba(0, 0, 0, ${this.options.opacity})`,
              'z-index': '999'
          })
          this.modal.before(this.overlay);
      }

      showModal() {
          let position;
          switch (this.options.position) {
              case 'center': position = this.centerPosition;
              break;
              case 'top': position = this.topPosition;
              break;
              case 'bottom': position = this.bottomPosition;
              break;
          }
          this.overlay.animate({
              opacity: 1
          }, this.options.duration);
          // Setup style
          this.modal.css(position).animate({
              opacity: 1
          }, this.options.duration);
          this.modal.before(this.overlay);

          // Auto Close modal
          if (this.options.autoClose === true) {
              setTimeout(this.closeModal.bind(this), this.options.autoCloseTime);
          }
      }

      closeModal() {
          this.overlay.animate({
              opacity: 0
          }, this.options.duration, () => {
              this.overlay.css({ 'display': 'none' })
          });

          this.modal.animate({
              opacity: 0
          }, this.options.duration, () => {
              this.modal.css({ 'display': 'none' })
          });
      }
    }

    $.fn.easyModal = function (options) {
      new Modal(this, options).init();
    }

}(jQuery));

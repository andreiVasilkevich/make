function _createModel (options) {
    const modal = document.createElement('div')
    modal.classList.add('amodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
            <div class="modal-window">
               <div class="modal-header">
                   <span class="modal-title">Modal title </span>
                   <span class="modal-close">&times;</span>
               </div> 
               <div class="modal-body">
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ea, molestiae corporis eius ipsum eum.</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequatur recusandae. .</p>
               </div>
               <div class="modal-footer">
                    <button>Ok</button>
                    <button>Cansel</button>
               </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModel(options)
    let closeing = false

    return {
        open () {
           !closeing && $modal.classList.add ('open')
        },
        close () {
            closeing = true
            $modal.classList.remove ('open')
            $modal.classList.add('hide')
            setTimeout( () => {
                $modal.classList.remove('hide')
                closeing = false
            },ANIMATION_SPEED)
        }
    }
}
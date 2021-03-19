(function (doc, win) {
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    console.log('1')
    function recalc() {
        let designWidth = 750
        let clientWidth = docEl.clientWidth
        if (!clientWidth || clientWidth > designWidth) return
        docEl.style.fontSize = (100 * clientWidth / designWidth) + 'px'
    }

    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, recalc, false)
    doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
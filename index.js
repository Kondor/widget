window.onload = function () {
    // id, куда будет вставлен виджет
    const insertWidget = document.getElementById('virtual-mirror-widget');
    
    //добавление виджета
    insertWidget.innerHTML += `<iframe src = "index-widget.html" name = "iframe1" id="widgetIframe" width="751px" height="611px" 
                               frameBorder="0" ></iframe>`;
}
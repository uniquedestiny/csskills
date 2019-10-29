(function(){
  // 列表
  const demoList = [
    {name: '毛玻璃', src: './blurred-glass.html', actived: 1},
    {name: '折角', src: './dog-ear.html'},
    {name: '阴影', src: './border-shadow.html'},
    {name: '内圆角', src: './inner-angle.html'},
    {name: '切角', src: './corner-cut.html'},
  ]
  // 渲染
  demoCreate()
  function demoCreate () {
    demoList.forEach(item => {
      var demo = document.createElement('span')
      demo.className = 'list-one'
      demo.innerHTML = item.name
      document.getElementsByTagName('header')[0].appendChild(demo)
      click(demo, item.src)
      if (item.actived){
        setiframe(demo, item.src)
      }
    })
  }
  // 切换
  function click (event, src) {
    event.onclick = function () {
      clear()
      setiframe(event, src)
    }
  }
  // 设置 iframe
  function setiframe (event, src) {
    const iframe =  document.getElementsByTagName('iframe')[0]
      iframe.src = src
      event.className = 'list-one list-one-actived'
  }
  // 清除状态
  function clear () {
    const classDome = Array.from(document.getElementsByTagName('span'))
    classDome.forEach(item => {
      item.className = 'list-one'
    })
  }
})()
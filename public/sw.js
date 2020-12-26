let web = 'website'

this.addEventListener('install',(data)=>{
    data.waitUntil(
        caches.open(web).then((data)=>{
            console.log('data',data)
            data.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "index.html",
                "/",
            ])
        }).catch((err)=>{
            console.log('error',err)
        })
    )
})


this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((result)=>{
              console.log('result2 ', result)
              if(result){
                  return result;
              }
            })
        )
    }
  })
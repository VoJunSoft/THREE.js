 function displayData() {
     const GooglePlayLink = 'https://play.google.com/store/apps/dev?id=7276247598057063173'
     const data = [
         { id: '0', title: 'Zaater', desc: 'Sellers App: Create your own store and start selling', img: '../Gallary/zaatar.png', link: "https://play.google.com/store/apps/details?id=com.junglesoft.zaater" },
         { id: '1', title: 'Alhadath', desc: 'News App: Local news and business indexes for Google Play', img: '../Gallary/Alhadath.png', link: "https://play.google.com/store/apps/details?id=com.junglesoft.alhadath" },
         { id: '2', title: 'ZGshop', desc: 'Shopping App: Test project for clothing store', img: '../Gallary/clothing.png', link: "https://play.google.com/store/apps/details?id=com.junglesoft.zgshop" },
         { id: '3', title: 'Gama Cards', desc: 'Memory cards App: Just for fun', img: '../Gallary/Gama_ Cards.png', link: "https://play.google.com/store/apps/details?id=com.junglesoft.gama" }
     ]

     let footer = document.querySelector('.FooterProjects')
     data.forEach(obj => {
         recSpan = document.createElement('nav')
         recSpan.setAttribute('id', `${obj.id}`)

         img = document.createElement('img')
         img.setAttribute('id', `${obj.id}`)
         img.src = obj.img

         recSpan.appendChild(img)
         footer.appendChild(recSpan)
     });

     footer.addEventListener('click', e => {
         let clickedID = e.target.id
         clickedID === '' ? null : window.open(data[clickedID].link, "_blank")
     })
 }

 displayData()

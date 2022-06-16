 function displayData() {
     const GooglePlayLink = 'https://play.google.com/store/apps/dev?id=7276247598057063173'
     const data = [
         { id: '0', title: 'Zaater', desc: 'Sellers App: Create your own store and start selling', img: '../Gallary/zaatar.png', link: GooglePlayLink },
         { id: '1', title: 'Alhadath', desc: 'News App: Local news and business indexes for Google Play', img: '../Gallary/Alhadath.png', link: GooglePlayLink },
         { id: '2', title: 'ZGshop', desc: 'Shopping App: Test project for clothing store', img: '../Gallary/clothing.png', link: GooglePlayLink },
         { id: '3', title: 'Gama Cards', desc: 'Memory cards App: Just for fun', img: '../Gallary/Gama_ Cards.png', link: GooglePlayLink }
     ]

     let footer = document.querySelector('.FooterProjects');
     let recSpan;

     data.forEach(obj => {
         recSpan = document.createElement('nav');
         recSpan.setAttribute('id', `${obj.id}`);

         img = document.createElement('img')
         img.setAttribute('id', `${obj.id}`);
         img.src = obj.img
             //recSpan.innerHTML = `${obj.desc}`;
         recSpan.appendChild(img)
         footer.appendChild(recSpan);
     });

     footer.addEventListener('click', e => {
         let clickedID = e.target.id;
         clickedID === '' ? null : alert(data[clickedID].title + ' : ' + data[clickedID].desc);
     });
 }

 displayData()
  let celsius = document.getElementById("celsius");
  let fahrenheit = document.getElementById("fahrenheit");
  // let button = document.getElementById("convert-btn");
  let displayResult = document.getElementById("display_result");
  let body = document.body


  celsius.addEventListener('keyup', convertToFarenheit);
  fahrenheit.addEventListener('keyup', convertToCelsius);

  celsius.addEventListener('change', convertToFarenheit);
  fahrenheit.addEventListener('change', convertToCelsius);

  celsius.addEventListener('change', colorChange)
  fahrenheit.addEventListener('change', colorChange);

  celsius.addEventListener('keyup', colorChange)
  fahrenheit.addEventListener('keyup', colorChange);



function convertToFarenheit (e){
  
  if (celsius.value /*&& celsius.value !== "-17.78"*/){
    
    fahrenheit.value = (celsius.value * 9/5 + 32).toFixed(2);
    displayResult.value = `${fahrenheit.value} ℉`;
       
       if(fahrenheit.value > 0){
         displayResult.value = `+${fahrenheit.value} ℉`;
       }
        console.log(celsius.value.length)
    
      if (celsius.value.length > 1 && celsius.value[0] == 0){
        console.log("test - 1")
        if(celsius.value[1] != "."){
          celsius.value = celsius.value.replace(/^0/, "")
          console.log("test - 2")
        }
      }

      else if (celsius.value[0] == "." && !isNaN(celsius.value[1])){
          celsius.value = 0 + celsius.value;
        console.log(celsius.value + " gh")
      }

      else if(celsius.value.length == 3 && celsius.value[1] != 0){
        console.log("rt")
          if(celsius.value[0] == "-" && celsius.value[1] == "."){
            let valToArr = celsius.value.split("")
            valToArr.splice(1, 0, "0")
            celsius.value = valToArr.join("");
            console.log(valToArr.join(""))
          }
      }
    
      else if(celsius.value[0] == "-" && celsius.value[1] == 0 && celsius.value[2] == 0){
        celsius.value = "-0";
        console.log(e.which + " test")
      }
      
      else if (celsius.value[0] == "-" && celsius.value[1] == 0 && !isNaN(celsius.value[2])){
        let stringToArray = celsius.value.split("");
        stringToArray.splice(0, 2, "-");
        celsius.value = stringToArray.join("")
          console.log("rfhr", celsius.value)
      }
  }
  
  // else if(celsius.value == "-17.78"){
  //   displayResult.value = `0.00 ℉`;
  //   }
}


function convertToCelsius (e){
  
  if (fahrenheit.value){
    celsius.value = ((fahrenheit.value - 32) * 5/9).toFixed(2);
    displayResult.value = `${celsius.value} ℃`;
      if(celsius.value > 0){
         displayResult.value = `+${celsius.value} ℃`;
       }
       console.log(fahrenheit.value)
    
      if (fahrenheit.value.length > 1 && fahrenheit.value[0] == 0){
        if(fahrenheit.value[1] != "."){
          fahrenheit.value = fahrenheit.value.replace(/^0/, "")
        }
      }

      else if (fahrenheit.value[0] == "." && !isNaN(fahrenheit.value[1])){
          fahrenheit.value = 0 + fahrenheit.value;
      }
    
      else if(fahrenheit.value.length == 3 && fahrenheit.value[1] != 0){
      console.log("rt")
        if(fahrenheit.value[0] == "-" && fahrenheit.value[1] == "."){
          let valToArr = fahrenheit.value.split("")
          valToArr.splice(1, 0, "0")
          fahrenheit.value = valToArr.join("");
          console.log(valToArr.join(""))
        }
    }
    
    else if(fahrenheit.value[0] == "-" && fahrenheit.value[1] == 0 && fahrenheit.value[2] == 0){
        fahrenheit.value = "-0";
        console.log(e.which + " test")
      }
    else if (fahrenheit.value[0] == "-" && fahrenheit.value[1] == 0 && !isNaN(fahrenheit.value[2])){
      let stringToArray = fahrenheit.value.split("");
      stringToArray.splice(0, 2, "-");
      fahrenheit.value = stringToArray.join("")
      console.log("rfhr", fahrenheit.value)
    }
    
  }
}

// displayResult.value = celsius.value;

  


  
  
  let rgbLightBlue1 = [140, 232, 255];
  let rgbLightBlue2 = [71, 218, 255]
  let rgbBlueMin2r = [83, 161, 224]
  let rgbBlueMin4 = [0, 140, 255]
  
  let rgbRed2 = [252, 69, 3]
  let rgbRed3 = [255, 32, 20]
  let rgbRed4 = [255, 10, 10]
  let rgbRed5 = [255, 0, 0];

  let r = [148, 77, 255]

function colorChange(){    
  if(celsius.value >= 0 && celsius.value <= 9 || fahrenheit.value >= 32 && fahrenheit.value <= 50){
      displayResult.style.color = `#ffff4d`; 
      body.style.backgroundImage = weatherData["0-9"];
    if(celsius.value >= 0 && celsius.value <= 5 || fahrenheit.value >= 32 && fahrenheit.value <= 41){
      displayResult.style.color = `#fff`;
    }
    
  }
  
  else if(celsius.value >= 10 && celsius.value < 20 || fahrenheit.value >= 50 && fahrenheit.value < 68){
      displayResult.style.color = `#ffcc00`;
      body.style.backgroundImage = weatherData["15-20"]
    if(celsius.value >= 10 && celsius.value <= 15 || fahrenheit.value >= 50 && fahrenheit.value <= 59){
      displayResult.style.color = `#ffff00`;
    }
  }
  
  else if (celsius.value >= 20 && celsius.value < 30 || fahrenheit.value >= 68 && fahrenheit.value < 86){
      displayResult.style.color = `#ffb31a`;
      body.style.backgroundImage = weatherData["20-30"]
    if(celsius.value >= 20 && celsius.value < 25 || fahrenheit.value >= 86 && fahrenheit.value < 95){
      displayResult.style.color = `#ffc61a`;
    }
    

  } else if(celsius.value >= 30 && celsius.value < 40 || fahrenheit.value >= 86 && fahrenheit.value < 104){
      displayResult.style.color = `rgb(${rgbRed2.map(colorNum => colorNum)}`;
    body.style.backgroundImage = weatherData["30-40"];
    if(celsius.value >= 30 && celsius.value <= 35 || fahrenheit.value >= 86 && fahrenheit.value < 95){
      displayResult.style.color = `#ff8000`;
    }
  }
  
    else if(celsius.value >= 40 && celsius.value < 50 || fahrenheit.value >= 104 && fahrenheit.value < 122){
      displayResult.style.color = `rgb(${rgbRed4.map(colorNum => colorNum)}`;
      body.style.backgroundImage = weatherData["40-50"];
    if(celsius.value >= 40 && celsius.value < 45 || fahrenheit.value >= 104 && fahrenheit.value < 113){
      displayResult.style.color = `rgb(${rgbRed3.map(colorNum => colorNum)}`;
    }
  }
  
  else if (celsius.value >= 50 || fahrenheit.value >= 122){
      displayResult.style.color = `rgb(${rgbRed5.map(colorNum => colorNum)}`;
    }
  
  else if(celsius.value <= -20 && celsius.value >= -30 || fahrenheit.value <= -4 && fahrenheit.value >= -22){
      displayResult.style.color = `rgb(${rgbLightBlue1.map(colorNum => colorNum)}`;
      body.style.backgroundImage = weatherData["-20-(-30)"];
  }
  
  else if (celsius.value <= -10 && celsius.value >= -20 || fahrenheit.value <= 14 && fahrenheit.value >= -4){
      displayResult.style.color = `rgb(${rgbLightBlue2.map(colorNum => colorNum)}`;
      body.style.backgroundImage = weatherData["-10-(-20)"];
    if(celsius.value <= -10 && celsius.value >= -15 || fahrenheit.value <= 14 && fahrenheit.value >= 5){
      displayResult.style.color = `rgb(${rgbBlueMin2r.map(colorNum => colorNum)}`;
    }
  }
  
    else if (celsius.value <= 0 && celsius.value > -10 || fahrenheit.value <= 32 && fahrenheit.value >= -14){
      displayResult.style.color = `rgb(${rgbBlueMin4.map(colorNum => colorNum)}`;
      body.style.backgroundImage = weatherData["-5-(-10)"];
      
      
    if(celsius.value <= 0 && celsius.value >= -5 || fahrenheit.value <= 32 && fahrenheit.value >= 23){
      displayResult.style.color = `#0073e6`;
      body.style.backgroundImage = weatherData["-0-(-5)"]
    }
  }
  else{
    displayResult.style.color = `rgb(${rgbLightBlue1.map(colorNum => colorNum)}`
    body.style.backgroundImage = weatherData["-100-(-1000)"];
  }
  
}







let weatherData = {
    "0-9": 'url("https://www.itl.cat/pngfile/big/322-3226044_windows-nature-backgrounds.jpg")',
    //https://wallpaperaccess.com/full/2033952.jpg
    
    //https://c0.wallpaperflare.com/preview/502/422/462/germany-sun-rays-sunny.jpg
    //https://www.zastavki.com/pictures/originals/2014/Nature___Seasons___Spring_Spring_Nature_in_the_forest_on_the_slopes_065905_.jpg
    
    //https://wallpaperaccess.com/full/86938.jpg
    
    //https://www.teahub.io/photos/full/89-895539_nature-green-aesthetic-background.jpg
    
    //http://thecoolhunter.net/wp-content/uploads/2017/06/CLOUDS_TCH.jpg
    //https://i.guim.co.uk/img/media/4f891d56d148affd6b3cd1f934067a8e72f4d675/0_304_5402_3241/master/5402.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1ee75162a80bb24fb58bdfe0e5b79109
    
    //https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9cfff2a0-4c1d-4b9b-acfc-688de5aa1760/deiblvi-bca0af08-53e4-4027-b782-19aaf57f4c99.jpg/v1/fill/w_900,h_900,q_75,strp/thunderclouds_by_laurensspruit_deiblvi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvOWNmZmYyYTAtNGMxZC00YjliLWFjZmMtNjg4ZGU1YWExNzYwXC9kZWlibHZpLWJjYTBhZjA4LTUzZTQtNDAyNy1iNzgyLTE5YWFmNTdmNGM5OS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZUbW_hjSvlcFzOQkELBvaU1hamkf0Cl2hw7LSiIz_Do
    
    //https://www.teahub.io/photos/full/89-895539_nature-green-aesthetic-background.jpg
        
   
     "15-20": `url("https://i.pinimg.com/originals/3c/27/5d/3c275d5f27a7d093c96a6fec825c9f7b.jpg")`,
    
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUybdvRBWqIy1tQY3jvCN969V4gNsf0YGwd-2LBIG1EZR90lsf9i4TIjG4FTiZ0Y5Wks&usqp=CAU
    
    //https://www.google.com/search?q=real+sunny+lake+forrest&tbm=isch&ved=2ahUKEwjj-4Kc1OL2AhV7g_0HHfp2BbIQ2-cCegQIABAA&oq=real+sunny+lake+forrest&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJ1DfA1jFDmDBD2gAcAB4AIABgAGIAbgIkgEDMC45mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=uHA-YuO_NPuG9u8P-u2VkAs&bih=657&biw=1366#imgrc=WLG19FIBWbnn_M&imgdii=rnrk0elRMLSSTM
    
    //https://s1.1zoom.me/big0/555/USA_Autumn_Parks_Forests_487052.jpg
    //https://images4.alphacoders.com/745/745848.jpg
    //https://wallpaperaccess.com/full/86948.jpg
    //https://www.teahub.io/photos/full/224-2242336_spring-nature-mountain-view-wallpaper-spring-nature.jpg
    
    //https://static.wikia.nocookie.net/timteddy-adventures-2016/images/7/75/Teddy_Hills.jpg/revision/latest?cb=20170811092220
    
    //https://www.superiorwallpapers.com/images/lthumbs/2015-11/11315_Beautiful-sunny-day-of-summer-nature-landscape.jpg
    
    //https://free4kwallpapers.com/uploads/originals/2015/11/03/a-beautiful-sunny-day-wallpaper.jpg
    
    //https://wallpapercave.com/wp/wp4958791.jpg
    
    //https://wallpaperaccess.com/full/535628.jpg
    //https://wallpaperfx.com/uploads/wallpapers/2015/05/12/16630/preview_sunny-green-hills.jpg
    //https://cdn.suwalls.com/wallpapers/nature/sunny-summer-day-46251-1920x1200.jpg
    
    "20-30": `url("https://images5.alphacoders.com/568/thumb-1920-568879.jpg")`,
    //https://images4.alphacoders.com/110/110958.jpg
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuyAREEVHz7uYcA5TDbtTD2wujTiV4nbcWB1r86OvULZajHjoeqPhBTsyzNWYzQab_F4&usqp=CAU
    //https://www.teahub.io/photos/full/95-953404_photos-for-ipad-forest-wallpaper-hd-download.jpg
    //https://images5.alphacoders.com/394/394934.jpg
    //https://live.staticflickr.com/7260/27621351880_37621bf45e_b.jpg
    //https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/news/featured_media/27396944059_9ab06d4b35_o_0.jpg?N6Ndluvhjc92LM5ejQ.CLGnd8_GeYkp3&itok=WYpMA95m
    
    "30-40": `url("https://www.marketingtochina.com/wp-content/uploads/2019/11/Africa-International-Business_Photo_sized2.jpg")`,
    
    //https://cdn.kimkim.com/files/a/content_articles/featured_photos/12e052c43a886029ecabb97637a4a631baf15a69/big-80d5cb90c5cb159fb896cd4617058b6f.jpg
    //https://wpapi.go2africa.com/wp-content/uploads/2020/04/sutirta-budiman-masai-mara-go2africa.jpg
    //https://pbs.twimg.com/media/DqFj0TQUUAAhNtA.jpg:large
    
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOVZh5emCEjd7NtZaQId8swKj9MDdSdo3rAyxWufHCpc3mkheyXDqkdazseP1EHzuyw8&usqp=CAU
    
    //https://www.exodus.co.uk/sites/exod/files/styles/exo_1168_0_scale/public/content/uploads/2015/06/26806_Madagascar_GeorgePearson_1.jpg?t=1IdLjU&itok=GTnWEw0F
    
    //https://africanpeoplewildlife.org/wp-content/uploads/2021/06/Lioness-in-tree-feature-c.jpg
    
    "40-50": `url("https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg")`,
    //https://www.treehugger.com/thmb/ZxvbN4DqNe6CbOCRYdbCVew3RZY=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1221144994-fe02788016ef41859e3ec855d1d9631a.jpg
    
    //https://upload.travelawaits.com/ta/uploads/2021/04/0afede884a4a162233687ed77ef910afede.jpg
    
    //https://cdn.britannica.com/67/3867-050-F385E388/Sahara-world-most-part-Africa.jpg
    
    //https://www.openaccessgovernment.org/wp-content/uploads/2020/10/dreamstime_xxl_91584778.jpg
    
    //https://www.onthegotours.com/blog/wp-content/uploads/2019/08/Oasis-over-Sand-dunes-in-Erg-Chebbi-of-Sahara-desert-in-Morocco-Africa.jpg
    
    //https://www.airpano.com/files/algeria-video-vp_big.jpg
    
    //https://estaticos.megainteresting.com/media/cache/1140x_thumb/uploads/images/article/5e4fc71b5cafe8297ab14589/sahara-verde_0.jpg
    
    //https://i.guim.co.uk/img/media/ab2782360d644294da6683170426e9149fb078df/0_158_6133_3680/master/6133.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f6af01d070ac7bbe40e1e32b9a92236c
    
    //https://www.saharaluxurytours.com/wp-content/uploads/2019/07/Morocco-Luxury-Tour-min-600x450.jpg
    
    //https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/f8/3b/70/sahara-desert-trips-morocco.jpg
    
    //https://www.weather.gov/images/ama/climate/50Ranges/MarchRanges.JPG
    
    "50-100": `url("https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/02/image_of_mars_seen_by_osiris/10287257-2-eng-GB/Image_of_Mars_seen_by_OSIRIS.jpg")`,
    
    //https://cdn.mos.cms.futurecdn.net/yge2s7gYkik6hT4D7LG9hV.jpg
    //https://www.worldatlas.com/r/w1200/upload/1d/8e/a7/shutterstock-1104793244.jpg
    //https://i.natgeofe.com/k/acd528f6-0862-4a81-94d9-29084bdc0d47/sun_square.jpg
   //https://cdn.mos.cms.futurecdn.net/dBFuYGruGdT95wFwHEu5VM.jpg
    
    

    "-0-(-5)": `url("https://i.pinimg.com/originals/b3/f2/19/b3f219ea2995a051fd6f4cad388e160e.jpg")`,
    //https://vistapointe.net/images/zermatt-3.jpg
    //https://www.wallpapers13.com/wp-content/uploads/2016/07/Hot-summer-night-on-the-shore-of-lake-Desktop-Wallpaper-HD-5200x3250-840x525.jpg
    
    "-5-(-10)": `url("https://wallpaperaccess.com/full/1457867.jpg")`,
    //https://www.google.com/search?q=real+sunny+nature+wallpaper+%2B20+celsius&tbm=isch&ved=2ahUKEwj31ba90-L2AhVC-4UKHSIPD2sQ2-cCegQIABAA&oq=real+sunny+nature+wallpaper+%2B20+celsius&gs_lcp=CgNpbWcQA1DMBVjCCmDGDGgAcAB4AIABdYgBlwWSAQMwLjaYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=8m8-YveUHcL2lwSinrzYBg&bih=657&biw=1366#imgrc=qB3LecK2SHPooM&imgdii=-aur7b5ftDRZLM
    
    
   "-10-(-20)": `url("https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_14664244.jpg?crop=0,34,2000,1328&wid=828&hei=550&scl=2.4154589371980677")`,
    //https://wallpaperaccess.com/full/2539665.jpg
    //https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/YingHanAL.jpg?crop=0,25,4000,2200&wid=4000&hei=2200&scl=1.0
    //https://i.pinimg.com/474x/cd/f5/8e/cdf58ef687311b94048346f38398c852.jpg
    //https://ribhuv.files.wordpress.com/2014/09/winter-nature-photography-nature-backgrounds-snow-backgrounds-30044.jpg
    
    //https://i.pinimg.com/550x/c6/70/b8/c670b89f2a2cd3f04996bdc50de8e738.jpg
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP-FSnzzamgYv3uPHoqesOVQhJCFYrfDs1_8d7XFSRo4Mc8I5zE_ZA4ILO-3ufsm2BPmo&usqp=CAU
    
    "-20-(-30)": `url("https://www.tripsavvy.com/thmb/b4E0TKWbUb4GHfrJIlFLY9Hoasw=/2119x1414/filters:fill(auto,1)/northern-lights-at-mount-kirkjufell--iceland-1045987138-3f37999a3b8944999b0c3520ce83bd6c.jpg")`,
    
    //https://fullsuitcase.com/wp-content/uploads/2016/11/Top-Winter-Activities-Iceland.jpg.webp
    //https://images.squarespace-cdn.com/content/v1/577d2211414fb56605e1e917/1487872699205-P92B4PJTGA2TI9GAK2A4/image-asset.jpeg?format=1000w
    //https://fullsuitcase.com/wp-content/uploads/2016/09/Best-Iceland-winter-itinerary-for-a-one-week-self-drive-trip.jpg
    //https://guidetoiceland.imgix.net/411611/x/0/1-is-jpg
    //https://independenttravelcats.com/wp-content/uploads/2017/12/northernlights.jpg
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBdp3uTyr82PMO_lFUIytT9UTMPlrNrZSlRLMBq9s9ePql0wp8dQAEvqdf_2t3Jto2bs&usqp=CAU
    //https://independenttravelcats.com/wp-content/uploads/2017/12/northernlights.jpg
    //https://img2.goodfon.com/wallpaper/nbig/f/bf/iceland-nature-landscape.jpg
    //https://wallpaperaccess.com/full/2383454.jpg
    //https://whereandwander.com/wp-content/uploads/2020/03/Ultimate-Iceland-Winter-Road-Trip-Route-1.jpg
    
    "-30-(-40)": `url("https://whereandwander.com/wp-content/uploads/2020/03/Ultimate-Iceland-Winter-Road-Trip-Route-1.jpg")`,
    
    "-40-(-50)": `url("")`,
    
    
    "-100-(-1000)": `url("https://www.grunge.com/img/gallery/bizarre-things-weve-sent-to-outer-space/l-intro-1617974432.jpg")`,
   
 //https://www.kxan36news.com/wp-content/uploads/2020/06/httpscdnimg.rg_.ruimgcontent1908893istock-1153308175_d_850.jpg.jpg //https://estaticos.megainteresting.com/media/cache/1140x_thumb/uploads/images/gallery/5da497245bafe8ca043c9903/astronautas_0.jpg
    //https://ploughshares.ca/wp-content/uploads/2019/11/blue-universe-956981-1500x844.jpg
    //https://www.google.com/search?q=cold+in+cosmos&tbm=isch&ved=2ahUKEwi88sfhzOL2AhUP_BoKHVhLA_QQ2-cCegQIABAA&oq=cold+in+cosmos&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoGCAAQCBAeUM8FWNgHYIoJaABwAHgAgAGIAYgB4gOSAQMwLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=52g-YvziDI_4a9iWjaAP&bih=657&biw=1366#imgrc=Y9_Iv5h5VTpnIM&imgdii=shnHqcURlHkl2M
    //https://museumofaviation.org/wp-content/uploads/2021/01/01_astronaut_Yes-Outer-Space-Has-a-Smell%E2%80%94Heres-What-It-Smells-Like_241509286_Andrey-Armyagov.jpg
    
    
    //https://image.sciencenordic.com/1382965.jpg?imageId=1382965&panow=0&panoh=0&panox=0&panoy=0&heightw=0&heighth=0&heightx=0&heighty=0&width=1200&height=675
    
        //https://www.openaccessgovernment.org/wp-content/uploads/2021/01/dreamstime_xxl_57323716.jpg
  
}














  // celsius.addEventListener('keypress', pereventZero);
  // fahrenheit.addEventListener('keypress', pereventZero);


// function pereventZero(e){
//    if (this.value.length == 0 && e.which == 48)
//    {
//       e.preventDefault();
//    }
// };




// fahrenheit.addEventListener('focusin', function() {
//   console.log('focused: ', document.activeElement)
// }, true);

// celsius.addEventListener('focusin', function() {
//   console.log('focused: ', document.activeElement)
// }, true);

// console.log(fahrenheit.value)



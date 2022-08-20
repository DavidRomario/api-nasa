function fnBuscaFotoDoDia(date) {
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=nWzJKM2mcHm6f3WSjfa81gUu7bY3INnb3XxwXazr&date=${date}`
        )
        .then((res) => res.json())
        .then((dados) => {
            console.log(dados);
            document.getElementById('titulo').innerHTML = dados.title;
            document.getElementById('desc').innerHTML = dados.explanation;
            var img = dados.url;
            document.getElementById('pic').setAttribute('src', img);
            document.getElementById('data').innerHTML = dados.date;
        });
}

var botao = document.getElementById('btn');
botao.addEventListener("click", (e) => {
    var input = document.querySelector("#dt")
    var busca = input.value
    console.log(busca)
    fnBuscaFotoDoDia(busca)
    
});


/*/  "copyright":"Tunc Tezel",
 "date":"2022-08-19",
 "explanation":"Saturn is the most distant planet of the Solar System easily visible to the unaided eye. With this extraordinary, long-term astro-imaging project begun in 1993, you can follow the ringed gas giant for one Saturn year as it wanders once around the ecliptic plane, finishing a single orbit around the Sun by 2022. Constructed from individual images made over 29 Earth years, the split panorama is centered along the ecliptic and crossed by the plane of our Milky Way galaxy. Saturn's position in 1993 is at the right side, upper panel in the constellation Capricornus and progresses toward the left. It returns to the spot in Capricornus at left in the lower panel in 2022. The consistent imaging shows Saturn appears slightly brighter during the years 2000-2005 and 2015-2019, periods when its beautiful rings were tilted more face-on to planet Earth.",
 "hdurl":"https://apod.nasa.gov/apod/image/2208/Saturn1993-2022Lb.jpg",
 "media_type":"image",
 "service_version":"v1",
 "title":"Saturn: 1993 - 2022",
 "url":"https://apod.nasa.gov/apod/image/2208/Saturn1993-2022Lb1024.jpg" /*/

 // metodos http conceito de api rest.
 // query parametros body parametros e como utilizar cada um.
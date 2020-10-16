export const getAPI = () => {
    return new Promise((succeed, fail) => {
        let request = new XMLHttpRequest(),
            url = "http://api.openweathermap.org/data/2.5/weather?id=501175&appid=734edb3367991b1a69e699dd6b274cc3&units=imperial";
        request.open("GET", url, true);
        request.addEventListener("load", () => {
            succeed(request.response);
        });
        request.send();
    })
}
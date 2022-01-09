

async function getMyData() {
    fetch("data/photographers.json") 
        .then(function(res) {
            if (res.ok) {
            return res.json();
            }
        })
        .then(function (data) {
            const Aphotographers = [...data.photographers];
            const Amedia = [...data.media];
            console.log(Amedia)
        })
        .catch(function(err) {
            // Une erreur est survenue
        });
}

getMyData()
console.log(Amedia)





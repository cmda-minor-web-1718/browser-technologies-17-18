const ejs = require('ejs')
const express = require('express')
const bodyParser = require('body-parser')
const ejsLint = require('ejs-lint')
const ngrok = require('ngrok')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

const port = 4000

const tostiList = { 
    "broodsoort": {
        "wit": {
            "name": "Wit brood",
            "price": "€1.00"
        },
        "bruin": {
            "name": "Bruin brood",
            "price": "€1.50"
        },
        "roggen": {
            "name": "Roggen brood",
            "price": "€2.75"
        },
        "spelt": {
            "name": "Spelt brood",
            "price": "€4.50"
        }
    },
    "kaassoort": {
        "jong": {
            "name": "Jonge kaas",
            "price": "€1.50"
        },
        "jong-belegen": {
            "name": "Jong belegen kaas",
            "price": "€1.85"
        },
        "belegen": {
            "name": "Belegen kaas",
            "price": "€2.25"
        },
        "oud": {
            "name": "Oude kaas",
            "price": "€2.95"
        },
        "mozzarella": {
            "name": "Mozzarella",
            "price": "€1.75"
        },
        "geitenkaas": {
            "name": "Geitenkaas",
            "price": "€2.75"
        }
    },
    "extra": {
        "ham": {
            "name": "Ham",
            "price": "€2.50"
        },
        "tomaat": {
            "name": "Tomaten",
            "price": "€1.50"
        },
        "ananas": {
            "name": "Ananas",
            "price": "€2.00"
        },
        "augurk": {
            "name": "Augurk",
            "price": "€2.00"
        }
    },
    "saus": {
        "ketchup": {
            "name": "Ketchup",
            "price": "€1.00"
        },
        "mayonaise": {
            "name": "Mayonaise",
            "price": "€1.50"
        },
        "satesaus": {
            "name": "Satésaus",
            "price": "€2.50"
        },
        "knoflooksaus": {
            "name": "Knoflooksaus",
            "price": "€1.75"
        },
        "mosterd": {
            "name": "Mosterd",
            "price": "€1.75"
        },
        "joppie": {
            "name": "Joppie saus",
            "price": "€1.75"
        }
    }
}

app.get('/', function(req, res){
    res.render('index.ejs', {list: tostiList})
})

app.post('/prijs', function(req, res) {
    const {broodsoort, kaassoort, extra, saus} = req.body
    let broodworth = broodsoort.substr(broodsoort.length - 4, broodsoort.length)
    let kaasworth = kaassoort.substr(kaassoort.length - 4, kaassoort.length)
    let sum = 0
    if ( Array.isArray(extra) ) {
        const waarde = extra.forEach(element => {
            let worth = Number(element.split('€')[1])
            sum += worth
        })

    } else if (extra === undefined) {

    }
    
    else{
        let worth = Number(extra.split('€')[1])
        sum += worth
    }

    if ( Array.isArray(saus) ) {
        const waarde = saus.forEach(element => {
            let worth = Number(element.split('€')[1])
            sum += worth
        })

    } else if (saus === undefined) {}

    else {
        let worth = Number(saus.split('€')[1])
        sum += worth
    }

    sum = sum + Number(broodworth) + Number(kaasworth)
    console.log(typeof extra)
    res.render('prijs.ejs', {prijs: sum, brood: broodsoort, kaas: kaassoort, extra: extra, saus: saus})
    // res.redirect('/')
})
 
app.listen(port, function(){
})
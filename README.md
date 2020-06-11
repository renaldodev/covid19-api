# Covid-19 REST API 

This is covid19 data providing a REST
API to a DataMapper-backed model.

## Install

    git clone https://github.com/renaldodev/covid19-api.git
    
    npm  install
    
## Run the app

    npm start

# REST API

The REST API to the example app is described below.

## Get list of coutries

### Request

`GET /api/`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 11 Jun 2020 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    
     [{
    "country": "Hong Kong",
    "confirmed": "1,108",
    "confirmedChangeToday": "0",
    "critical": "4",
    "death": "4",
    "deathChangeToday": "0",
    "tests": "241,992",
    "active": "53",
    "recovered": "1,051"
    },
    {
    "country": "Macao",
    "confirmed": "45",
    "confirmedChangeToday": "0",
    "critical": "Unknown",
    "death": "Unknown",
    "deathChangeToday": "0",
    "tests": "Unknown",
    "active": "Unknown",
    "recovered": "45"
    }]


## Get a specific Country

### Request

`GET /api/country/:country`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/country/angola

### Response

    HTTP/1.1 200 OK
    Date: Thu, 11 Jun 2020 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {
    "country": "Angola",
    "confirmed": "113",
    "confirmedChangeToday": "0",
    "critical": "1",
    "death": "4",
    "deathChangeToday": "0",
    "tests": "10,000",
    "active": "69",
    "recovered": "40"
    }

## Get a non-existent country

### Request

`GET /api/country/:country`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/country/never

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 11 Jun 2020 12:36:31 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}



## Get global cases

### Request

`GET /api/total`

    curl -i -H 'Accept: application/json' http://localhost:8080/api/total

### Response

    HTTP/1.1 200 OK
    Date: Thu, 11 Jun 2020 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

     {
    "country": "TOTAL",
    "confirmed": "7,451,532",
    "confirmedChangeToday": "5,303",
    "critical": "53,811",
    "death": "418,872",
    "deathChangeToday": "735",
    "tests": "104,557,225",
    "active": "3,341,495",
    "recovered": "3,527,530"
     }
   ## Crowler source
   [site](https://ncov2019.live/)
   
   ## Built With

* [cheerio](https://cheerio.js.org/) 
* [express](https://expressjs.com/)

## Authors

**Renaldo José** - renaldomateus77.dev@gmail.com -instagram [@renaldodev](https://www.instagram.com/renaldo.rj) - twitter [@renaldodev](https://twitter.com/renaldodev)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

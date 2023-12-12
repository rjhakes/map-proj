export const environment = {
    WORLDBANK_URL: 'https://api.worldbank.org/v2/country/'
}

/*
    # url for population total for specified year
	WORLDBANK_URL + {id} + /indicator/SP.POP.TOTL?date=2020&format=json

	# url for GDP (US$) for specified year
	WORLDBANK_URL + {id} + /indicator/NY.GDP.MKTP.CD?date=2020&format=json
*/
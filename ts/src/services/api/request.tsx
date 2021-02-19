import React from "react";

const url: string[] = [
    'https://jsonplaceholder.typicode.com/photos/1',
    'https://api.foursquare.com/v2/venues/explore?near=cherkasy&limit=10&client_id=P4AMQPLM1YATGAP3OBNOVWOI2UCCTJRXZ10UTQ3ZXB2BVXK0&client_secret=BVQBVUYNVNNDZ2BO2WQ2IVILOB0HNEFUFEYGAM5G1TLYJ3KR&v=20201015',
    'https://pixabay.com/api/?key=20320603-8a3de52dac795702a3f5a9b6d&q=sky+stars+galaxy+black+blue&image_type=photo&min_width=250&per_page=150&orientation=horizontal'
]

export const request = async (number: number) => {
    return await fetch(
        url[number]
    )
        .then((response) => {
            return response.json();
        })
}
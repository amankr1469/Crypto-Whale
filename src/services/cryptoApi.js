import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//Creating API service to fetch data from Public API.
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '2d994de663mshf9dea2178bab0bcp1e13bdjsne37bf6408ce0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url,headers:cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptos : builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory:builder.query({
            query: ({coinId,timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        })
    })

});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi;


  




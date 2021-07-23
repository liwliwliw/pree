import { func } from 'prop-types'
import serverice from './request'

export function getAction(url,params){
    return serverice({
        url:url,
        method:'GET',
        params:params,
    })
}

export function postAction(url,data){
    return serverice({
        url:url,
        method:'POST',
        data:data
    })
}
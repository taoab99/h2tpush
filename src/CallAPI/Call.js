import axios from "axios";
import * as Config from './Config';
export default function (enpont, method ="GET", data){
    return(
        axios({
            method: method,
            url:`${Config.API_CALL}/${enpont}`,
            data:data
        }).catch(err=>{
            console.log(err);
        })
    )
}
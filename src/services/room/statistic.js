import { routerLinks } from "utils";
// import { Message } from "components";
// import {formatCurrency} from "utils"
import axios from "axios";


const statistic={
    nameLink:"Room",
    get:async()=>{
        try{
            const { data } = await axios.get(`${routerLinks(statistic.nameLink, "api")}/analysis`);
            return data;
        }catch(response){
            console.log(response, "err");
            return false;
        }
    }
}
export default statistic;
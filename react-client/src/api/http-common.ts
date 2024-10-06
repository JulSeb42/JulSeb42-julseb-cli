/*=============================================== Http common ===============================================*/

/*
    Create API link
*/

import axios from "axios"
import { SITE_DATA } from "data"

export const http = axios.create({
    baseURL: SITE_DATA.BASE_API_URL,
    headers: { "Content-type": "application/json" },
})

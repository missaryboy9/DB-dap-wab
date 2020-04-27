import { post } from "../js/axios";

exports.getnews = params => post("/toutiao/index", params);

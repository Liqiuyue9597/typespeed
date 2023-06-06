import { component, getMapping, postMapping, log } from "../../";
import { req, res, reqQuery, reqBody, reqForm, reqParam } from "../../src/route.decorator";


@component
export default class TestRequest {

    @getMapping("/request/res")
    testRes(@req req, @res res) {
        res.send("test res");
    }

    @getMapping("/request/query")
    testQuery(req, res, @reqQuery("id") id: number) {
        log("id: " + id);
        res.send("test query");
    }

    @postMapping("/request/body")
    testBody(@res res, @reqBody body: object) {
        log("body: " + JSON.stringify(body));
        res.send("test body");
    }

    @postMapping("/request/form")
    testForm(@res res, @reqForm("name") name: string) {
        log("form: " + JSON.stringify(name));
        res.send("test form");
    }

    @getMapping("/request/param/:id")
    testParam(@res res, @reqParam("id") id: number) {
        log("id: " + id);
        res.send("test param");
    }
}
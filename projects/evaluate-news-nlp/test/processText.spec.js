import {processText} from '../src/client/js/textProcessor'


describe("Testing processText functionality", () => {

    //fetch = jest.fn(() => Promise.resolve());

    test("Testing the function existance", () => {
            
           // Input

           // The expected output

           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           expect(processText).toBeDefined();
    }),

    test("Pass empty value", () => {
        window.alert = jest.fn(); //this here because alert throw and exception; 
        window.alert.mockClear();//this here because alert throw and exception; 

        // Input
        let text = "";
        let url = "https://api.meaningcloud.com/sentiment-2.1";
        let lang = "en"
        // The expected output
        let response = false;

        // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
        expect(processText(url, text, lang)).toBe(response);
    })

});

describe("interaction with web elemnt ", function () {
    it("enter value in a field", function () {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple mac book');
    })
})
$(document).ready(function () {
    $("div[id^='portfolioModalCS']").each(function () {
        var currentModal = $(this);
        //click next
        currentModal.find('.next').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest());
            currentModal.nextAll("div[id^='portfolioModalCS']").first().modal('show');
        });

        //click prev
        currentModal.find('.prev').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest("div[id^='portfolioModal']"));
            currentModal.prevAll("div[id^='portfolioModalCS']").first().modal('show');
        });
    });
});

$(document).ready(function () {
    $("div[id^='portfolioModalA']").each(function () {
        var currentModal = $(this);
        //click next
        currentModal.find('.next').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest());
            currentModal.nextAll("div[id^='portfolioModalA']").first().modal('show');
        });

        //click prev
        currentModal.find('.prev').click(function () {
            currentModal.modal('hide');
            //            console.log(currentModal.closest("div[id^='portfolioModal']"));
            currentModal.prevAll("div[id^='portfolioModalA']").first().modal('show');
        });
    });
});
